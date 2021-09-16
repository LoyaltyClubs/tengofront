import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from '../../api-client/cliente.service';

@Component({
  selector: 'app-cliente-cargar',
  templateUrl: './cliente-cargar.component.html',
  styleUrls: ['./cliente-cargar.component.css']
})
export class ClienteCargarComponent implements OnInit {
  clienteForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router,private _clienteService: ClienteService) { 
    this.clienteForm = this.fb.group({
      archivo: ['', Validators.required],
      esCliente: "true"
    })
  }

  ngOnInit(): void {
  }

  agregarClientes(){
    this._clienteService.agregarClientes().subscribe(data => {this.router.navigate(['/']);}, 
    error => {
      console.log(error);
      this.clienteForm.reset();
    })
    
  }

}
