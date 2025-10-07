import * as React from "react"
const SvgMock = (props: React.SVGProps<SVGSVGElement>) => {
  return <svg data-testid="svg-mock" {...props} />
}

export default SvgMock
