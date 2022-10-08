import type { TradeFormValues, TradeTickerProps } from 'types';
import React, { useEffect, useRef, useState } from 'react';
import { createChart, IChartApi, ISeriesApi } from 'lightweight-charts';
import { Box, Center, Flex } from '@chakra-ui/layout';
import { useForm } from 'react-hook-form';
import { getCandles } from 'components/api/nomics';

// enum Intervals {
//   oneDay = "1d", 
//   fourHours = "4h", 
//   oneHour = "1h", 
//   halfHour = "30m", 
//   fiveMins = "5m", 
//   oneMin = "1m"
// };

type NomicsCandle = {
  timestamp: string,
  low: number,
  open: number,
  close: number,
  high: number,
  volume: number,
  num_trades: number,
  price_outlier: string,
  volume_outlier: string
};

const intervals: any = {
  minutes: ['1m', '5m', '30m'],
  hours: ['1h', '4h'],
  days: ['1d', '7d', 'M'],
}

export function TradeChart ( { tradeTicker }: any) {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const chart = useRef<IChartApi>();
  const resizeObserver = useRef<ResizeObserver>();
  const [candleSeries, setCandleSeries] = useState<ISeriesApi<'Candlestick'>>();
  const [volumeSeries, setVolumeSeries] = useState<ISeriesApi<'Histogram'>>();
  const [interval, setInterval] = useState('1d');
  const [start, setStart] = useState('2020-01-12T15:00:00Z');
  const [end, setEnd] = useState(new Date().toISOString());

  const [isLoading, setIsLoading] = useState(false);
  const [base, setBase] = useState('BNB');
  const [quote, setQuote] = useState('USDT');

  useEffect(() => {
    if (!chartContainerRef.current) {
      return () => console.error('Tradingview Container element is missing');
    }

    console.log(tradeTicker)
    setBase(tradeTicker.from);
    setQuote(tradeTicker.to);

    chart.current = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: chartContainerRef.current.clientHeight,
      layout: {
        backgroundColor: 'rgb(23, 27, 38)',
        textColor: 'rgba(255, 255, 255, 0.9)',
      },
      grid: {
        vertLines: {
          color: 'rgb(35, 38, 50)',
        },
        horzLines: {
          color: 'rgb(35, 38, 50)',
        },
      },
      timeScale: {
        borderColor: '#485c7b',
        timeVisible: true
      },
    });
    const series = chart.current.addCandlestickSeries();
    setCandleSeries(series);

    const volume = chart.current.addHistogramSeries();
    setVolumeSeries(volume);

    return () => chart.current?.remove();
  }, [tradeTicker]);

  // Resize chart on container resizes.
  useEffect(() => {
    resizeObserver.current = new ResizeObserver(entries => {
      const { width, height } = entries[0].contentRect;
      chart.current?.applyOptions({ width, height });
      setTimeout(() => {
        chart.current?.timeScale().fitContent();
      }, 0);
    });

    resizeObserver.current.observe(chartContainerRef.current as Element);

    return () => resizeObserver.current?.disconnect();
  }, [interval]);

  useEffect(() => {
    const fetchData = async () => {
      if (base && quote && candleSeries) {
        setIsLoading(true);
        const props = {
          base,
          quote,
          interval,
          start,
          end,
        }
        if (interval === '7d') {
          await getCandles({
            ...props,
            interval: '1d',
          }).then(res => {
            candleSeries?.setData(
              res.data.map((d: NomicsCandle) => ({ 
                time: new Date(d.timestamp).getTime() / 1000, 
                ...d 
              })).filter((e: any, i: number) => i % 7 === 6)
            );
          });
        } else if (interval === 'M') {
          const date = new Date().getDate();
          await getCandles({
            ...props,
            interval: '1d',
          }).then(res => {
            candleSeries?.setData(
              res.data.map((d: NomicsCandle) => ({ 
                time: new Date(d.timestamp).getTime() / 1000, 
                ...d 
              })).filter((e: any, i: number) => new Date(e.time * 1000).getDate() === date)
            );
          });
        } else {
          await getCandles(props).then(res => {
            candleSeries?.setData(res.data.map((d: NomicsCandle) => ({ time: new Date(d.timestamp).getTime() / 1000, ...d })));
            // volumeSeries?.setData(res.data.map((d: NomicsCandle) => ({ time: d.timestamp, value: d.volume })));
          });
        }
        setIsLoading(false);
      }
    }

    fetchData();
  }, [interval, base, quote, candleSeries]);

  const handleFilterClick = (e: any, filter: string) => {
    const buttons = e.target.parentElement.parentElement.querySelectorAll('div');
    buttons.forEach((el: any) => {
      const button = el;
      if (button.style.color === 'blue') {
        button.style.color = '#cdcdcd';
      }
    })
    e.target.style.color = 'blue';

    setInterval(filter)
    let date: string;
    switch (filter) {
      case '1m':
        date = new Date(new Date().getTime() - 24 * 3600000).toISOString()
        setStart(date)
        break;
    
      case '5m':
        date = new Date(new Date().getTime() - 3 * 24 * 3600000).toISOString()
        setStart(date)
        break;
      
      case '30m':
        date = new Date(new Date().getTime() - 14 * 24 * 3600000).toISOString()
        setStart(date)
        break;
        
      case '1h':
        date = new Date(new Date().getTime() - 30 * 24 * 3600000).toISOString()
        setStart(date)
        break;
          
      case '4h':
        date = new Date(new Date().getTime() - 120 * 24 * 3600000).toISOString()
        setStart(date)
        break;

      default:
        date = new Date(new Date().getTime() - 1000 * 24 * 3600000).toISOString()
        setStart(date)
        break;
    }
    setEnd(new Date().toISOString());
  }

  return (
    <Flex 
      flexDirection="column"
      w="100%"
      border="1px solid rgb(54, 60, 78)"
    >
      <Flex 
        flexDirection="row"
        flexWrap="wrap"
        h="40px"
        bgColor="rgb(23, 27, 38)"
      >
        {
          Object.keys(intervals).map((key: string) => {
            return (
              <Flex 
                key={key}
                flexDirection="row"
                flexWrap="wrap"
                h="40px"
                bgColor="rgb(23, 27, 38)"
              >
                <Center
                  padding="0 20px"
                  fontVariantCaps="all-petite-caps"
                  color="gray"
                > {key} </Center>
                <Box borderLeft="1px solid rgb(54, 60, 78)" />
                {
                  intervals[key].map((filter: string) => (
                    <Center 
                      key={filter}
                      onClick={(e) => handleFilterClick(e, filter)}
                      padding="0 5px"
                      borderRadius="5px"
                      margin="5px"
                      cursor="pointer"
                      color="#cdcdcd"
                    > {filter} </Center>
                  ))
                }
                <Box borderLeft="1px solid rgb(54, 60, 78)" />
              </Flex>
            )
          })
        }
      </Flex>
      <Box 
        ref={chartContainerRef} 
        w="100%" 
        h="600px"
        borderTop="1px solid rgb(54, 60, 78)"
      />
    </Flex>
  );
};
