import { FaBell, FaClock, FaCalendarAlt } from "react-icons/fa";

type Props = {
  day: string;
  time: string;
  date: string;
};

const Header = ({ day, date, time }: Props) => {
  return (
    <header className="flex items-center justify-end h-16 w-full border-b border-gray-200 bg-white px-6 gap-6">


      <div className="flex flex-col text-sm text-gray-600">
        
        <div className="flex items-center gap-2">
          <FaCalendarAlt className="text-gray-500" />
          <span>{date}</span>
        </div>

        <div className="flex items-center gap-2">
          <FaClock className="text-gray-500" />
          <span>{time}</span>
        </div>

      </div>


      <button className="relative text-gray-600 hover:text-black transition-colors">
        <FaBell size={18} />
      </button>


      <div className="flex items-center gap-3">
        
        <div className="w-10 h-10 overflow-hidden rounded-full">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1716004360220-213371f51df1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="profile"
          />
        </div>

        <p className="text-sm font-medium text-gray-700">
          Aakrit Neupane
        </p>

      </div>
    </header>
  );
};

export default Header;