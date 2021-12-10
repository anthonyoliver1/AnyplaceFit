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
  invalidSubName: boolean = false
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
      subName: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
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
      message: msg,
      duration: 2000,
    });
    toast.present();
  }


  async callLogin() {
    const email = this.formLogin["email"].value
    const password = this.formLogin["passwordLogin"].value
    console.log(email, password);
    
    if (this.formLogin["email"].errors?.email) {
      this.toast('Email inválido')
      return
    } else if (!Boolean(password)) {
      this.toast('Informe uma senha valida')
      return
    }

    await this.login(email, password)
  }

  async login(email, password){
    //let response = await this.usersService.login(email, password)
    // console.log("response", response);
    this.router.navigate(["/app-home"])
    this.usersService.getUserData()
    
    // if (response) {
    //   console.log("asdasdasdasdasdasdasd", response);
    // } else this.toast('E-mail ou senha inválido')
  }

  // async login() {
  //   const email = this.formLogin["email"].value
  //   const password = this.formLogin["passwordLogin"].value
  //   let cpfUser = this.formLogin["cpf"].value

  //   if (cpfUser != null){
  //     cpfUser = cpfUser.replace(/[^0-9]/g, "")
  //   }

  //   const response = await this.usersService.login(email, password)

  //   if(response) {
  //     this.router.navigate(["/app-home"])
  //   } else {
  //     let message = 'Verifique o usuário e a senha'
  //     this.toast(message)
  //   }

  //   this.usersService.getUserData()
  // }

  async register() {
    let emailLogin = this.dataFormLogin.value.email
    let senhaLogin = this.dataFormLogin.value.confirmPassword
    let name = this.dataFormLogin.value.name
    let subName = this.dataFormLogin.value.subName
    let cpfUser = this.formLogin["cpf"].value.replace(/[^0-9]/g, "")
    let cpfUserNoFomatter = this.formLogin["cpf"].value


    if (emailLogin && senhaLogin) {
      this.dataLogin.push(emailLogin, senhaLogin)
      this.showUserInfo = false
      this.nextInfo = false
      this.userLogin = true
    }

    this.usersService.dataUserInfo = this.dataFormLogin
    const responseCreateUser = await this.usersService.createAccount(emailLogin, senhaLogin)
    if (responseCreateUser) {
      this.toast("Conta criada com sucesso!")
      this.router.navigate(["/app-home"])
      this.usersService.writeUserData(cpfUser, name, subName, emailLogin, cpfUserNoFomatter);
    } else this.toast("Ocorreu um erro ao criar a conta, por favor tente novamente ou entre em contato conosco.")
  }

  auth() {
    this.usersService.getAuthentication()
  }

  validyCPF(event){
    const cpf = event.target.value
    const regexCPF = /(?!(\d)\1{2}.\1{3}.\1{3}-\1{2})\d{3}\.\d{3}\.\d{3}\-\d{2}/gm
    if(!regexCPF.test(cpf)) this.toast("CPF inválido")
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
    const value = e.detail.value;
    this.nextBtn = ['m', 'f', 'o'].includes(value)
    this.formLogin['gender'].setValue(value)
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
    this.invalidSubName = (this.dataFormLogin.controls['subName'].invalid && this.dataFormLogin.controls['subName'].value)
    this.invalidPassword = (this.dataFormLogin.controls['password'].invalid && this.dataFormLogin.controls['password'].value)
    this.invalidCpf = cpf.isValid(cpfUser)
    this.verifyCpf = cpfUser?.length <= 14
  }

}
