import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from './employee';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {

    private apiServerUrl = 'http://localhost:8080/api/v1/employee';

    constructor(private http: HttpClient) {    }

    public getEmployee(employeeId: Number): Observable<Employee> {
        return this.http.get<Employee>(`${this.apiServerUrl}/${employeeId}`);
    }

    public getEmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>(`${this.apiServerUrl}/all`);
    }

    public addEmployee(employee: Employee): Observable<Employee> {
        return this.http.post<Employee>(`${this.apiServerUrl}/create`, employee);
    }

    public updateEmployee(employee: Employee): Observable<Employee> {
        return this.http.put<Employee>(`${this.apiServerUrl}/update`, employee);
    }

    public deleteEmployee(employeeId: Number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/delete/${employeeId}`);
    }

}
