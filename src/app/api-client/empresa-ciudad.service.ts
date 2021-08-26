import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { EmpresaCiudad } from "./api.types"

@Injectable({
  providedIn: "root",
})
export class EmpresaCiudadService {
  private basePath = `https://tengoapp.herokuapp.com/api/ciudad/`

  constructor(
    private readonly http: HttpClient,
  ) {}

  getAll(): Observable<EmpresaCiudad[]> {
    return this.http.get<EmpresaCiudad[]>(this.basePath);
  }
}
