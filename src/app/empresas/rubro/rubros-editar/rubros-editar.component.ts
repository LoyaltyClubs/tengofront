import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RubroService } from 'src/app/api-client/rubro.service';

@Component({
  selector: 'app-rubros-editar',
  templateUrl: './rubros-editar.component.html'
})
export class RubrosEditarComponent {
  formGroup: FormGroup = this.formBuilder.group({
    nombre: ['', Validators.required],
    estado: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private rubroService: RubroService,
    private activatedroute: ActivatedRoute
  ) {
    this.activatedroute.queryParams.subscribe((data) => {
      this.formGroup = this.formBuilder.group(data)
    });
  }

  editarRubro() {
    this.rubroService.edit(this.formGroup.value).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/empresa/rubros']);
      },
      (error) => {
        console.log(error);
        this.formGroup.reset();
      }
    );
  }
}
