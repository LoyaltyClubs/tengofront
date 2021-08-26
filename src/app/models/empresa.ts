export class Empresa {
    id?: number;
    nombre: string;
    razon_social: string;
    rubro_id: number;
    direccion: string;
    ciudad_id: number;
    fecha_cierre: Date;
    inicio_contrato: Date;
    fin_contrato: Date;
    representante_legal: string;
    email: string;
    cargo: string;
    ci: string;
    expedicion: string;
    telefono: string;
    estado: boolean;
    plan_id: number;
    deleted: boolean;

    constructor(nombre: string, estado: boolean, razon_social: string, rubro_id: number, direccion: string,ciudad_id: number, fecha_cierre: Date, inicio_contrato:Date, fin_contrado:Date, representante_legal: string, email: string, cargo:string, ci:string, expedicion: string, telefono: string, plan_id: number, deleted: boolean){
        this.nombre = nombre;
        this.estado = estado;
        this.razon_social= razon_social;
        this.rubro_id= rubro_id;
        this.direccion= direccion;
        this.ciudad_id= ciudad_id;
        this.fecha_cierre = fecha_cierre;
        this.inicio_contrato = inicio_contrato;
        this.fin_contrato = fin_contrado;
        this.representante_legal= representante_legal;
        this.email=email;
        this.cargo=cargo;
        this.ci=ci;
        this.expedicion=expedicion;
        this.telefono= telefono;
        this.estado= estado;
        this.plan_id= plan_id;
        this. deleted = deleted;
    }

}