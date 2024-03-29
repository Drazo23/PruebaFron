import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../model/jwt-dto';
import { LoginUsuario } from '../model/login-usuario';
import { Nuevousuario } from '../model/nuevo-usuario';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    authURL = 'https://backprueba-b2kf.onrender.com/auth/'
    /*authURL = 'http://localhost:8080/auth/'*/

    constructor(private httpCliente: HttpClient) { }

    public nuevo(nuevoUsuario: Nuevousuario): Observable<any>{
        return this.httpCliente.post<any>(this.authURL + 'nuevo', nuevoUsuario);
    }

    public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
        return this.httpCliente.post<JwtDto>(this.authURL + 'login', loginUsuario)
    }
}