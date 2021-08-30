import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from '../api-client/api.types';


@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  url = "https://tengoapp.herokuapp.com/api/empresa/";
  
  constructor(private http: HttpClient) { }

  getEmpresa(): Observable<any> {
    return this.http.get(this.url);
  }

  agregarEmpresa(empresa: Empresa): Observable<any>{
    return this.http.post(this.url+"/create",empresa);
  }

  edit(empresa: Empresa): Observable<Empresa> {
    return this.http.put<Empresa>(`${this.url}update/${empresa.id}`, empresa);
  }

  delete(id: number): Observable<Empresa> {
    return this.http.delete<Empresa>(`${this.url}delete/${id}`);
  }
}
