import { cn } from "../../utils/helpers"

const Card = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        "bg-white rounded-lg overflow-hidden transition-all duration-300 shadow-md hover:shadow-xl border-2 border-gray-300 hover:border-primary",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

const CardHeader = ({ className, children, ...props }) => {
  return (
    <div className={cn("p-6 border-b border-gray-200", className)} {...props}>
      {children}
    </div>
  )
}

const CardTitle = ({ className, children, ...props }) => {
  return (
    <h3 className={cn("text-xl font-bold text-gray-900", className)} {...props}>
      {children}
    </h3>
  )
}

const CardDescription = ({ className, children, ...props }) => {
  return (
    <p className={cn("text-sm text-gray-600 mt-1", className)} {...props}>
      {children}
    </p>
  )
}

const CardContent = ({ className, children, ...props }) => {
  return (
    <div className={cn("p-6", className)} {...props}>
      {children}
    </div>
  )
}

const CardFooter = ({ className, children, ...props }) => {
  return (
    <div className={cn("p-6 border-t border-gray-200 bg-gray-50", className)} {...props}>
      {children}
    </div>
  )
}

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }