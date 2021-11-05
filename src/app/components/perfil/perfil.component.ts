import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {
  nameUser: string = "Anthony Oliveira"
  imageUser: string = "../../../assets/images/profile-icon.jpeg"
  value
  dataImage: any = []
  name: string 
  surname: string 
  email: string 
  cpf: string
  _fb: any = []

  constructor(private formBuilder: FormBuilder, private storage: Storage, private usersService: UsersService, private toastController: ToastController, private router: Router) { 
    this._fb = this.formBuilder.group({
      nameUser:[null,[Validators.minLength(2)]],
      surnameUser:[null,[Validators.minLength(2)]],
      emailUser: [null,[Validators.minLength(2), Validators.email]],
      cpf: [null, [Validators.required, Validators.maxLength(14)]]
    })
  }

  async toast(){
    const toast = await this.toastController.create({
      color: 'dark', // dark fica branco e light fica preto
      duration: 2000,
      message: "Atualizado com Sucesso",
    });

    await toast.present();
  }
  

  async ngOnInit() {

    setInterval(() => {
      let data = this.usersService.dataUserInfo
      this.name = data.username || localStorage.getItem('NAME')  
      this.surname = data.surname || localStorage.getItem('SURNAME')
      this.email = data.email || localStorage.getItem('EMAIL') 
      this.cpf =  data.cpf || localStorage.getItem('CPF')
    }, 1000);
  }

  file() {
    /** Esta abrindo para pegar a imagem */
    const inputFile = document.getElementById('file')
  };

  fileChange(e){
    /** Esta buscando o caminho da imagem */
    this.dataImage = e.srcElement.files[0].name
  }

  saveProfile(){
    let data = this.usersService.dataUserInfo
    data.value.name = this._fb.value.nameUser
    data.value.surname = this._fb.value.surnameUser
    data.value.email = this._fb.value.emailUser

    this.toast()
  }

  logout(){
    this.router.navigate(['/'])
  }

}
