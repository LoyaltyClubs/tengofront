import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProvinciaService } from 'src/app/api-client/provincia.service';

@Component({
  selector: 'app-nueva-provincia',
  templateUrl: './nueva-provincia.component.html',
  styleUrls: ['./nueva-provincia.component.css']
})
export class NuevaProvinciaComponent implements OnInit {
  formGroup: FormGroup = this.formBuilder.group({
    nombre: ['', Validators.required],
    ciudadId: ['', Validators.required],
    estado: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private provinciaService: ProvinciaService
  ) {}

  ngOnInit(): void {}

  agregarProvincia() {
    this.provinciaService.create(this.formGroup.value).subscribe(
      (res) => {
        console.log(res)
        this.router.navigate(['/empresa/provincias']);
      },
      (error) => {
        console.log(error);
        this.formGroup.reset();
      }
    );
  }
}
