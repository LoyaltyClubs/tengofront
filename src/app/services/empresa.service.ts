import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from '../models/empresa';


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
}
