import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss'],
})
export class NewAccountComponent implements OnInit {
  dataUserResgister: any
  showUserInfo: boolean = true
  nextInfo: boolean = false
  state: boolean

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.dataUserResgister = this.formBuilder.group({
      name:[],
      surname:[],
      cpf:[],
      email:[],
      password:[],
      confirmPassword:[]
    })
  }

  ngOnInit() {
    this.showUserInfo
    this.nextInfo
  }

  
}
