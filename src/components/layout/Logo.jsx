import { Link } from "react-router-dom"

const Logo = ({ className = "", variant = "dark" }) => {
  const textColor = variant === "light" ? "text-white" : "text-gray-800"

  return (
    <Link to="/" className={`flex items-center font-display tracking-tight ${className}`}>
      <div className="flex items-center">
        <div className="relative">
          <div className="text-5xl md:text-6xl font-black">
            <span className="text-primary">A</span>
            <span className="text-primary relative">1</span>
          </div>
          {/* Decorative gear icon behind the logo */}
          <div className="absolute -top-1 -left-1 -z-10 text-primary/10 transform rotate-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
            </svg>
          </div>
        </div>
        <div className="ml-1">
          <span className={`text-3xl md:text-4xl ${textColor} font-black tracking-wider uppercase`}>AUTOS</span>
          <div
            className={`hidden md:block text-sm ${
              variant === "light" ? "text-gray-300" : "text-gray-500"
            } font-medium italic`}
          >
            <span className="text-primary font-bold">PROFESSIONAL</span> AUTO CARE
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Logo
