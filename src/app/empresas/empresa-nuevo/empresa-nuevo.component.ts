import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Empresa } from '../../models/empresa';
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
    const EMPRESA: Empresa = {
      nombre: this.empresaForm.get('nombre')?.value,
      razon_social: this.empresaForm.get('razon_social')?.value,
      direccion: this.empresaForm.get('direccion')?.value,
      fecha_cierre: this.empresaForm.get('fecha_cierre')?.value,
      inicio_contrato: this.empresaForm.get('inicio_contrato')?.value,
      fin_contrato: this.empresaForm.get('fin_contrato')?.value,
      representante_legal: this.empresaForm.get('representante_legal')?.value,
      email: this.empresaForm.get('email')?.value,
      cargo: this.empresaForm.get('cargo')?.value,
      ci: this.empresaForm.get('ci')?.value,
      expedicion: this.empresaForm.get('expedicion')?.value,
      telefono: this.empresaForm.get('telefono')?.value,
      rubro_id: this.empresaForm.get('rubro_id')?.value,
      ciudad_id: this.empresaForm.get('ciudad_id')?.value,
      plan_id: this.empresaForm.get('plan_id')?.value,
      estado: this.empresaForm.get('estado')?.value,
      deleted: false
    }
    this._empresaService.agregarEmpresa(EMPRESA).subscribe(data => {this.router.navigate(['/empresa/']);}, 
    error => {
      console.log(error);
      this.empresaForm.reset();
    })
    
  }

}
