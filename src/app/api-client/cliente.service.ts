import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { Cliente, EmpresaCiudad } from "./api.types"

@Injectable({
  providedIn: "root",
})
export class ClienteService {
  private basePath = `https://tengoapp.herokuapp.com/api/cliente/`

  constructor(
    private readonly http: HttpClient,
  ) {}

  getBy(id: number): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.basePath}${id}`);
  }

  getAll(): Observable<EmpresaCiudad[]> {
    return this.http.get<EmpresaCiudad[]>(this.basePath);
  }

  create(ciudad: EmpresaCiudad): Observable<EmpresaCiudad[]> {
    return this.http.post<EmpresaCiudad[]>(`${this.basePath}create`, ciudad);
  }

  edit(ciudad: EmpresaCiudad): Observable<EmpresaCiudad> {
    return this.http.put<EmpresaCiudad>(`${this.basePath}update/${ciudad.id}`, ciudad);
  }

  delete(id: number): Observable<EmpresaCiudad> {
    return this.http.delete<EmpresaCiudad>(`${this.basePath}delete/${id}`);
  }
}
