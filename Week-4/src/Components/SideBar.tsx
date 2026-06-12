import { FaUsers } from "react-icons/fa6";
import {
  FaHome,
  FaPlay,
  FaLink,
  FaCalendar,
  FaClock,
  FaUser,
} from "react-icons/fa";

import { NavLink } from "react-router";

const navItems = [
  { to: "/", icon: <FaHome />, label: "Dashboard" },
  { to: "/new-meeting", icon: <FaPlay />, label: "New Meeting" },
  { to: "/join-meeting", icon: <FaLink />, label: "Join Meeting" },
  { to: "/calendar", icon: <FaCalendar />, label: "Calendar" },
  { to: "/schedule-meeting", icon: <FaClock />, label: "Schedule Meeting" },
  { to: "/profile-settings", icon: <FaUser />, label: "Profile Settings" },
];

const SideBar = () => {
  return (
    <aside className="hidden md:flex md:flex-col h-screen w-64 border-r border-gray-200 bg-white">
      

      <div className="flex items-center gap-3 px-6 py-5 border-b border-gray-200">
        <span className="text-2xl text-gray-600">
          <FaUsers />
        </span>

        <span className="text-lg font-semibold text-gray-700">
          Meeting Basum
        </span>
      </div>


      <ul className="flex flex-col py-4">
        {navItems.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-4 px-6 py-3 text-sm font-medium transition-colors
                ${
                  isActive
                    ? "bg-indigo-100 text-indigo-700 border-r-4 border-l-4 border-black"
                    : "text-gray-500 hover:bg-gray-50 hover:text-black"
                }`
              }
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;