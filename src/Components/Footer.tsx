import { Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-40">
        <div>
          <h4 className="font-bold mb-4 flex items-center">
            <Globe className="w-6 h-6 mr-2 text-blue-400" />
            <div className="text-xl">University DAO</div>
          </h4>
          <p className="text-gray-300">
            Decentralizing education through blockchain and community
            governance.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-xl">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-400">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                How It Works
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Join DAO
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8 text-gray-400 border-t border-gray-700 pt-6">
        © 2024 University DAO. All rights reserved.
      </div>
    </footer>
  );
};
export default Footer;
