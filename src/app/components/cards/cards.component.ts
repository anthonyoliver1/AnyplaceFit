import { Router } from '@angular/router';
import { UsersService } from './../users.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {

  @Input() listPersonals

  constructor(private service: UsersService, private route: Router) { }

  ngOnInit() { }
  
  goToPersonalPage(data){
    this.service.handlerDataPersonal.next(data)
    this.route.navigate(['/personal'])
  }


}
