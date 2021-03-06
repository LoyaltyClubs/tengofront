import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Rubro } from 'src/app/api-client/api.types';
import { RubroService } from 'src/app/api-client/rubro.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoRubroComponent {
  formGroup: FormGroup = this.formBuilder.group({
    nombre: ['', Validators.required],
    estado: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private rubroService: RubroService
  ) {}

  agregarRubro() {
    const rubro: Rubro = this.formGroup.value

    this.rubroService.create(rubro).subscribe(
      (res) => {
        console.log(res)
        this.router.navigate(['/empresa/rubros']);
      },
      (error) => {
        console.log(error);
        this.formGroup.reset();
      }
    );
  }
}
