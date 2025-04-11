import { useParams, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
// Mock data for the attendance log
const attendanceData = [
  { date: "2025-02-20", checkIn: "8:00 AM", checkOut: "5:00 PM" },
  { date: "2025-02-21", checkIn: "8:15 AM", checkOut: "5:15 PM" },
  { date: "2025-02-22", checkIn: "8:05 AM", checkOut: "5:20 PM" },
  { date: "2025-02-23", checkIn: "7:50 AM", checkOut: "5:00 PM" },
  { date: "2025-02-24", checkIn: "8:10 AM", checkOut: "5:15 PM" },
];

// Mock data for emotional trend
const emotionalData = [
  { date: "2025-02-20", value: 0 },
  { date: "2025-02-21", value: 1 },
  { date: "2025-02-22", value: 2 },
  { date: "2025-02-23", value: 2 },
  { date: "2025-02-24", value: 1 },
];

// Mock data for incident reports
const incidentReports = [
  {
    date: "2025-03-06",
    time: "2:40 PM",
    type: "Minor Incident",
    issue: "Had difficulty understanding new task instructions",
    resolution:
      "Support staff provided additional guidance and simplified instructions",
  },
  {
    date: "2025-02-22",
    time: "10:45 AM",
    type: "Minor Incident",
    issue: "Had difficulty understanding new task instructions",
    resolution:
      "Support staff provided additional guidance and simplified instructions",
  },
  {
    date: "2025-02-22",
    time: "10:45 AM",
    type: "Minor Incident",
    issue: "Had difficulty understanding new task instructions",
    resolution:
      "Support staff provided additional guidance and simplified instructions",
  },
];

// Mock data for feedbacks
const feedbacks = [
  {
    date: "2025-02-22",
    time: "10:45 AM",
    type: "Feedback",
    content:
      "Successfully arranged a shelf without support of other employees.",
  },
];

const StudentDetail = () => {
  const { id } = useParams(); // Get the id from the URL

  // Mock employee data (would normally come from an API)
  const employee = {
    id, // Use the id from the URL
    name: "Sampath Perera",
    employer: "ABC Textiles Ltd",
    photoUrl: "/user.jpg",
    guardian_contact_no: "0771234567",
    employer_contact_no: "0777654321",
  };

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
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Trainer Dashboard
              </h2>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Search trainee..."
                  className="px-3 py-1 rounded-md border border-gray-300 text-sm"
                />
                <select className="px-3 py-1 rounded-md border border-gray-300 text-sm bg-white">
                  <option>Week</option>
                  <option>Month</option>
                  <option>Year</option>
                </select>
              </div>
            </div>

            {/* Employee Profile */}
            <div className="flex mb-6">
              <div className="w-40 h-40 rounded-full overflow-hidden bg-gray-200">
                <img
                  src={employee.photoUrl}
                  alt={employee.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="ml-6 flex flex-col justify-center">
                <h3 className="text-xl font-semibold">{employee.name}</h3>
                <p className="text-gray-600">ID: {employee.id}</p>
                <p className="text-gray-600">Employer: {employee.employer}</p>
              </div>
              <div className="ml-64 flex flex-col justify-center"></div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {/* Attendance Log */}
              <Card className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4">Attendance Log</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>DATE</TableHead>
                      <TableHead>CHECK IN</TableHead>
                      <TableHead>CHECK OUT</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {attendanceData.map((record, index) => (
                      <TableRow key={index}>
                        <TableCell>{record.date.slice(5)}</TableCell>
                        <TableCell>{record.checkIn}</TableCell>
                        <TableCell>{record.checkOut}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>

              {/* Incident Reports */}
              <Card className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4">Incident Reports</h3>
                <div className="space-y-4">
                  {incidentReports.map((incident, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-md">
                      <p className="text-sm text-gray-600">
                        {incident.date} | {incident.time} | {incident.type}
                      </p>
                      <p className="text-sm font-medium">
                        Issue: {incident.issue}
                      </p>
                      <p className="text-sm">
                        Resolution: {incident.resolution}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Emotional Trend */}
              <Card className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4">Emotional Trend</h3>
                <div className="h-60">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={emotionalData}
                      margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis
                        dataKey="date"
                        tickFormatter={(value) => value.slice(5)}
                      />
                      <YAxis
                        domain={[0, 2]}
                        ticks={[0, 1, 2]}
                        tickFormatter={(value) => {
                          switch (value) {
                            case 0:
                              return "Sad";
                            case 1:
                              return "Neutral";
                            case 2:
                              return "Happy";
                            default:
                              return "";
                          }
                        }}
                      />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#2563eb"
                        activeDot={{ r: 8 }}
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </Card>

              {/* Feedbacks */}
              <Card className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4">Feedbacks</h3>
                <div className="space-y-4">
                  {feedbacks.map((feedback, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-md">
                      <p className="text-sm text-gray-600">
                        {feedback.date} | {feedback.time} | {feedback.type}
                      </p>
                      <p className="text-sm">{feedback.content}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StudentDetail;
