import { Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export const MemberDashboard = () => {
  return(
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-2 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Globe className="w-8 h-8 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-800">University DAO</h1>
        </div>
        <div className="flex text-xl font-serif font-semibold gap-10">
          <button className="hover:text-blue-600 transition">
            <Link to="/">Home</Link>
          </button>
          <button className="hover:text-blue-600 transition">
            <Link to="/courses">Courses</Link>
          </button>
          {/* <button className="hover:text-blue-600 transition">
            <Link to="/register">Register</Link>
          </button> */}
          {/* <ConnectButton showBalance={false}/> */}
        </div>
      </div>
    </nav>
  )
}


const Navbar = () => {

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-2 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Globe className="w-8 h-8 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-800">University DAO</h1>
        </div>
        <div className="flex text-xl font-serif font-semibold gap-10">
          <button className="hover:text-blue-600 transition">
            <Link to="/">Home</Link>
          </button>
          <button className="hover:text-blue-600 transition">
            <Link to="/courses">Courses</Link>
          </button>
          <button className="hover:text-blue-600 transition">
            <Link to="/register">Register</Link>
          </button>
          <ConnectButton showBalance={false}/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
