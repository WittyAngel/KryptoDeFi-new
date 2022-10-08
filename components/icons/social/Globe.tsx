export function Globe(props: any) {
  return (
    <svg
      viewBox="0 0 20 20"
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <ellipse cx={3.5} cy={13.474} rx={2.5} ry={2.474} fill="#A3B9AD" />
      <g filter="url(#prefix__filter0_bii_120:606)">
        <g filter="url(#prefix__filter1_bii_120:606)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.833 16.236A7.5 7.5 0 0010 17.5a7.508 7.508 0 007.5-7.5 7.5 7.5 0 10-11.667 6.236zM8.647 3.912c.34-.075.687-.122 1.037-.14V7.27h-3.01c.392-1.523 1.1-2.733 1.973-3.357zM6.536 7.894h3.148v4.212H6.536A11.313 11.313 0 016.342 10c0-.736.068-1.445.194-2.106zm-.504-.624c.284-1.152.741-2.154 1.318-2.915A6.236 6.236 0 004.393 7.27h1.639zm-1.902.624h1.768A11.69 11.69 0 005.71 10c0 .733.066 1.44.188 2.106H4.13a6.234 6.234 0 010-4.212zm.266 4.842a6.235 6.235 0 002.954 2.909c-.576-.76-1.033-1.76-1.317-2.909H4.396zm2.28 0c.392 1.52 1.1 2.728 1.971 3.351l.136.03c.299.058.6.096.901.111v-3.492H6.676zm3.64 0v3.492a6.238 6.238 0 001.036-.14c.872-.624 1.579-1.832 1.97-3.352h-3.006zm3.649 0c-.284 1.15-.74 2.15-1.316 2.91a6.235 6.235 0 002.955-2.91h-1.64zm1.905-.63H14.1c.122-.666.188-1.373.188-2.106 0-.732-.066-1.44-.188-2.106h1.768a6.242 6.242 0 01.002 4.212zm-.266-4.836a6.24 6.24 0 00-2.952-2.912c.575.76 1.031 1.761 1.314 2.912h1.638zm-2.28 0c-.391-1.522-1.098-2.731-1.97-3.356a6.239 6.239 0 00-1.038-.142V7.27h3.007zm-3.008.624v4.212h3.146c.126-.661.194-1.37.194-2.106 0-.736-.068-1.445-.194-2.106h-3.146z"
            fill="#A3B9AD"
            fillOpacity={0.05}
          />
        </g>
      </g>
      <defs>
        <filter
          id="prefix__filter0_bii_120:606"
          x={-1.5}
          y={-1.5}
          width={23}
          height={23}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation={2} />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_120:606" />
          <feBlend in="SourceGraphic" in2="effect1_backgroundBlur_120:606" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0" />
          <feBlend in2="shape" result="effect2_innerShadow_120:606" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={34} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
          <feBlend in2="effect2_innerShadow_120:606" result="effect3_innerShadow_120:606" />
        </filter>
        <filter
          id="prefix__filter1_bii_120:606"
          x={-1.5}
          y={-1.5}
          width={23}
          height={23}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation={2} />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_120:606" />
          <feBlend in="SourceGraphic" in2="effect1_backgroundBlur_120:606" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0" />
          <feBlend in2="shape" result="effect2_innerShadow_120:606" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={34} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
          <feBlend in2="effect2_innerShadow_120:606" result="effect3_innerShadow_120:606" />
        </filter>
      </defs>
    </svg>
  )
}
