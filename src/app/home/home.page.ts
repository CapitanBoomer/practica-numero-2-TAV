import { Component } from '@angular/core';
import {AuthService} from '../services/autorizacion/auth.service'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
public nombre: string ='';
public password:string='';
  constructor(private servicio:AuthService) {}

ionViewWillEnter(){
  this.servicio.validardatos({
    username:'atuny0',
    password:'9uQFF1Lh',
  }
  )

}

}
