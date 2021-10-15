import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpresaCiudad, Plan, Rubro } from 'src/app/api-client/api.types';
import { EmpresaCiudadService } from 'src/app/api-client/empresa-ciudad.service';
import { RubroService } from 'src/app/api-client/rubro.service';
import { EmpresaService } from 'src/app/services/empresa.service';
import { PlanService } from 'src/app/services/plan.service';

@Component({
  selector: 'app-empresas-editar',
  templateUrl: './empresas-editar.component.html'
})
export class EmpresasEditarComponent {

  listPlanes: Plan[] = [];
  rubros: Rubro[] = [];
  ciudades: EmpresaCiudad[] = [];

  formGroup: FormGroup = this.formBuilder.group({
      nombre: ['', Validators.required],
      razon_social: ['', Validators.required],
      nit: ['', Validators.required],
      direccion: ['', Validators.required],
      fecha_cierre: ['', Validators.required],
      inicio_contrato: [formatDate(new Date(), 'yyyy-MM-dd', 'en'), Validators.required],
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
    private activatedroute: ActivatedRoute,
    readonly ciudadService: EmpresaCiudadService,
    private _planService: PlanService,
    readonly rubroService: RubroService
  ) {
    this.activatedroute.queryParams.subscribe((data) => {
      this.formGroup = this.formBuilder.group(data)
    });
  }

  ngOnInit(): void {
    this.obtenerCiudades()
    this.obtenerPlanes()
    this.obtenerRubros()
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

  obtenerPlanes() {
    this._planService.getPlan().subscribe(
      (data) => {
        this.listPlanes = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  obtenerCiudades() {
    this.ciudadService.getAll().subscribe(
      (res: EmpresaCiudad[]) => {
        this.ciudades = res;
      },
      (error) => {
        console.log(error);
      },
      () => {}
    );
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
}
