import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { NotificationsPopover } from "@/components/NotificationsPopover";
import Logo from "@/components/Logo";
import Header from "@/components/Header";
const Dashboard = () => {
  const navigate = useNavigate();

  // Sample employee data
  const employees = [
    {
      id: 1,
      name: "Sampath Perera",
      employer: "ABC Textiles Ltd",
      status: "Checked In",
      statusColor: "bg-green-100 text-green-800",
      workingHours: "08:50 - 16:50",
      mood: "😊",
    },
    {
      id: 2,
      name: "Malini Silva",
      employer: "XYZ Foods",
      status: "Checked In",
      statusColor: "bg-green-100 text-green-800",
      workingHours: "08:50 - 16:50",
      mood: "😊",
    },
    {
      id: 3,
      name: "Rajiv Kumar",
      employer: "Green Gardens",
      status: "Checked Out",
      statusColor: "bg-red-100 text-red-800",
      workingHours: "08:50 - 16:50",
      mood: "😊",
    },
  ];

  // Duplicate employees to create multiple rows (simulating the image)
  const allEmployees = [...employees, ...employees, ...employees, ...employees];

  const handleCardClick = (id) => {
    navigate(`/student/${id}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-48 bg-gray-100">
          <nav className="py-4">
            <ul className="space-y-1">
              <li
                className="px-4 py-2 bg-blue-200 text-blue-700 font-medium cursor-pointer"
                onClick={() => navigate("/dashboard")}
              >
                Trainer Dashboard
              </li>
              <li
                className="px-4 py-2 text-gray-600 hover:bg-gray-200 cursor-pointer"
                onClick={() => navigate("/student-management")}
              >
                Student Management
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 bg-gradient-to-b from-blue-300/30 to-blue-500/40 p-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Trainer Dashboard
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {allEmployees.map((employee, index) => (
                <div
                  key={`${employee.id}-${index}`}
                  className="bg-blue-300/60 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => handleCardClick(employee.id)}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {employee.name}
                      </h3>
                      <p className="text-sm text-gray-600">ID: {employee.id}</p>
                      <p className="text-sm text-gray-600">
                        Employer: {employee.employer}
                      </p>
                    </div>
                    <span
                      className={`text-xs px-2 py-1 rounded-md ${employee.statusColor}`}
                    >
                      {employee.status}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 mb-4">
                    Working Hours:
                    <br />
                    {employee.workingHours}
                  </p>

                  <div className="flex justify-between items-center">
                    <span className="text-xl">{employee.mood}</span>
                    <div className="flex items-center">
                      <span className="text-yellow-500 text-sm mr-3">Good</span>
                      <button className="text-blue-600 flex items-center text-sm">
                        View Details
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
