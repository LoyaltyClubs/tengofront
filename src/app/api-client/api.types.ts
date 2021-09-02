export type EmpresaCiudad = {
  readonly id: number
  readonly nombre: string
  readonly estado: string
}

export type Rubro = {
  readonly id: number
  readonly nombre: string
  readonly estado: string
}

export type Empresa = {
  id: number
  nombre: string
  razon_social: string
  nit: string
  rubro_id: number
  direccion: string
  ciudad_id: number
  fecha_cierre: Date
  inicio_contrato: Date
  fin_contrato: Date
  representante_legal: string
  email: string
  cargo: string
  ci: string
  expedicion: string
  telefono: string
  estado: boolean
  plan_id: number
  deleted: boolean
}

export type Plan = {
  id: number;
  nombre: string;
  estado: boolean;
  seguro: number;
  mantenimiento: number;
  recargo: number;
  deleted: boolean;
}

export type Cliente = {
  readonly id: number
  readonly nombre: string
  readonly apellido_paterno: string
  readonly apellido_materno: string
  readonly estado_civil: string
  readonly fecha_nacimiento: string
  readonly ci: string
  readonly calle_particular: string
  readonly extension: string
  readonly barrio: string
  readonly dia_pago: string
  readonly saldo: string
  readonly sexo:  string
  readonly zona:   string
  readonly provincia:  string
  readonly ciudad_id:  string
  readonly telefono_fijo:  string
  readonly telefono_celular:  string
  readonly email:  string
  readonly nombre_referencia:  string
  readonly provincia_referencia:  string
  readonly telefono_referencia:  string
  readonly tipo_tel_referencia:  string
  readonly ciudad_referencia:  string
  readonly estado:  string
}