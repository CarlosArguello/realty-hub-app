import type { ComponentProps } from "react"

export type FieldProps = Omit<ComponentProps<"input">, "className">

const Field: React.FC<FieldProps> = ({ type = "text", ...allProps }) => (
  <input
    type={type}
    className="block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none"
    {...allProps}
  />
)

export default Field
