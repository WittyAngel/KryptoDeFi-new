export function Instagram(props: any) {
  return (
    <svg
      viewBox="0 0 20 22"
      width={20}
      height={22}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path stroke="#A3B9AD" strokeWidth={4} strokeLinecap="round" d="M7.066 19.883h5.87" />
      <g filter="url(#prefix__filter0_bii_220:82)">
        <rect x={0.001} width={20} height={20} rx={3} fill="#fff" fillOpacity={0.03} />
      </g>
      <g filter="url(#prefix__filter1_bi_220:82)">
        <circle cx={15.585} cy={4.416} r={1.039} fill="#fff" fillOpacity={0.1} />
      </g>
      <g filter="url(#prefix__filter2_bi_220:82)">
        <circle cx={10.001} cy={10} r={4.315} stroke="#fff" strokeOpacity={0.1} strokeWidth={1.5} />
      </g>
      <defs>
        <filter
          id="prefix__filter0_bii_220:82"
          x={-3.999}
          y={-4}
          width={28}
          height={28}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation={2} />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_220:82" />
          <feBlend in="SourceGraphic" in2="effect1_backgroundBlur_220:82" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0" />
          <feBlend in2="shape" result="effect2_innerShadow_220:82" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={34} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
          <feBlend in2="effect2_innerShadow_220:82" result="effect3_innerShadow_220:82" />
        </filter>
        <filter
          id="prefix__filter1_bi_220:82"
          x={10.546}
          y={-0.623}
          width={10.078}
          height={10.078}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation={2} />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_220:82" />
          <feBlend in="SourceGraphic" in2="effect1_backgroundBlur_220:82" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={2} />
          <feGaussianBlur stdDeviation={1} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0" />
          <feBlend in2="shape" result="effect2_innerShadow_220:82" />
        </filter>
        <filter
          id="prefix__filter2_bi_220:82"
          x={0.936}
          y={0.935}
          width={18.13}
          height={18.13}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation={2} />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_220:82" />
          <feBlend in="SourceGraphic" in2="effect1_backgroundBlur_220:82" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={2} />
          <feGaussianBlur stdDeviation={1} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0" />
          <feBlend in2="shape" result="effect2_innerShadow_220:82" />
        </filter>
      </defs>
    </svg>
  )
}
