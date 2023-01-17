import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import {Auth,Datos} from '../../interfaces/usuario/datousuario'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
private urlAuth: string = 'https://dummyjson.com/auth/login'
private datosuser:Datos |null =null
  constructor(private http:HttpClient,
    private alerta: AlertController) { }

  public validardatos({username,password}:Auth){
    this.http.post<Datos>(this.urlAuth,{username,password},{
      headers:{
        'Content-Type': 'application/json'
      }
    }).subscribe(async (datos) =>{
      if(datos){this.datosuser=datos;
        const alert = await this.alerta.create({
          message:'datos existen',
          buttons:['ok']
        })
        await alert.present();

      }

    })
  }
}
