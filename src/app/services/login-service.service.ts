import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: "root",
})
export class LoginServiceService {
  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        "http://localhost:8080/register",
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(catchError(this.handleError));
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      "http://localhost:8080/login",
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    )
    .pipe(
      );
  }

  fetchData() {
    return this.http.get("http://localhost:8080/getPolygonData");
  }

  private handleError(errorRes : HttpErrorResponse) {
    
      let errorMessage = "An error occurred";

      if (!errorRes.error || !errorRes.error.error) {
        return throwError(errorMessage);
      }
      switch (errorRes.error.error.message) {
        case "INVALID_PASSWORD":
          errorMessage = " The password is invalid or the user does not have a password.";
        case "EMAIL_NOT_FOUND":
          errorMessage = "There is no user record corresponding to this email address."
        case "EMAIL_EXISTS":
          errorMessage = " This email already exists";
      }
      return throwError(errorMessage);
    }
  
}
