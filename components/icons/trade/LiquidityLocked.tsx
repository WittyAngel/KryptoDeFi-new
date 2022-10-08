export function LiquidityLocked(props: any) {
  return (
    <svg width={20} height={21} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <ellipse cx={10.439} cy={10.393} rx={4.439} ry={4.393} fill="#11C95E" />
      <g filter="url(#prefix__filter0_bii_218:107)">
        <path
          d="M20 11.33c0 5.511-4.477 9.585-10 9.585S0 16.84 0 11.33C0 5.82 2.829 0 10 0c7.171 0 10 5.82 10 11.33z"
          fill="#fff"
          fillOpacity={0.03}
        />
      </g>
      <defs>
        <filter
          id="prefix__filter0_bii_218:107"
          x={-6}
          y={-6}
          width={32}
          height={32.915}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation={3} />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_218:107" />
          <feBlend in="SourceGraphic" in2="effect1_backgroundBlur_218:107" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0" />
          <feBlend in2="shape" result="effect2_innerShadow_218:107" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={34} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
          <feBlend in2="effect2_innerShadow_218:107" result="effect3_innerShadow_218:107" />
        </filter>
      </defs>
    </svg>
  )
}
