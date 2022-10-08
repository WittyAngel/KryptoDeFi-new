import 'focus-visible/dist/focus-visible'
import type { AppProps } from 'next/app'
import { MoralisProvider } from 'react-moralis'
import { ChakraProvider } from '@chakra-ui/provider'
import { Flex, Box } from '@chakra-ui/layout'
import { Provider } from 'react-redux'
import store from 'redux/store'
import '../i18n'

import { Navigation, OnDemandA11Y, SiteHeader, Fonts, RightToolbar } from 'components'
import { footerItems, navigationItems, rightToolbarBottomItems } from 'data'
import { theme } from 'theme'
import { SiteFooter } from 'components/SiteFooter'

const serverUrl = 'https://c2qemm0jqfwh.moralis.io:2053/server'
const appId = 'els7xOpoxkJnsBqiUejRJkYxPfZfi1Y19F6Z8RHZ'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider serverUrl={serverUrl} appId={appId}>
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <OnDemandA11Y />
          <Fonts />
          <SiteLayout>
            <Navigation items={navigationItems} />
            <Box as="main" w="100%" mx={8}>
              <SiteHeader />
              <Box minH="100vh" p={8}>
                <Component {...pageProps} />
              </Box>
              <SiteFooter items={footerItems} />
            </Box>
            <RightToolbar bottomItems={rightToolbarBottomItems} />
          </SiteLayout>
        </ChakraProvider>
      </Provider>
    </MoralisProvider>
  )
}

function SiteLayout({ children }) {
  return (
    <Flex
      sx={{ '--vertical-navigation-width': '18px' }}
      p={8}
      w="100%"
      h="100%"
      direction="row"
      spacing={8}
    >
      {children}
    </Flex>
  )
}
