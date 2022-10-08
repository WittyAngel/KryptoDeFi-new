export function Setting(props: any) {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <ellipse cx={9.968} cy={13.654} rx={3.045} ry={3.013} fill="#fff" />
      <g filter="url(#prefix__filter0_bii_220:61)">
        <path
          d="M18.597 11.684A1.566 1.566 0 0020 10.126v-.252c0-.802-.606-1.474-1.403-1.558-.66-.069-1.191-.554-1.437-1.171a7.434 7.434 0 00-.078-.19c-.262-.61-.23-1.328.188-1.844a1.565 1.565 0 00-.11-2.092l-.179-.18a1.565 1.565 0 00-2.092-.11c-.516.419-1.233.451-1.843.19a7.716 7.716 0 00-.19-.08c-.618-.245-1.103-.776-1.172-1.436A1.566 1.566 0 0010.127 0h-.253C9.072 0 8.4.606 8.316 1.403c-.069.66-.554 1.19-1.171 1.436a7.689 7.689 0 00-.19.08c-.61.261-1.328.229-1.844-.19a1.565 1.565 0 00-2.092.11l-.18.18a1.565 1.565 0 00-.11 2.092c.419.516.451 1.234.19 1.844a7.665 7.665 0 00-.08.19c-.245.617-.776 1.102-1.436 1.171A1.566 1.566 0 000 9.874v.253c0 .801.606 1.474 1.403 1.557.66.07 1.19.554 1.436 1.17l.079.192c.262.61.23 1.328-.188 1.843a1.565 1.565 0 00.109 2.092l.18.18c.566.567 1.47.614 2.092.11.516-.419 1.233-.45 1.844-.189.062.027.126.053.19.079.617.245 1.102.776 1.17 1.436A1.566 1.566 0 009.874 20h.253c.802 0 1.474-.605 1.558-1.403.069-.66.554-1.19 1.171-1.436l.19-.079c.61-.262 1.328-.23 1.844.188a1.565 1.565 0 002.092-.109l.18-.18c.566-.566.613-1.47.109-2.092-.418-.516-.45-1.233-.189-1.843.028-.063.054-.127.08-.191.245-.617.775-1.102 1.436-1.171zM10 14.297a4.297 4.297 0 110-8.594 4.297 4.297 0 010 8.594z"
          fill="#fff"
          fillOpacity={0.03}
        />
      </g>
      <defs>
        <filter
          id="prefix__filter0_bii_220:61"
          x={-4}
          y={-4}
          width={28}
          height={28}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation={2} />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_220:61" />
          <feBlend in="SourceGraphic" in2="effect1_backgroundBlur_220:61" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0" />
          <feBlend in2="shape" result="effect2_innerShadow_220:61" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={34} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
          <feBlend in2="effect2_innerShadow_220:61" result="effect3_innerShadow_220:61" />
        </filter>
      </defs>
    </svg>
  )
}
