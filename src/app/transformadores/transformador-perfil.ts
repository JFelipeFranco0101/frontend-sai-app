import { RegistrarUsuario } from '../models/registrar-usuario.models';
export class TransformadorPerfil {

    static transformadorPerfilToPerfilBack(perfil: any, idPerfil: number): RegistrarUsuario {
        return {
            id: idPerfil,
            email: perfil.email,
            usuario: perfil.usuario
        };
    }
}
