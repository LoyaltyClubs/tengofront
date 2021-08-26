export class Plan {
    id?: number;
    nombre: string;
    estado: boolean;
    seguro: number;
    mantenimiento: number;
    recargo: number;
    deleted: boolean;

    constructor(nombre: string, estado: boolean, seguro: number, mantenimiento: number, recargo: number, deleted: boolean){
        this.nombre = nombre;
        this.estado = estado;
        this.seguro = seguro;
        this.mantenimiento = mantenimiento;
        this.recargo = recargo;
        this. deleted = deleted;
    }

}