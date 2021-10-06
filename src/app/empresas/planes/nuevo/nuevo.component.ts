import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Plan } from 'src/app/api-client/api.types';
import { PlanService } from '../../../services/plan.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
  planForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router,private _planService: PlanService) { 
    this.planForm = this.fb.group({
      nombre: ['', Validators.required],
      seguro: ['', Validators.required],
      interes: ['', Validators.required],
      mora: ['', Validators.required],
      mantenimiento: ['', Validators.required],
      recargo: ['', Validators.required],
      estado: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  agregarPlan(){
    this._planService.agregarPlan(this.planForm.value).subscribe(data => {this.router.navigate(['/empresa/planes']);}, 
    error => {
      console.log(error);
      this.planForm.reset();
    })
  }

}
