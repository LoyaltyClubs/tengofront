import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Empresa } from 'src/app/api-client/api.types';
import { EmpresaService } from '../../services/empresa.service';

@Component({
  selector: 'app-index',
  templateUrl: './empresa_index.component.html'
})
export class EmpresaIndexComponent implements OnInit {

  listEmpresas: Empresa[] = [];
  @ViewChild('deleteModal', { static: true })
  deleteModal: TemplateRef<any>
  empresaId : number

  constructor(private _empresaService: EmpresaService, private readonly modalService: NgbModal) { }

  ngOnInit(): void {
    this.obtenerEmpresa();
  }

  obtenerEmpresa(){
    this._empresaService.getEmpresa().subscribe(data => {
      this.listEmpresas = data;
    }, error => {
      console.log(error);
    })
  }

  selectedDeleteModal(id: number) {
    this.empresaId = id
  }

  eliminarEmpresa() {
    this._empresaService.delete(this.empresaId).subscribe(
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
