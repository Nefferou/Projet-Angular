import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: any;
  private apiUrl = 'https://gachemon.osc-fr1.scalingo.io'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) {}

  getUser(token: string): Promise<any> {
    return new Promise((resolve, reject) => {
      if (this.user) {
        resolve(this.user);
      } else {
        const headers = new HttpHeaders({ 'Authorization': `${token}` });
        this.http.get(`${this.apiUrl}/api/token/verify`, { headers })
          .subscribe(
            (user) => {
              this.user = user;
              resolve(user);
            },
            (error) => {
              reject(error);
            }
          );
      }
    });
  }

  setUser(user: any) {
    this.user = user;
  }

}
