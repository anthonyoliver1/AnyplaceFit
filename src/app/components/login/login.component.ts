import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { cpf } from 'cpf-cnpj-validator';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  dataFormLogin: any
  userLogin: boolean = true
  showUserInfo: boolean = false
  nextInfo: boolean = false
  state: boolean
  dataLogin: any = []
  cpfValue: string
  invalidEmail: boolean = false
  invalidName: boolean = false
  invalidSurname: boolean = false
  invalidPassword: boolean = false
  invalidCpf: boolean = false
  verifyCpf
  nextBtn: boolean
  finalBtn: boolean

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public toastController: ToastController,
    private usersService: UsersService
  ) {
    this.dataFormLogin = this.formBuilder.group({
      cpf: [null, [Validators.required, Validators.maxLength(14)]],
      name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      email: [null, [Validators.required, Validators.email]],
      gender: [null, [Validators.required]],
      surname: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      password: [null, [Validators.required]],
      passwordLogin: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]],
    })
  }

  ngOnInit() { }

  get formLogin() {
    return this.dataFormLogin.controls
  }

  async toast(msg) {
    const toast = await this.toastController.create({
      color: 'dark', // dark fica branco e light fica preto
      duration: 2000,
      message: msg,
    });

    await toast.present();
  }

  async login() {
    const email = this.formLogin["email"].value
    const password = this.formLogin["passwordLogin"].value
    let cpfUser = this.formLogin["cpf"].value

    if (cpfUser != null){
      cpfUser = cpfUser.replace(/[^0-9]/g, "")
    }

    const response = await this.usersService.login(email, password)

    if(response) {
      this.router.navigate(["/app-home"])
    } else {
      let message = 'Verifique o usuário e a senha'
      this.toast(message)
    }

    this.usersService.getUserData(cpfUser)
  }

  register() {
    let emailLogin = this.dataFormLogin.value.email
    let senhaLogin = this.dataFormLogin.value.confirmPassword
    let name = this.dataFormLogin.value.name
    let surname = this.dataFormLogin.value.surname    
    let cpfUser = this.formLogin["cpf"].value.replace(/[^0-9]/g, "")
    let cpfUserNoFomatter = this.formLogin["cpf"].value


    if (emailLogin && senhaLogin) {
      this.dataLogin.push(emailLogin, senhaLogin)
      this.showUserInfo = false
      this.nextInfo = false
      this.userLogin = true
    }
    this.usersService.dataUserInfo = this.dataFormLogin
    this.usersService.createAccount(emailLogin, senhaLogin)
    this.usersService.writeUserData(cpfUser, name, surname, emailLogin, cpfUserNoFomatter)
  }

  auth() {
    this.usersService.getAuthentication()
  }

  newAccount() {
    this.showUserInfo = true
    this.userLogin = false
    this.nextInfo = false
  }

  nextStep() {
    this.showUserInfo = false
    this.nextInfo = true
  }

  priviousStep() {
    if (this.showUserInfo) {
      this.userLogin = true
      this.showUserInfo = false
      this.nextInfo = false
    }

    if (!this.showUserInfo && this.nextInfo) {
      this.nextInfo = false
      this.showUserInfo = true
    }
  }

  optionsFn(e) {
    this.dataFormLogin.gender = e.detail.value;
    (e.detail.value == 'm' || e.detail.value == 'f' || e.detail.value == 'o') ? this.nextBtn = true : this.nextBtn = false
  }

  registerVerify() {
    let email = this.dataFormLogin.controls['email'].valid
    let password = this.dataFormLogin.value.password
    let confirmPassword = this.dataFormLogin.value.confirmPassword

    if (email && password != null || confirmPassword != null) {
      this.finalBtn = false
      if (email && password == confirmPassword) {
        this.finalBtn = true
      }
    } else {
      this.finalBtn = false
    }
  }

  validateNewAccount() {
    let cpfUser = this.dataFormLogin.controls['cpf'].value
    this.invalidEmail = (this.dataFormLogin.controls['email'].invalid && this.dataFormLogin.controls['email'].value)
    this.invalidName = (this.dataFormLogin.controls['name'].invalid && this.dataFormLogin.controls['name'].value)
    this.invalidSurname = (this.dataFormLogin.controls['surname'].invalid && this.dataFormLogin.controls['surname'].value)
    this.invalidPassword = (this.dataFormLogin.controls['password'].invalid && this.dataFormLogin.controls['password'].value)
    this.invalidCpf = cpf.isValid(cpfUser)
    this.verifyCpf = cpfUser?.length <= 14
  }

}
