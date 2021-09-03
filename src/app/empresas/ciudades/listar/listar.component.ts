import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmpresaCiudad } from 'src/app/api-client/api.types';
import { EmpresaCiudadService } from 'src/app/api-client/empresa-ciudad.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
})
export class ListarComponent implements OnInit {
  ciudades: EmpresaCiudad[] = [];

  @ViewChild('deleteModal', { static: true })
  deleteModal: TemplateRef<any>

  constructor(
    readonly ciudadService: EmpresaCiudadService,
    private readonly modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.obtenerCiudades();
  }

  obtenerCiudades() {
    this.ciudadService.getAll().subscribe(
      (res: EmpresaCiudad[]) => {
        this.ciudades = res;
        console.log(res)
      },
      (error) => {
        console.log(error);
      },
      () => {}
    );
  }

  openDeleteModal(id: number) {
    this.eliminarCiudad(id)
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

  eliminarCiudad(id: number) {
    this.ciudadService.delete(id).subscribe(
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
