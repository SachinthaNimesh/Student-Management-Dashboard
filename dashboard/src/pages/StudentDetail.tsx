
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Bell } from 'lucide-react';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

// Mock data for the attendance log
const attendanceData = [
  { date: '2025-02-20', checkIn: '8:00 AM', checkOut: '5:00 PM' },
  { date: '2025-02-21', checkIn: '8:15 AM', checkOut: '5:15 PM' },
  { date: '2025-02-22', checkIn: '8:05 AM', checkOut: '5:20 PM' },
  { date: '2025-02-23', checkIn: '7:50 AM', checkOut: '5:00 PM' },
  { date: '2025-02-24', checkIn: '8:10 AM', checkOut: '5:15 PM' },
];

// Mock data for emotional trend
const emotionalData = [
  { date: '2025-02-20', value: 0 },
  { date: '2025-02-21', value: 1 },
  { date: '2025-02-22', value: 2 },
  { date: '2025-02-23', value: 2 },
  { date: '2025-02-24', value: 1 },
];

// Mock data for incident reports
const incidentReports = [
  {
    date: '2025-03-06',
    time: '2:40 PM',
    type: 'Minor Incident',
    issue: 'Had difficulty understanding new task instructions',
    resolution: 'Support staff provided additional guidance and simplified instructions'
  },
  {
    date: '2025-02-22',
    time: '10:45 AM',
    type: 'Minor Incident',
    issue: 'Had difficulty understanding new task instructions',
    resolution: 'Support staff provided additional guidance and simplified instructions'
  },
  {
    date: '2025-02-22',
    time: '10:45 AM',
    type: 'Minor Incident',
    issue: 'Had difficulty understanding new task instructions',
    resolution: 'Support staff provided additional guidance and simplified instructions'
  }
];

// Mock data for feedbacks
const feedbacks = [
  {
    date: '2025-02-22',
    time: '10:45 AM',
    type: 'Feedback',
    content: 'Successfully arranged a shelf without support of other employees.'
  }
];

const StudentDetail = () => {
  const { id } = useParams();
  
  // Mock student data (would normally come from an API)
  const student = {
    id: 1,
    name: "Sampath Perera",
    employer: "ABC Textiles Ltd",
    photoUrl: "/lovable-uploads/43e30f80-915d-4c08-9992-50669d5a10c7.png"
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full bg-white py-3 px-6 shadow-sm border-b">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-blue-600 font-bold text-xl">Student Management Portal</h1>
          <div className="flex items-center gap-4">
            <Bell className="h-5 w-5 text-gray-600" />
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-700">Trainer User</span>
              <Avatar className="h-8 w-8 bg-blue-600">
                <AvatarFallback>T</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200">
          <nav className="py-4">
            <ul className="space-y-2">
              <li className="px-4 py-2 bg-blue-100 text-blue-600 font-medium">
                <Link to="/dashboard">Trainer Dashboard</Link>
              </li>
              <li className="px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer">
                Student Management
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 bg-gradient-to-b from-blue-300/30 to-blue-500/40 p-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Trainer Dashboard</h2>
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

            {/* Student Profile */}
            <div className="flex mb-6">
              <div className="w-40 h-40 rounded-full overflow-hidden bg-gray-200">
                <img src={student.photoUrl} alt={student.name} className="w-full h-full object-cover" />
              </div>
              <div className="ml-6 flex flex-col justify-center">
                <h3 className="text-xl font-semibold">{student.name}</h3>
                <p className="text-gray-600">ID: {student.id}</p>
                <p className="text-gray-600">Employer: {student.employer}</p>
              </div>
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
                      <p className="text-sm text-gray-600">{incident.date} | {incident.time} | {incident.type}</p>
                      <p className="text-sm font-medium">Issue: {incident.issue}</p>
                      <p className="text-sm">Resolution: {incident.resolution}</p>
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
                          switch(value) {
                            case 0: return 'Sad';
                            case 1: return 'Neutral';
                            case 2: return 'Happy';
                            default: return '';
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
                      <p className="text-sm text-gray-600">{feedback.date} | {feedback.time} | {feedback.type}</p>
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
