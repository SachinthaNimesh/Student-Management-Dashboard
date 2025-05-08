import axios from "axios";
import { API_URL } from "../../config/configs";
import { EmployeeResponse } from "../types/employees"; // Ensure this matches the correct file path for EmployeeResponse

export function useEmployeeService() {
    const getEmployees = async (): Promise<EmployeeResponse[]> => {
        try {
            const response = await axios.get<EmployeeResponse[]>(`${API_URL}/employees`);
            return response.data;
        } catch (error) {
            console.error("Error fetching employees:", error);
            throw error;
        }
    };

    return { getEmployees };
}
