import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-empresas-editar',
  templateUrl: './empresas-editar.component.html'
})
export class EmpresasEditarComponent {
  formGroup: FormGroup = this.formBuilder.group({
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
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private empresaService: EmpresaService,
    private activatedroute: ActivatedRoute
  ) {
    this.activatedroute.queryParams.subscribe((data) => {
      this.formGroup = this.formBuilder.group(data)
    });
  }

  editarEmpresa() {
    this.empresaService.edit(this.formGroup.value).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/empresa']);
      },
      (error) => {
        console.log(error);
        this.formGroup.reset();
      }
    );
  }
}
