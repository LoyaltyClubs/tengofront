import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Plan } from 'src/app/models/plan';
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
      mantenimiento: ['', Validators.required],
      recargo: ['', Validators.required],
      estado: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  agregarPlan(){
    const PLAN: Plan = {
      nombre: this.planForm.get('nombre')?.value,
      seguro: this.planForm.get('seguro')?.value,
      mantenimiento: this.planForm.get('mantenimiento')?.value,
      recargo: this.planForm.get('recargo')?.value,
      estado: this.planForm.get('estado')?.value,
      deleted: false
    }
    this._planService.agregarPlan(PLAN).subscribe(data => {this.router.navigate(['/empresa/planes']);}, 
    error => {
      console.log(error);
      this.planForm.reset();
    })
    
  }

}
