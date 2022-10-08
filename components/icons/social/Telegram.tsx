export function Telegram(props: any) {
  return (
    <svg
      width="32"
      height="31"
      viewBox="0 0 32 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path stroke="#A3B9AD" strokeWidth={4} strokeLinecap="round" d="M9.709 21.361l5.19-5.19" />
      <g filter="url(#prefix__filter0_bii_220:87)">
        <path
          d="M23.803 7.399l-13 13-6.723-6.756a.527.527 0 01.224-.89l19.499-5.354z"
          fill="#fff"
          fillOpacity={0.03}
        />
      </g>
      <g filter="url(#prefix__filter1_bi_220:87)">
        <path
          d="M23.803 7.399l-13 13 6.53 6.497a.713.713 0 001.2-.305l5.27-19.192z"
          fill="#fff"
          fillOpacity={0.08}
        />
      </g>
      <defs>
        <filter
          id="prefix__filter0_bii_220:87"
          x={-0.084}
          y={3.399}
          width={27.887}
          height={21}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation={2} />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_220:87" />
          <feBlend in="SourceGraphic" in2="effect1_backgroundBlur_220:87" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0" />
          <feBlend in2="shape" result="effect2_innerShadow_220:87" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={34} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
          <feBlend in2="effect2_innerShadow_220:87" result="effect3_innerShadow_220:87" />
        </filter>
        <filter
          id="prefix__filter1_bi_220:87"
          x={6.803}
          y={3.399}
          width={21}
          height={27.716}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation={2} />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_220:87" />
          <feBlend in="SourceGraphic" in2="effect1_backgroundBlur_220:87" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={34} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
          <feBlend in2="shape" result="effect2_innerShadow_220:87" />
        </filter>
      </defs>
    </svg>
  )
}
