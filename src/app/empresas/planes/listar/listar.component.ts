import { Component, OnInit } from '@angular/core';
import { PlanService } from '../../../services/plan.service';
import { Plan } from '../../../models/plan';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  listPlanes: Plan[] = [];

  constructor(private _planService: PlanService) { }

  ngOnInit(): void {
    this.obtenerPlanes();
  }

  obtenerPlanes(){
    this._planService.getPlan().subscribe(data => {
      this.listPlanes = data;
    }, error => {
      console.log(error);
    })
  }

}
