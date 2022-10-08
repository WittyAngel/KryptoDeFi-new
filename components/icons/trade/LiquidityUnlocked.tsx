export function LiquidityUnlocked(props: any) {
  return (
    <svg
      viewBox="0 0 20 17"
      width={20}
      height={17}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <ellipse cx={9.953} cy={6.476} rx={4.439} ry={4.393} fill="#F44336" />
      <g filter="url(#prefix__filter0_bii_218:106)">
        <path
          d="M10.648 15.543a1 1 0 01-1.724-.017L.861 1.498A1 1 0 011.728 0h16.503a1 1 0 01.857 1.516l-8.44 14.027z"
          fill="#F44336"
          fillOpacity={0.2}
        />
      </g>
      <defs>
        <filter
          id="prefix__filter0_bii_218:106"
          x={-2.273}
          y={-3}
          width={24.506}
          height={23.028}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation={1.5} />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_218:106" />
          <feBlend in="SourceGraphic" in2="effect1_backgroundBlur_218:106" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0" />
          <feBlend in2="shape" result="effect2_innerShadow_218:106" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={34} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
          <feBlend in2="effect2_innerShadow_218:106" result="effect3_innerShadow_218:106" />
        </filter>
      </defs>
    </svg>
  )
}
