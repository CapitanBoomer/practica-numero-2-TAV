import { Injectable } from '@angular/core';
import { NuevosDatos } from '../../interfaces/registro/nuevos-datos'
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  public datosnuevos: NuevosDatos | null =null
  private url: string = 'https://dummyjson.com/users/add'
  constructor(private http: HttpClient) { }

public nuevousuario(datosnuevos:NuevosDatos){
  this.http.post<NuevosDatos>(this.url,{...datosnuevos},{headers:{
    'Content-Type': 'application/json'
  }
  }).subscribe( async datos =>{
if(datos){this.datosnuevos = datos;
  }
  })
}
}
