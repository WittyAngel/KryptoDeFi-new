export function Crosshair(props: any) {
  return (
    <svg
      viewBox="0 0 30 30"
      width={30}
      height={30}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={15.108} cy={15.108} r={2.477} fill="#11C95E" />
      <g filter="url(#prefix__filter0_bii_344:26)">
        <circle cx={15} cy={15} r={15} fill="#fff" fillOpacity={0.1} />
      </g>
      <g filter="url(#prefix__filter1_bii_344:26)">
        <circle cx={15.108} cy={15.108} r={1.977} stroke="#fff" strokeOpacity={0.4} />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.29 9.474a.5.5 0 01-.5-.5V7.32a7.772 7.772 0 00-7.468 7.469h1.652a.5.5 0 010 1H7.347a7.773 7.773 0 007.443 7.064v-1.828a.5.5 0 011 0v1.802a7.774 7.774 0 007.039-7.038h-1.803a.5.5 0 110-1h1.828a7.773 7.773 0 00-7.064-7.443v1.627a.5.5 0 01-.5.5zM6.344 15.79a8.773 8.773 0 008.446 8.065v4.066a.5.5 0 001 0v-4.089a8.774 8.774 0 008.042-8.043h4.09a.5.5 0 000-1h-4.067a8.773 8.773 0 00-8.065-8.446V2.08a.5.5 0 10-1 0v4.242a8.772 8.772 0 00-8.47 8.469H2.08a.5.5 0 000 1h4.264z"
        fill="#fff"
        fillOpacity={0.4}
      />
      <defs>
        <filter
          id="prefix__filter0_bii_344:26"
          x={-4}
          y={-4}
          width={38}
          height={38}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation={2} />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_344:26" />
          <feBlend in="SourceGraphic" in2="effect1_backgroundBlur_344:26" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0" />
          <feBlend in2="shape" result="effect2_innerShadow_344:26" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={34} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
          <feBlend in2="effect2_innerShadow_344:26" result="effect3_innerShadow_344:26" />
        </filter>
        <filter
          id="prefix__filter1_bii_344:26"
          x={8.631}
          y={8.632}
          width={12.954}
          height={12.954}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation={2} />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_344:26" />
          <feBlend in="SourceGraphic" in2="effect1_backgroundBlur_344:26" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0" />
          <feBlend in2="shape" result="effect2_innerShadow_344:26" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={34} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
          <feBlend in2="effect2_innerShadow_344:26" result="effect3_innerShadow_344:26" />
        </filter>
      </defs>
    </svg>
  )
}
