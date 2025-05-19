import React from "react"
import { cva } from "class-variance-authority"
import { cn } from "../../utils/helpers"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-red text-primary border-2 border-white font-bold py-4 px-8 text-xl rounded-md transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 flex items-center justify-center group",
        secondary: "bg-secondary text-white hover:bg-secondary/90 shadow-md hover:shadow-lg hover:-translate-y-1",
        outline: "border-2 border-primary bg-white text-primary hover:bg-primary hover:text-white",
        ghost: "bg-gray-100 text-gray-800 hover:bg-gray-200 hover:text-gray-900",
        link: "text-primary underline-offset-4 hover:underline",
        white:
          "bg-white text-primary hover:bg-gray-100 border-2 border-gray-300 shadow-md hover:shadow-lg hover:-translate-y-1 hover:border-primary",
        accent: "bg-accent text-white hover:bg-accent/90 shadow-md hover:shadow-lg hover:-translate-y-1",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 py-1 text-sm",
        lg: "h-12 px-8 py-3 text-lg",
        xl: "h-14 px-10 py-4 text-xl",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

const Button = React.forwardRef(({ className, variant, size, children, ...props }, ref) => {
  return (
    <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
      {children}
    </button>
  )
})

Button.displayName = "Button"

export { Button, buttonVariants }
