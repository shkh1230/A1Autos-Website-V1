import { cn } from "../../utils/helpers"

const badgeVariants = {
  default: "bg-red-600 text-white",
  outline: "bg-transparent border border-red-600 text-red-600",
  secondary: "bg-gray-800 text-white",
  success: "bg-green-600 text-white",
  warning: "bg-yellow-500 text-white",
  danger: "bg-red-700 text-white",
}

const Badge = ({ variant = "default", className, children, ...props }) => {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",
        badgeVariants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}

export { Badge }
