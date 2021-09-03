import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { EmpresaCiudad, Rubro } from "./api.types"

@Injectable({
  providedIn: "root",
})
export class RubroService {
  private basePath = `https://tengoapp.herokuapp.com/api/rubro/`

  constructor(
    private readonly http: HttpClient,
  ) {}

  getAll(): Observable<Rubro[]> {
    return this.http.get<Rubro[]>(this.basePath);
  }

  create(ciudad: EmpresaCiudad): Observable<EmpresaCiudad[]> {
    return this.http.post<EmpresaCiudad[]>(`${this.basePath}create`, ciudad);
  }

  edit(ciudad: EmpresaCiudad): Observable<EmpresaCiudad> {
    return this.http.put<EmpresaCiudad>(`${this.basePath}update/${ciudad.id}`, ciudad);
  }

  delete(ciudad: EmpresaCiudad): Observable<EmpresaCiudad> {
    return this.http.put<EmpresaCiudad>(`${this.basePath}delete/${ciudad.id}`,ciudad);
  }
}
