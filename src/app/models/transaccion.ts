export interface Transaccion {

    id: string;

    titulo: string;

    monto: number;

    tipo: 'Ingreso' | 'Gasto';

    descripcion: string;

    categoria: string;

    fecha: Date;

    comprobante?: string;

}
