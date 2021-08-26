import { Component, OnInit } from '@angular/core';
import { EmpresaCiudad } from 'src/app/api-client/api.types';
import { EmpresaCiudadService } from 'src/app/api-client/empresa-ciudad.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  ciudades: EmpresaCiudad[] = [];

  constructor(readonly ciudadService: EmpresaCiudadService) { }

  ngOnInit(): void {
    this.obtenerCiudades()
  }

  obtenerCiudades(){
    this.ciudadService.getAll().subscribe(
      (res: EmpresaCiudad[]) => {
        this.ciudades = res;
        console.log(res)
      },
      (error) => {
        console.log(error);
      },
      () => {}
    );
  }
}
