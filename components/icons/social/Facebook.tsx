export function Facebook(props: any) {
  return (
    <svg
      width={12}
      height={20}
      viewBox="0 0 12 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x={4.115} y={14.513} width={2.599} height={4.91} rx={1.3} fill="#5D7066" />
      <g filter="url(#prefix__filter0_bii_220:91)">
        <path
          d="M4.91 20a1.835 1.835 0 001.835-1.835v-6.636c0-.36.292-.652.652-.652h.98c.82 0 1.513-.609 1.617-1.423l.036-.273a1.649 1.649 0 00-1.636-1.86c-.91 0-1.649-.737-1.649-1.648v-.618c0-1.033.284-1.728 1.767-1.728h.18c.942 0 1.705-.763 1.705-1.705 0-.851-.63-1.558-1.48-1.595A29.81 29.81 0 007.65 0C4.933 0 3.075 1.654 3.075 4.698v1.086c0 .85-.688 1.538-1.537 1.538C.688 7.322 0 8.01 0 8.859v.48c0 .85.688 1.538 1.538 1.538h.886c.36 0 .651.292.651.652v6.636c0 1.013.822 1.835 1.835 1.835z"
          fill="#fff"
          fillOpacity={0.03}
        />
      </g>
      <g filter="url(#prefix__filter1_i_220:91)">
        <rect x={8.953} y={17.112} width={2.888} height={2.888} rx={1.444} fill="#5D7066" />
      </g>
      <defs>
        <filter
          id="prefix__filter0_bii_220:91"
          x={-4}
          y={-4}
          width={18.397}
          height={28}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation={2} />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_220:91" />
          <feBlend in="SourceGraphic" in2="effect1_backgroundBlur_220:91" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0" />
          <feBlend in2="shape" result="effect2_innerShadow_220:91" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={34} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
          <feBlend in2="effect2_innerShadow_220:91" result="effect3_innerShadow_220:91" />
        </filter>
        <filter
          id="prefix__filter1_i_220:91"
          x={8.953}
          y={17.112}
          width={2.888}
          height={4.888}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={2} />
          <feGaussianBlur stdDeviation={1} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0" />
          <feBlend in2="shape" result="effect1_innerShadow_220:91" />
        </filter>
      </defs>
    </svg>
  )
}
