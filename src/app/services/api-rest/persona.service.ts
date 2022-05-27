import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

//import { Persona } from '../interface/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {


  // url2: string = "https://proyecto-arg-pro.herokuapp.com/api";
  // url2: string =  "https://comunidad-apirest.herokuapp.com/api";
  url2: string = environment.apiUrl ;
    
  constructor(private http: HttpClient) {}

  getById(id: number): Observable<any> {
	  return this.http.get(this.url2 + `/personas/${id}`);
	}
  getAll(): Observable<any> {
    console.log("pasa por getAll?")
	  return this.http.get(this.url2+'/personas');
	}
  update(id: number, persona: any): Observable<any>{
    return this.http.put(this.url2 + `/personas/${id}`, persona);
  }

  delete(id: number): Observable<any>{
    return this.http.delete(this.url2 + `/personas/${id}`);
  }
 save(persona:any) : Observable<any>{
   return this.http.post(this.url2 + `/personas/`, persona);
 }


}
