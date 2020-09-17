import { PersonaFront, PersonaBack } from '../models/persona.models';
import { TipoDocumento } from '../models/tipo-documento.models';
import { UsuarioToFront } from '../models/login.model';
export class TransformadorPersona {

    static transformPersonaToPersonaBack(personaFront: PersonaFront, usuario: UsuarioToFront): PersonaBack {
        console.log('Esta es la berraca informacion: ', personaFront);
        return {
            celular: personaFront.celular,
            correoElectronico: personaFront.email,
            direccion: personaFront.direccionRecidencia,
            fechaNacimiento: personaFront.fechaNacimiento,
            nombre: personaFront.primerNombre + ' ' + personaFront.segundoApellido + ' ' +
                personaFront.primerApellido + ' ' + personaFront.segundoApellido,
            numeroDocumento: personaFront.numeroDocumento,
            primerApellido: personaFront.primerApellido,
            primerNombre: personaFront.primerNombre,
            segundoApellido: personaFront.segundoApellido,
            segundoNombre: personaFront.segundoNombre,
            telefono: personaFront.telefono,
            tipoDocumento: {
                idTipoDocumento: personaFront.tipoDocumento
            },
            usuario: {
                email: usuario.emial,
                id: usuario.idUsuario,
                usaurio: usuario.nombreUsuario
            }
        };
    }
}
