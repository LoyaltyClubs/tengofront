import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Empresa } from '../../api-client/api.types';
import { EmpresaService } from '../../services/empresa.service';

@Component({
  selector: 'app-empresa-nuevo',
  templateUrl: './empresa-nuevo.component.html',
  styleUrls: ['./empresa-nuevo.component.css']
})
export class EmpresaNuevoComponent implements OnInit {
  empresaForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router,private _empresaService: EmpresaService) { 
    this.empresaForm = this.fb.group({
      nombre: ['', Validators.required],
      razon_social: ['', Validators.required],
      nit: ['', Validators.required],
      direccion: ['', Validators.required],
      fecha_cierre: ['', Validators.required],
      inicio_contrato: ['', Validators.required],
      fin_contrato: ['', Validators.required],
      representante_legal: ['', Validators.required],
      email: ['', Validators.required],
      cargo: ['', Validators.required],
      ci: ['', Validators.required],
      expedicion: ['', Validators.required],
      telefono: ['', Validators.required],
      rubro_id: ['', Validators.required],
      ciudad_id: ['', Validators.required],
      plan_id: ['', Validators.required],
      estado: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  agregarEmpresa(){
    this._empresaService.agregarEmpresa(this.empresaForm.value).subscribe(data => {this.router.navigate(['/empresa/']);}, 
    error => {
      console.log(error);
      this.empresaForm.reset();
    })
    
  }

}
