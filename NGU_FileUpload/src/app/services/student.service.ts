import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  httpClient = inject(HttpClient);

  AddStudent(formData: FormData) {
    return this.httpClient.post(`${environment.baseApiUrl}/student/register`, formData);
  }
}
