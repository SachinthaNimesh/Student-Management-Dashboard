export interface EmployeeResponse {
    student_id: number;
    student_name: string;
    student_contact: string;
    employer_id?: number | null;
    employer_name?: string | null;
    employer_contact?: string | null;
    employer_address?: string | null;
    supervisor_id?: number | null;
    supervisor_name?: string | null;
    latest_otp_code?: string | null;
    expires_at?: Date | null;
}