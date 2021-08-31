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