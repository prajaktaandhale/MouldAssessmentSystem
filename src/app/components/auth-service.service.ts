import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

interface AuthResponseData {
  kind: string;
  idToken : string;
  email: string;
  refreshToken : string;
  expiresIn : string;
  localId : string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>('http://localhost:8080/register',
      {
        email: email,
        password: password,
        returnSecureToken : true
      }
    );
  }
}
