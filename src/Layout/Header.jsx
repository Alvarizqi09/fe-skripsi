import { Link } from "react-router-dom";
import { GiCorn } from "react-icons/gi";

export function Header() {
  return (
    <nav className="sticky top-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="text-xl font-bold text-green-700 flex items-center"
          >
            <GiCorn className="w-12 h-12 text-green-600" /> Corn Classification
          </Link>
          <div className="flex space-x-4">
            <Link
              to="/"
              className="text-gray-600 hover:-translate-y-1 duration-300 hover:text-green-700 px-3 py-2 text-sm font-medium transition-all"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-600 hover:-translate-y-1 duration-300 hover:text-green-700 px-3 py-2 text-sm font-medium transition-all"
            >
              About
            </Link>
            <Link
              to="/predict"
              className="text-gray-600 hover:-translate-y-1 duration-300 hover:text-green-700 px-3 py-2 text-sm font-medium transition-all"
            >
              Predict
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
