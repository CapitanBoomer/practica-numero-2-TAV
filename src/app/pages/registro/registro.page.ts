import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/registro/register.service'
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(public servreg: RegisterService) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.servreg.nuevousuario({
      firstName: '',
      lastName: '',
      age: 0,
      username: '',
      password: '',
      birthDate: '',
      gender: 'Male',


    })
  }

}
