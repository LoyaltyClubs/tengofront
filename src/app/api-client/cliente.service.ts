import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { Cliente, Credito, Cuota, CuotaMensual, Pago, Tarjeta } from "./api.types"

@Injectable({
  providedIn: "root",
})
export class ClienteService {
  private basePath = `https://tengoapp.herokuapp.com/api/`

  constructor(
    private readonly http: HttpClient,
  ) {}

  getAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.basePath}cliente/`);
  }

  getBy(id: number): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.basePath}cliente/${id}`);
  }

  getAllCards(id: number): Observable<Tarjeta[]> {
    return this.http.get<Tarjeta[]>(`${this.basePath}tarjeta/${id}`);
  }

  getAllCredits(id: number): Observable<Credito[]> {
    return this.http.get<Credito[]>(`${this.basePath}credito/${id}`);
  }

  getQuotes(creditId: number): Observable<Cuota[]> {
    return this.http.get<Cuota[]>(`${this.basePath}cuotas/${creditId}`);
  }

  edit(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.basePath}cliente/update/${cliente.id}`, cliente);
  }

  updateCard(tarjeta: Tarjeta): Observable<Tarjeta> {
    return this.http.put<Tarjeta>(`${this.basePath}tarjeta/update/${tarjeta.id}`, tarjeta);
  }

  createCard(tarjeta: Tarjeta): Observable<Tarjeta[]> {
    return this.http.post<Tarjeta[]>(`${this.basePath}tarjeta/create`, tarjeta);
  }

  getAllPayments(ci: string): Observable<Pago[]> {
    return this.http.get<Pago[]>(`${this.basePath}pago/${ci}`);
  }

  getMonthlyQuotesBy(id: number): Observable<CuotaMensual[]> {
    return this.http.get<CuotaMensual[]>(`${this.basePath}cuotas_mensuales/${id}`);
  }

  agregarClientes(file: File, esCliente: string):  Observable<Cliente[]> {
    const adjunt = new FormData()
    adjunt.append('archivo', file)
    adjunt.append('esCliente', esCliente)
    return this.http.post<Cliente[]>(`${this.basePath}carga_archivos/uploads/`, adjunt);
  }
}
