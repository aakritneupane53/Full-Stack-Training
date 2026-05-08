import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="h-[10%] w-full border-t border-gray-200 bg-white flex items-center justify-center px-6">
      
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <FaRegCopyright className="text-gray-500" />

        <span>
          {new Date().getFullYear()} All rights reserved — Aakrit Neupane
        </span>
      </div>

    </footer>
  );
};

export default Footer;