import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Edit, UserCog, Upload, RotateCcw, UserX } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useEmployeeService } from "@/api/getEmployees";
import { EmployeeResponse } from "@/types/employees";

const StudentManagement = () => {
  const navigate = useNavigate();
  const { getEmployees } = useEmployeeService();
  const [employees, setEmployees] = useState<EmployeeResponse[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  // Form states
  const [studentId, setStudentId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [homeAddressLine1, setHomeAddressLine1] = useState("");
  const [homeAddressLine2, setHomeAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [workplaceAddressLine1, setWorkplaceAddressLine1] = useState("");
  const [workplaceAddressLine2, setWorkplaceAddressLine2] = useState("");
  const [workplaceCity, setWorkplaceCity] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [guardianContactNumber, setGuardianContactNumber] = useState("");
  const [employer, setEmployer] = useState("");
  const [trainer, setTrainer] = useState("");
  const [remarks, setRemarks] = useState("");

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const data = await getEmployees();
        console.log("Fetched employees data:", data); // Log fetched data
        setEmployees(data);
      } catch (error) {
        // Removed error log
      }
    };

    fetchEmployees();
  }, []);

  // Replace with placeholders or dynamic data fetching logic
  const employers: any[] = []; // Replace with dynamic data fetching logic
  const trainers: any[] = []; // Replace with dynamic data fetching logic
  const genders: any[] = []; // Replace with dynamic data fetching logic

  const handleViewStudent = (id: number) => {
    navigate(`/student/${id}`);
  };

  const handleAddStudent = () => {
    setIsAddDialogOpen(true);
  };

  const handleSubmitStudent = (e: { preventDefault: () => void }) => {
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
      remarks,
    });

    // Close the dialog
    setIsAddDialogOpen(false);

    // Reset form
    resetForm();
  };

  const resetForm = () => {
    setStudentId("");
    setFirstName("");
    setLastName("");
    setDateOfBirth("");
    setGender("");
    setHomeAddressLine1("");
    setHomeAddressLine2("");
    setCity("");
    setWorkplaceAddressLine1("");
    setWorkplaceAddressLine2("");
    setWorkplaceCity("");
    setContactNumber("");
    setGuardianContactNumber("");
    setEmployer("");
    setTrainer("");
    setRemarks("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content */}
        <main className="flex-1 bg-blue-400/50 p-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Employee Management
              </h2>
              <Button
                onClick={handleAddStudent}
                className="bg-white text-black hover:bg-gray-100"
              >
                <UserCog className="mr-2 h-4 w-4" />
                Add Employee
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
            <div className="bg-white rounded-lg shadow-sm overflow-x-auto">
              <Table className="table-auto w-full">
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="font-semibold text-gray-700 w-24 whitespace-nowrap sticky left-0 bg-gray-50 z-10">
                      STUDENT ID
                    </TableHead>
                    <TableHead className="font-semibold text-gray-700 w-32 whitespace-nowrap">
                      NAME
                    </TableHead>
                    <TableHead className="font-semibold text-gray-700 w-32 whitespace-nowrap">
                      CONTACT NO
                    </TableHead>
                    <TableHead className="font-semibold text-gray-700 w-24 whitespace-nowrap">
                      EMPLOYER ID
                    </TableHead>
                    <TableHead className="font-semibold text-gray-700 w-32 whitespace-nowrap">
                      EMPLOYER
                    </TableHead>
                    <TableHead className="font-semibold text-gray-700 w-36 whitespace-nowrap">
                      EMPLOYER CONTACT
                    </TableHead>
                    <TableHead className="font-semibold text-gray-700 w-40 whitespace-nowrap">
                      EMPLOYER ADDRESS
                    </TableHead>
                    <TableHead className="font-semibold text-gray-700 w-28 whitespace-nowrap">
                      SUPERVISOR ID
                    </TableHead>
                    <TableHead className="font-semibold text-gray-700 w-32 whitespace-nowrap">
                      SUPERVISOR
                    </TableHead>
                    <TableHead className="font-semibold text-gray-700 w-28 whitespace-nowrap">
                      LATEST OTP
                    </TableHead>
                    <TableHead className="font-semibold text-gray-700 w-32 whitespace-nowrap">
                      EXPIRES AT
                    </TableHead>
                    <TableHead className="font-semibold text-gray-700 w-40 whitespace-nowrap">
                      ACTION
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {employees.length === 0 ? (
                    <TableRow>
                      <TableCell
                        colSpan={12}
                        className="text-center text-gray-500"
                      >
                        Loading...
                      </TableCell>
                    </TableRow>
                  ) : (
                    [...employees]
                      .sort((a, b) => (a.student_id || 0) - (b.student_id || 0))
                      .map((employee, index) => (
                        <TableRow
                          key={employee.student_id || index}
                          className="hover:bg-gray-50 border-b border-gray-200"
                        >
                          <TableCell className="font-medium sticky left-0 bg-white z-10">
                            {employee.student_id || "N/A"}
                          </TableCell>
                          <TableCell>
                            {employee.student_name || "N/A"}
                          </TableCell>
                          <TableCell>
                            {employee.student_contact || "N/A"}
                          </TableCell>
                          <TableCell>{employee.employer_id || "N/A"}</TableCell>
                          <TableCell>
                            {employee.employer_name || "N/A"}
                          </TableCell>
                          <TableCell>
                            {employee.employer_contact || "N/A"}
                          </TableCell>
                          <TableCell>
                            {employee.employer_address || "N/A"}
                          </TableCell>
                          <TableCell>
                            {employee.supervisor_id || "N/A"}
                          </TableCell>
                          <TableCell>
                            {employee.supervisor_name || "N/A"}
                          </TableCell>
                          <TableCell>
                            {employee.latest_otp_code || "N/A"}
                          </TableCell>
                          <TableCell>
                            {employee.expires_at
                              ? new Date(employee.expires_at).toLocaleString()
                              : "N/A"}
                          </TableCell>
                          <TableCell>
                            <div className="flex space-x-1">
                              <button
                                className="p-1 bg-blue-100 rounded hover:bg-blue-200"
                                title="Generate OTP"
                              >
                                <RotateCcw className="h-4 w-4 text-blue-600" />
                              </button>
                              <button
                                onClick={() =>
                                  handleViewStudent(employee.student_id)
                                }
                                className="p-1 bg-blue-100 rounded hover:bg-blue-200"
                                title="Edit student"
                              >
                                <Edit className="h-4 w-4 text-blue-600" />
                              </button>
                              <button
                                className="p-1 bg-blue-100 rounded hover:bg-blue-200"
                                title="Delete student"
                              >
                                <UserX className="h-4 w-4 text-blue-600" />
                              </button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))
                  )}
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
            <DialogTitle className="text-xl text-blue-600 font-bold">
              Add New Employee
            </DialogTitle>
            <p className="text-gray-500 text-sm mt-1">
              Add a new employee to the system
            </p>
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
                  <Label htmlFor="dateOfBirth">
                    Date of birth (YYYY/MM/DD)
                  </Label>
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
                      {genders.map((g) => (
                        <SelectItem key={g} value={g}>
                          {g}
                        </SelectItem>
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
                  <Label htmlFor="workplaceAddressLine1">
                    Workplace Address Line 1
                  </Label>
                  <Input
                    id="workplaceAddressLine1"
                    value={workplaceAddressLine1}
                    onChange={(e) => setWorkplaceAddressLine1(e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div className="md:col-span-1">
                  <Label htmlFor="workplaceAddressLine2">
                    Workplace Address Line 2
                  </Label>
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
                  <Label htmlFor="contactNumber">
                    Contact Number of the Employee
                  </Label>
                  <Input
                    id="contactNumber"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="guardianContactNumber">
                    Contact Number of the Guardian
                  </Label>
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
                      {employers.map((emp) => (
                        <SelectItem key={emp} value={emp}>
                          {emp}
                        </SelectItem>
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
                      {trainers.map((tr) => (
                        <SelectItem key={tr} value={tr}>
                          {tr}
                        </SelectItem>
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
                    <p className="mt-2 text-sm text-gray-500">
                      Click to upload image
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit button */}
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 mt-4"
              >
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
