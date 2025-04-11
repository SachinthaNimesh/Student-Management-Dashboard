import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className="w-54 bg-gray-100">
      <nav className="py-4">
        <ul className="space-y-1">
          <li
            className={`px-4 py-2 font-medium cursor-pointer ${
              location.pathname === "/dashboard"
                ? "bg-blue-200 text-blue-700"
                : "text-gray-600 hover:bg-gray-200"
            }`}
            onClick={() => navigate("/dashboard")}
          >
            Trainer Dashboard
          </li>
          <li
            className={`px-4 py-2 font-medium cursor-pointer ${
              location.pathname === "/student-management"
                ? "bg-blue-200 text-blue-700"
                : "text-gray-600 hover:bg-gray-200"
            }`}
            onClick={() => navigate("/student-management")}
          >
            Employee Management
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
