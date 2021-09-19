import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { Provincia } from "./api.types";

@Injectable({
  providedIn: "root",
})
export class ProvinciaService {
  private basePath = `https://tengoapp.herokuapp.com/api/provincias/`

  constructor(
    private readonly http: HttpClient,
  ) {}

  getAll(): Observable<Provincia[]> {
    return this.http.get<Provincia[]>(this.basePath);
  }

  create(provincia: Provincia): Observable<Provincia[]> {
    return this.http.post<Provincia[]>(`${this.basePath}create`, provincia);
  }

  edit(provincia: Provincia): Observable<Provincia> {
    return this.http.put<Provincia>(`${this.basePath}update/${provincia.id}`, provincia);
  }

  delete(id: number): Observable<Provincia> {
    return this.http.delete<Provincia>(`${this.basePath}delete/${id}`);
  }
}
