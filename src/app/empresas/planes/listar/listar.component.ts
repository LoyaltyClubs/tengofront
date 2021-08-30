import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Plan } from 'src/app/api-client/api.types';
import { PlanService } from '../../../services/plan.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  listPlanes: Plan[] = [];

  @ViewChild('deleteModal', { static: true })
  deleteModal: TemplateRef<any>

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

  openDeleteModal(id: number) {
    this.eliminarPlan(id)
    /*this.modalService
      .open(this.deleteModal, {
        backdrop: 'static',
        keyboard: false,
      })
      .result.then(
        (_) => {
          //eliminar
        },
        (_) => {}
      )*/
  }

  eliminarPlan(id: number) {
    this._planService.delete(id).subscribe(
      () => {
        console.log('eliminado')
      },
      (error) => {
        console.log(error);
      },
      () => {}
    );
  }
}
