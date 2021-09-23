import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Provincia } from 'src/app/api-client/api.types';
import { ProvinciaService } from 'src/app/api-client/provincia.service';

@Component({
  selector: 'app-listar-provincias',
  templateUrl: './listar-provincias.component.html',
  styleUrls: ['./listar-provincias.component.css']
})
export class ListarProvinciasComponent implements OnInit {
  provincias: Provincia[] = [];

  @ViewChild('deleteModal', { static: true })
  deleteModal: TemplateRef<any>

  constructor(
    readonly provinciaService: ProvinciaService,
    private readonly modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.obtenerProvincias();
  }

  obtenerProvincias() {
    this.provinciaService.getAll().subscribe(
      (res: Provincia[]) => {
        this.provincias = res;
        console.log(res)
      },
      (error) => {
        console.log(error);
      },
      () => {}
    );
  }

  openDeleteModal(id: number) {
    this.eliminarProvincia(id)
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

  eliminarProvincia(id: number) {
    this.provinciaService.delete(id).subscribe(
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
