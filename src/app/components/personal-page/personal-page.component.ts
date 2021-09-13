import { UsersService } from './../users.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'personal-page',
  templateUrl: './personal-page.component.html',
  styleUrls: ['./personal-page.component.scss']
})
export class PersonalPageComponent implements OnInit {

  public handlerDataPersonal: Subscription
  public sex: String = "Professor"
  public dataPersonal: any = null
  public noData: Boolean = true

  constructor(private service: UsersService) { 
    this.handlerDataPersonal = this.service.handlerDataPersonal.subscribe(this.getDataPersonal)
  }

  ngOnInit() { 
    if(this.noData) this.dataPersonal = JSON.parse(localStorage.getItem("personal"))
  }
  
  ionViewDidLeave(){
    this.handlerDataPersonal.unsubscribe()
  }

  getDataPersonal(infs){
    if(infs){
      this.noData = false
      this.dataPersonal = infs
      if(!infs.sexo.includes("M")) this.sex = "Professora"
      localStorage.setItem("personal", JSON.stringify(infs))
    }
  }

  openWhatsApp(number){
    window.open(`https://web.whatsapp.com/send=Olá!%20Tenho%20interesse%20em%20suas%20aulasphone=${number}`, "_blank");
  }

}
