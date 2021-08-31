import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plan } from '../api-client/api.types';


@Injectable({
  providedIn: 'root'
})
export class PlanService {
  url = "https://tengoapp.herokuapp.com/api/plan/";
  
  constructor(private http: HttpClient) { }

  getPlan(): Observable<any> {
    return this.http.get(this.url);
  }

  agregarPlan(plan: Plan): Observable<any>{
    return this.http.post(this.url+"create",plan);
  }

  edit(plan: Plan): Observable<Plan> {
    return this.http.put<Plan>(`${this.url}update/${plan.id}`, plan);
  }

  delete(id: number): Observable<Plan> {
    return this.http.delete<Plan>(`${this.url}delete/${id}`);
  }
}
