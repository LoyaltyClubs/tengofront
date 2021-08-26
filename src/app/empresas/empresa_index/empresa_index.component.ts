import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/models/empresa';
import { EmpresaService } from '../../services/empresa.service';

@Component({
  selector: 'app-index',
  templateUrl: './empresa_index.component.html',
  styleUrls: ['./empresa_index.component.css']
})
export class EmpresaIndexComponent implements OnInit {

  listEmpresas: Empresa[] = [];

  constructor(private _empresaService: EmpresaService) { }

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

}
