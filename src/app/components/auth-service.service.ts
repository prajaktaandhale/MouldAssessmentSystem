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
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAZ4brcaN10D4VlS9h6Erdi3dtb9BGtfzM',
      {
        email: email,
        password: password,
        returnSecureToken : true
      }
    );
  }
}
