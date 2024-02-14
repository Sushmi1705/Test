// registration-form.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Registration } from './registration';

@Injectable({
  providedIn: 'root',
})
export class RegistrationFormService {
  private apiUrl = 'http://localhost:3500/registration-form';

  constructor(private http: HttpClient) {}

  createRegistrationForm(registrationForm: any):Observable<any>{
    return this.http.post<any>(this.apiUrl, registrationForm);
  }

  get(){
    return this.http.get<Registration[]>(this.apiUrl);
  }

  deleteRecord(id:string): Observable<void>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  openUpdateModalWithDetails(id:string): Observable<Registration>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Registration>(url);
  }
}
