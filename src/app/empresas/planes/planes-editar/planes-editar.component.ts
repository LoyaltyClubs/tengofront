import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanService } from 'src/app/services/plan.service';

@Component({
  selector: 'app-planes-editar',
  templateUrl: './planes-editar.component.html'
})
export class PlanesEditarComponent implements OnInit {

  formGroup: FormGroup = this.formBuilder.group({
      nombre: ['', Validators.required],
      seguro: ['', Validators.required],
      mantenimiento: ['', Validators.required],
      recargo: ['', Validators.required],
      interes: ['', Validators.required],
      mora: ['', Validators.required],
      estado: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private planService: PlanService,
    private activatedroute: ActivatedRoute
  ) {
    this.activatedroute.queryParams.subscribe((data) => {
      this.formGroup = this.formBuilder.group(data)
    });
  }

  ngOnInit(): void {}

  editarPlan() {
    this.planService.edit(this.formGroup.value).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/empresa/planes']);
      },
      (error) => {
        console.log(error);
        this.formGroup.reset();
      }
    );
  }
}
