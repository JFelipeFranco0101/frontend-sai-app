export interface LoginToBack {
    usurio: string;
    clave: string;
}


export interface LoginToFront {
    authenticationToken: string;
    usuario: UsuarioToFront;
}

export interface UsuarioToFront {
    idUsuario: number;
    emial: string;
    estado: boolean;
    nombreUsuario: string;
}
