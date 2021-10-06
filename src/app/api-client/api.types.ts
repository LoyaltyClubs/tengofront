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
  fecha_cierre: number
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
  interes: number;
  mora: number;
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
  estado:  string
  readonly linea_credito: number
}

export type Tarjeta = {
  id: number;
  numero: string;
  fecha_vencimiento: Date;
  estado: string;
  tipo_id: number;
  saldo: number;
  deleted: boolean;
  cliente_id: number
}

export type Credito = {
  id: number;
  descripcion: string;
  secuencia: number,
  fecha: Date;
  estado: string;
  monto_capital: number,
  nro_cuotas: number;
  monto_financiado: number,
  fecha_primer_cuota: Date;
  monto_cuota: number;
  deleted: boolean;
}

export type Cuota = {
  id: number;
  descripcion: string;
  fecha_limite: Date;
  monto: number;
  nro_de_cuota: number;
  estado: string,
  deleted: boolean;
}

export type Provincia = {
  readonly id: number
  readonly nombre: string
  readonly ciudad: string
  readonly ciudad_id: number
  readonly estado: boolean
  readonly deleted: boolean
}

export type Pago = {
  readonly id: number
  readonly nro_transaccion: string
  readonly fecha_transaccion: string
  readonly nro_vendedor: number
  readonly forma_pago: string
  readonly monto_abonado: string
  readonly nro_comprobante: string
  readonly ci_cliente: string
  readonly cliente_id: string
}