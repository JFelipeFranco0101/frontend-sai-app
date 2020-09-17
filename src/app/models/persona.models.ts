import { TipoDocumento } from './tipo-documento.models';
import { RegistrarUsuario } from './registrar-usuario.models';
export interface PersonaFront {
    celular: string;
    direccionRecidencia: string;
    email: string;
    fechaNacimiento: Date;
    numeroDocumento: string;
    primerApellido: string;
    primerNombre: string;
    segundoApellido?: string;
    segundoNombre?: string;
    telefono: string;
    tipoDocumento: number;
}

export interface PersonaBack {
    idPersona?: string;
    celular: string;
    correoElectronico: string;
    direccion: string;
    fechaNacimiento: Date;
    nombre: string;
    numeroDocumento: string;
    primerApellido: string;
    primerNombre: string;
    segundoApellido: string;
    segundoNombre: string;
    telefono: string;
    tipoDocumento: TipoDocumento;
    usuario: RegistrarUsuario;
}
