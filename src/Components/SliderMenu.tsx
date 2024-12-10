import React, { useState } from 'react';
import { Menu, X, ChevronsLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAccount } from 'wagmi';

const SliderMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const connectedAcc = useAccount();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed left-0 top-0 h-full z-50">
      {/* Toggle Button */}
      <button 
        onClick={toggleMenu} 
        className="fixed left-4 top-4 z-60 bg-gray-800 text-white p-2 rounded-md"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sliding Menu */}
      <div 
        className={`
          fixed 
          left-0 
          top-0 
          h-full 
          w-64 
          text-gray-900 
          bg-white 
          border-r-2
          border-black
          transform 
          transition-transform 
          duration-300 
          ease-in-out
          shadow-md
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="p-6 relative">
          {/* Collapse Button */}
          <button 
            onClick={toggleMenu} 
            className="absolute top-0 right-0 p-2 hover:bg-gray-200 rounded-md"
            title="Collapse Menu"
          >
            <ChevronsLeft size={24} />
          </button>

          <h2 className="text-2xl font-bold mb-6 mt-4">Menu</h2>
          <nav>
            <ul className="space-y-4">
              <li>
                <Link to={`/dashboard/${connectedAcc.address}`} className="hover:text-gray-300">Dashboard</Link>
              </li>
              <li>
              <Link to={'/dashboard/AllMembers'} className="hover:text-gray-300">All Members</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SliderMenu;