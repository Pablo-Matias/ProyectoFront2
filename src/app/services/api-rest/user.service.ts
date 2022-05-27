import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface/user';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  // url2: string =  "https://proyecto-arg-pro.herokuapp.com/api";
 // url2: string =  "https://comunidad-apirest.herokuapp.com/api";
 url2: string = environment.apiUrl ;

  user: User = { username: "", password: "", token: "" };

  constructor(private http: HttpClient) {

  }

  login(username: string, password: string): Observable<any> {  
    this.user.username = username;
    this.user.password = password;
    return this.http.post(`http://localhost:8080/api/login`, this.user);
    //return this.http.post(`https://comunidad-apirest.herokuapp.com/api/login`, this.user);
    // return this.http.post(`https://proyecto-arg-pro.herokuapp.com/api/login`, this.user);
	}

  
}
