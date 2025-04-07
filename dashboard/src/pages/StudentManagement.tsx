
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Edit, UserCog, Upload } from 'lucide-react';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { NotificationsPopover } from "@/components/NotificationsPopover";

const StudentManagement = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  
  // Form states
  const [studentId, setStudentId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [homeAddressLine1, setHomeAddressLine1] = useState('');
  const [homeAddressLine2, setHomeAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [workplaceAddressLine1, setWorkplaceAddressLine1] = useState('');
  const [workplaceAddressLine2, setWorkplaceAddressLine2] = useState('');
  const [workplaceCity, setWorkplaceCity] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [guardianContactNumber, setGuardianContactNumber] = useState('');
  const [employer, setEmployer] = useState('');
  const [trainer, setTrainer] = useState('');
  const [remarks, setRemarks] = useState('');
  
  // Sample student data
  const students = [
    {
      id: 1,
      name: "Sampath Perera",
      employer: "ABC Textiles Ltd",
      trainer: "Dayan De Silva"
    },
    {
      id: 2,
      name: "Malini Silva",
      employer: "XYZ Foods",
      trainer: "Mohammed Aslam"
    },
    {
      id: 3,
      name: "Rajiv Kumar",
      employer: "Cafe Ceylon Ltd",
      trainer: "Ruwan Fernando"
    },
    {
      id: 4,
      name: "Asanka Bandara",
      employer: "Yuki Ice Cream",
      trainer: "Nalaka Rathnayaka"
    },
    {
      id: 5,
      name: "John Doe",
      employer: "Green Gardens",
      trainer: "Nimali Sirisena"
    }
  ];

  // Sample data for dropdowns
  const employers = ["ABC Textiles Ltd", "XYZ Foods", "Cafe Ceylon Ltd", "Yuki Ice Cream", "Green Gardens"];
  const trainers = ["Dayan De Silva", "Mohammed Aslam", "Ruwan Fernando", "Nalaka Rathnayaka", "Nimali Sirisena"];
  const genders = ["Male", "Female", "Other"];

  const handleViewStudent = (id) => {
    navigate(`/student/${id}`);
  };

  const handleAddStudent = () => {
    setIsAddDialogOpen(true);
  };

  const handleSubmitStudent = (e) => {
    e.preventDefault();
    // Here you would typically submit the form data to your backend
    console.log("Submitting student data:", {
      studentId,
      firstName,
      lastName,
      dateOfBirth,
      gender,
      homeAddressLine1,
      homeAddressLine2,
      city,
      workplaceAddressLine1,
      workplaceAddressLine2,
      workplaceCity,
      contactNumber,
      guardianContactNumber,
      employer,
      trainer,
      remarks
    });
    
    // Close the dialog
    setIsAddDialogOpen(false);
    
    // Reset form
    resetForm();
  };

  const resetForm = () => {
    setStudentId('');
    setFirstName('');
    setLastName('');
    setDateOfBirth('');
    setGender('');
    setHomeAddressLine1('');
    setHomeAddressLine2('');
    setCity('');
    setWorkplaceAddressLine1('');
    setWorkplaceAddressLine2('');
    setWorkplaceCity('');
    setContactNumber('');
    setGuardianContactNumber('');
    setEmployer('');
    setTrainer('');
    setRemarks('');
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full bg-white py-3 px-6 shadow-sm border-b">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-blue-600 font-bold text-xl">Student Management Portal</h1>
          <div className="flex items-center gap-4">
            <NotificationsPopover />
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
        <aside className="w-48 bg-gray-100">
          <nav className="py-4">
            <ul className="space-y-1">
              <li 
                className="px-4 py-2 text-gray-600 hover:bg-gray-200 cursor-pointer"
                onClick={() => navigate('/dashboard')}
              >
                Trainer Dashboard
              </li>
              <li 
                className="px-4 py-2 bg-blue-200 text-blue-700 font-medium cursor-pointer"
                onClick={() => navigate('/student-management')}
              >
                Student Management
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 bg-blue-400/50 p-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Student Management</h2>
              <Button 
                onClick={handleAddStudent}
                className="bg-white text-black hover:bg-gray-100"
              >
                <UserCog className="mr-2 h-4 w-4" />
                Add Student
              </Button>
            </div>

            {/* Search bar */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                className="pl-10 bg-white shadow-sm border-gray-200 rounded-md w-full"
                placeholder="Search Students by name or ID ..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Student table */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="w-16 font-semibold text-gray-700">ID</TableHead>
                    <TableHead className="font-semibold text-gray-700">NAME</TableHead>
                    <TableHead className="font-semibold text-gray-700">EMPLOYER</TableHead>
                    <TableHead className="font-semibold text-gray-700">TRAINER</TableHead>
                    <TableHead className="w-24 font-semibold text-gray-700">ACTION</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {students.map((student) => (
                    <TableRow key={student.id} className="hover:bg-gray-50">
                      <TableCell className="font-medium">{student.id}</TableCell>
                      <TableCell>{student.name}</TableCell>
                      <TableCell>{student.employer}</TableCell>
                      <TableCell>{student.trainer}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <button 
                            onClick={() => handleViewStudent(student.id)}
                            className="p-1 text-blue-600 hover:text-blue-800"
                            title="Edit student"
                          >
                            <Edit className="h-5 w-5" />
                          </button>
                          <button 
                            className="p-1 text-blue-600 hover:text-blue-800"
                            title="Manage student"
                          >
                            <UserCog className="h-5 w-5" />
                          </button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </main>
      </div>

      {/* Add Student Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl text-blue-600 font-bold">Add New Student</DialogTitle>
            <p className="text-gray-500 text-sm mt-1">Add a new student to the system</p>
          </DialogHeader>
          
          <form onSubmit={handleSubmitStudent} className="mt-4">
            <div className="space-y-4">
              {/* ID */}
              <div>
                <Label htmlFor="studentId">ID</Label>
                <Input
                  id="studentId"
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  className="mt-1"
                />
              </div>
              
              {/* Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">Firstname</Label>
                  <Input
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Lastname</Label>
                  <Input
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="mt-1"
                  />
                </div>
              </div>
              
              {/* Date of birth and gender */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="dateOfBirth">Date of birth (YYYY/MM/DD)</Label>
                  <Input
                    id="dateOfBirth"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    placeholder="YYYY/MM/DD"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="gender">Gender</Label>
                  <Select value={gender} onValueChange={setGender}>
                    <SelectTrigger id="gender" className="mt-1">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      {genders.map(g => (
                        <SelectItem key={g} value={g}>{g}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              {/* Home address */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-1">
                  <Label htmlFor="homeAddressLine1">Home Address Line 1</Label>
                  <Input
                    id="homeAddressLine1"
                    value={homeAddressLine1}
                    onChange={(e) => setHomeAddressLine1(e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div className="md:col-span-1">
                  <Label htmlFor="homeAddressLine2">Home Address Line 2</Label>
                  <Input
                    id="homeAddressLine2"
                    value={homeAddressLine2}
                    onChange={(e) => setHomeAddressLine2(e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div className="md:col-span-1">
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="mt-1"
                  />
                </div>
              </div>
              
              {/* Workplace address */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-1">
                  <Label htmlFor="workplaceAddressLine1">Workplace Address Line 1</Label>
                  <Input
                    id="workplaceAddressLine1"
                    value={workplaceAddressLine1}
                    onChange={(e) => setWorkplaceAddressLine1(e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div className="md:col-span-1">
                  <Label htmlFor="workplaceAddressLine2">Workplace Address Line 2</Label>
                  <Input
                    id="workplaceAddressLine2"
                    value={workplaceAddressLine2}
                    onChange={(e) => setWorkplaceAddressLine2(e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div className="md:col-span-1">
                  <Label htmlFor="workplaceCity">Workplace City</Label>
                  <Input
                    id="workplaceCity"
                    value={workplaceCity}
                    onChange={(e) => setWorkplaceCity(e.target.value)}
                    className="mt-1"
                  />
                </div>
              </div>
              
              {/* Contact numbers */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="contactNumber">Contact Number of the Student</Label>
                  <Select value={contactNumber} onValueChange={setContactNumber}>
                    <SelectTrigger id="contactNumber" className="mt-1">
                      <SelectValue placeholder="Select contact number" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0771234567">0771234567</SelectItem>
                      <SelectItem value="0701234567">0701234567</SelectItem>
                      <SelectItem value="0761234567">0761234567</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="guardianContactNumber">Contact Number of the Guardian</Label>
                  <Input
                    id="guardianContactNumber"
                    value={guardianContactNumber}
                    onChange={(e) => setGuardianContactNumber(e.target.value)}
                    className="mt-1"
                  />
                </div>
              </div>
              
              {/* Employer and trainer */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="employer">Employer</Label>
                  <Select value={employer} onValueChange={setEmployer}>
                    <SelectTrigger id="employer" className="mt-1">
                      <SelectValue placeholder="Select employer" />
                    </SelectTrigger>
                    <SelectContent>
                      {employers.map(emp => (
                        <SelectItem key={emp} value={emp}>{emp}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="trainer">Trainer</Label>
                  <Select value={trainer} onValueChange={setTrainer}>
                    <SelectTrigger id="trainer" className="mt-1">
                      <SelectValue placeholder="Select trainer" />
                    </SelectTrigger>
                    <SelectContent>
                      {trainers.map(tr => (
                        <SelectItem key={tr} value={tr}>{tr}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              {/* Remarks and image upload */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="remarks">Remarks</Label>
                  <Textarea
                    id="remarks"
                    value={remarks}
                    onChange={(e) => setRemarks(e.target.value)}
                    className="mt-1 h-40"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="border-2 border-dashed border-gray-300 rounded-md p-12 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50">
                    <Upload className="h-10 w-10 text-gray-400" />
                    <p className="mt-2 text-sm text-gray-500">Click to upload image</p>
                  </div>
                </div>
              </div>
              
              {/* Submit button */}
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 mt-4">
                Submit
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default StudentManagement;
