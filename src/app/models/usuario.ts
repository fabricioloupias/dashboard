export class Usuario {
    constructor( _id = '', name = '', apellido = '', email = '', password = '', pais = ''){
        this._id = _id;
        this.name = name;
        this.apellido = apellido;
        this.email = email;
        this.password = password;
        this.pais = pais;
    }
    _id: string;
    name: string;
    apellido: string;
    email:string;
    password: string;
    pais: string;
}
