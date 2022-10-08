export function Info(props: any) {
  return (
    <svg
      viewBox="0 0 11 10"
      width={11}
      height={10}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={5.205} cy={2.922} r={0.731} transform="rotate(90 5.205 2.922)" fill="#fff" />
      <circle cx={5.205} cy={5.731} r={0.731} transform="rotate(90 5.205 5.73)" fill="#fff" />
      <g filter="url(#prefix__filter0_bii_218:91)">
        <path d="M5.41 0a5 5 0 010 10H5A5 5 0 015 0h.41z" fill="#fff" fillOpacity={0.03} />
      </g>
      <g filter="url(#prefix__filter1_bi_218:91)">
        <rect
          x={5.936}
          y={4.384}
          width={3.333}
          height={1.461}
          rx={0.731}
          transform="rotate(90 5.936 4.384)"
          fill="#fff"
          fillOpacity={0.1}
        />
      </g>
      <g filter="url(#prefix__filter2_bi_218:91)">
        <circle
          cx={5.205}
          cy={2.922}
          r={0.731}
          transform="rotate(90 5.205 2.922)"
          fill="#fff"
          fillOpacity={0.1}
        />
      </g>
      <defs>
        <filter
          id="prefix__filter0_bii_218:91"
          x={-2}
          y={-2}
          width={14.411}
          height={16}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation={1} />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_218:91" />
          <feBlend in="SourceGraphic" in2="effect1_backgroundBlur_218:91" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0" />
          <feBlend in2="shape" result="effect2_innerShadow_218:91" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={34} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
          <feBlend in2="effect2_innerShadow_218:91" result="effect3_innerShadow_218:91" />
        </filter>
        <filter
          id="prefix__filter1_bi_218:91"
          x={2.475}
          y={2.384}
          width={5.461}
          height={7.333}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation={1} />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_218:91" />
          <feBlend in="SourceGraphic" in2="effect1_backgroundBlur_218:91" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={2} />
          <feGaussianBlur stdDeviation={1} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0" />
          <feBlend in2="shape" result="effect2_innerShadow_218:91" />
        </filter>
        <filter
          id="prefix__filter2_bi_218:91"
          x={1.475}
          y={-0.808}
          width={7.461}
          height={7.461}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation={1.5} />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_218:91" />
          <feBlend in="SourceGraphic" in2="effect1_backgroundBlur_218:91" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={2} />
          <feGaussianBlur stdDeviation={1} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0" />
          <feBlend in2="shape" result="effect2_innerShadow_218:91" />
        </filter>
      </defs>
    </svg>
  )
}
