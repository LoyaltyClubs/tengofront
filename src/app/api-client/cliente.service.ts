import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { Cliente, Credito, EmpresaCiudad, Tarjeta } from "./api.types"

@Injectable({
  providedIn: "root",
})
export class ClienteService {
  private basePath = `https://tengoapp.herokuapp.com/api/`

  constructor(
    private readonly http: HttpClient,
  ) {}

  getBy(id: number): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.basePath}cliente/${id}`);
  }

  getAllCards(id: number): Observable<Tarjeta[]> {
    return this.http.get<Tarjeta[]>(`${this.basePath}tarjeta/${id}`);
  }

  getAllCredits(id: number): Observable<Credito[]> {
    return this.http.get<Credito[]>(`${this.basePath}credito/`);
  }

  edit(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.basePath}cliente/update/${cliente.id}`, cliente);
  }
}
