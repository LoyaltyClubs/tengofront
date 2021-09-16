import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from '../../api-client/cliente.service';

@Component({
  selector: 'app-empresa-cargar',
  templateUrl: './empresa-cargar.component.html',
  styleUrls: ['./empresa-cargar.component.css']
})
export class EmpresaCargarComponent implements OnInit {

  empresaForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router,private _clienteService: ClienteService) { 
    this.empresaForm = this.fb.group({
      archivo: ['', Validators.required],
      esCliente: "false"
    })
  }

  ngOnInit(): void {
  }

  agregarEmpresas(){
    this._clienteService.agregarClientes().subscribe(data => {this.router.navigate(['/']);}, 
    error => {
      console.log(error);
      this.empresaForm.reset();
    })
    
  }
}
