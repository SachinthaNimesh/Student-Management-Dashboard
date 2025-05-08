import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { useCardService } from "../api/getCard";
import { Card } from "../types/card";

const Dashboard = () => {
  const navigate = useNavigate();
  const { getCards } = useCardService();
  const [employees, setEmployees] = useState<Card[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const data = await getCards();
        setEmployees(data);
      } catch (error) {
        console.error("Failed to fetch employee data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, [getCards]);

  const handleCardClick = (id: number) => {
    navigate(`/employee/${id}`); //rename later to employee
  };
  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  // Sort employees by mood priority: sad > neutral > happy
  const sortedEmployees = [...employees].sort((a, b) => {
    const moodPriority = { sad: 1, neutral: 2, happy: 3 };
    return (
      (moodPriority[a.emotion as keyof typeof moodPriority] || 4) -
      (moodPriority[b.emotion as keyof typeof moodPriority] || 4)
    );
  });

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />
        {/* Main content */}
        <main className="flex-1 bg-gradient-to-b from-blue-300/30 to-blue-500/40 p-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Trainer Dashboard
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sortedEmployees.map((employee) => (
                <EmployeeCard
                  key={employee.student_id}
                  employee={{
                    id: employee.student_id,
                    name: `${employee.first_name} ${employee.last_name}`,
                    employer: employee.employer_name,
                    status: employee.check_out_date_time
                      ? "Checked Out"
                      : "Checked In",
                    statusColor: employee.check_out_date_time
                      ? "bg-red-100 text-red-600"
                      : "bg-green-100 text-green-600",
                    workingHours: `${new Date(
                      employee.check_in_date_time
                    ).toLocaleTimeString()} - ${
                      employee.check_out_date_time
                        ? new Date(
                            employee.check_out_date_time
                          ).toLocaleTimeString()
                        : "N/A"
                    }`,
                    mood: employee.emotion,
                  }}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

interface Employee {
  id: number;
  name: string;
  employer: string;
  status: string;
  statusColor: string;
  workingHours: string;
  mood: string;
}

function EmployeeCard({ employee }: { employee: Employee }) {
  const navigate = useNavigate(); // Add useNavigate here

  const handleCardClick = () => {
    navigate(`/employee/${employee.id}`);
  };

  const getMoodEmojiImage = (mood: string) => {
    switch (mood) {
      case "happy":
        return "../Happy.png"; // Path to black-and-white happy emoji image
      case "sad":
        return "../Sad.png"; // Path to black-and-white sad emoji image
      case "neutral":
        return "../Neutral.png"; // Path to black-and-white neutral emoji image
      default:
        return ""; // Path to black-and-white question mark emoji image
    }
  };

  const getMoodStyle = (mood: string) => {
    switch (mood) {
      case "happy":
        return "fff"; //text-yellow-500
      case "sad":
        return "fff"; //text-red-500
      case "neutral":
        return "fff"; //text-green-500
      default:
        return "text-gray-500";
    }
  };

  return (
    <div
      className="bg-blue-50 rounded-xl p-5 max-w-md shadow-md border border-blue-100 cursor-pointer"
      onClick={handleCardClick} // Add onClick handler here
    >
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold text-gray-800">
            {employee.name}
          </h2>
          <p className="text-sm text-gray-500">ID: {employee.id}</p>
          <p className="text-sm text-gray-500">Employer: {employee.employer}</p>
        </div>
        <div>
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${employee.statusColor} border`}
          >
            {employee.status}
          </span>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-blue-100">
        <p className="text-xs text-gray-500 uppercase font-medium mb-1">
          Working Hours
        </p>
        <p className="text-gray-700">{employee.workingHours}</p>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            src={getMoodEmojiImage(employee.mood)}
            alt={`${employee.mood} emoji`}
            className="w-6 h-6"
          />
          <span className={`font-medium ${getMoodStyle(employee.mood)}`}>
            {employee.mood}
          </span>
        </div>

        <button className="flex items-center px-3 py-1 rounded-lg text-blue-600 hover:bg-blue-100 transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-300">
          View Details
          <ChevronRight className="ml-1 w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
