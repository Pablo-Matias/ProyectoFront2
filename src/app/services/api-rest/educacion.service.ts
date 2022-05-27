import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  // url2: string = "https://proyecto-arg-pro.herokuapp.com/api"; "https://comunidad-apirest.herokuapp.com/api";
  //url2: string =  "http://localhost:8080/api";
  url2: string = environment.apiUrl ;

  
  constructor(private http: HttpClient) {}

  getById(id: number): Observable<any> {
	  return this.http.get(this.url2 + `/educacion/${id}`);
	}
  getAll(): Observable<any> {
    console.log("pasa por getAll?")
	  return this.http.get(this.url2+'/educacion');
	}
  //terminar en algun momento
  update(id: number, skill: any): Observable<any>{
    return this.http.put(this.url2 + `/educacion/${id}`, skill);
  }

  //terminar en algun momento
  delete(id: number): Observable<any>{
    return this.http.delete(this.url2 + `/educacion/${id}`);
   
  }
 save(skill:any) : Observable<any>{
   return this.http.post(this.url2 + `/educacion/`, skill);
 }
}


