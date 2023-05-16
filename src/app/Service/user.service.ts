import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://gachemon.osc-fr1.scalingo.io'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) {}

  getUser(token: string): Observable<any> {
    const headers = new HttpHeaders({ 'Authorization': `${token}` });
    return this.http.get(`${this.apiUrl}/api/token/verify`, { headers });
  }

}
