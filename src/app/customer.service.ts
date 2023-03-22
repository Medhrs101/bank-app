import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './models/customer.model';

const API_URL = 'http://localhost:3000/customers';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(API_URL);
  }

  updateCustomer(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${API_URL}/${customer.id}`, customer);
  }

  deleteCustomer(customer: Customer) {
    console.log(`${API_URL}/${customer.id}`);
    return this.http.delete(`${API_URL}/${customer.id}`);
  }

  search(name: string): Observable<Customer[]> {
    console.log(`${API_URL}?q=${name}`);
    return this.http.get<Customer[]>(`${API_URL}?q=${name}`);
  }

  getById(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${API_URL}/${id}`);
  }

  createCustomer(customerFormData: Customer): Observable<Customer> {
    return this.http.post<Customer>(API_URL, customerFormData);
  }

  getCustomerByName(name: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${API_URL}?name=${name}`);
  }
}
