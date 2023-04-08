import * as React from 'react'
import { SVGProps } from 'react'

const MetricIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={36} height={27} {...props}>
    <path
      data-name="Icon awesome-chart-bar"
      d="M23.4 18h2.7a.968.968 0 0 0 .9-.9V7.65a.968.968 0 0 0-.9-.9h-2.7a.968.968 0 0 0-.9.9v9.45a.968.968 0 0 0 .9.9Zm6.75 0h2.7a.968.968 0 0 0 .9-.9V.9a.968.968 0 0 0-.9-.9h-2.7a.968.968 0 0 0-.9.9v16.2a.968.968 0 0 0 .9.9ZM9.9 18h2.7a.968.968 0 0 0 .9-.9v-4.95a.968.968 0 0 0-.9-.9H9.9a.968.968 0 0 0-.9.9v4.95a.968.968 0 0 0 .9.9Zm6.75 0h2.7a.968.968 0 0 0 .9-.9V3.15a.968.968 0 0 0-.9-.9h-2.7a.968.968 0 0 0-.9.9V17.1a.968.968 0 0 0 .9.9Zm18.225 4.5H4.5V1.125A1.125 1.125 0 0 0 3.375 0h-2.25A1.125 1.125 0 0 0 0 1.125V24.75A2.25 2.25 0 0 0 2.25 27h32.625A1.125 1.125 0 0 0 36 25.875v-2.25a1.125 1.125 0 0 0-1.125-1.125Z"
      fill="#313c52"
    />
  </svg>
)

export default MetricIcon
