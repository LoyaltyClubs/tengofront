import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Rubro } from 'src/app/api-client/api.types';
import { RubroService } from 'src/app/api-client/rubro.service';

@Component({
  selector: 'app-listar-rubro',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarRubroComponent implements OnInit {
  rubros: Rubro[] = [];

  //@ViewChild('deleteModal', { static: true })
  //deleteModal: TemplateRef<any>

  constructor(
    readonly rubroService: RubroService,
    private readonly modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.obtenerRubros();
  }

  obtenerRubros() {
    this.rubroService.getAll().subscribe(
      (res: Rubro[]) => {
        this.rubros = res;
      },
      (error) => {
        console.log(error);
      },
      () => {}
    );
  }

  openDeleteModal(id: number) {
    this.eliminarRubro(id)
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

  eliminarRubro(id: number) {
    this.rubroService.delete(id).subscribe(
      (res) => {
        console.log(res)
      },
      (error) => {
        console.log(error);
      },
      //() => {}
    );
  }
}
