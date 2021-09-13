import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {


  public enableGoBack: Boolean = false

  constructor(private route: Router) {
    if (this.route.url !== "/app-home") this.enableGoBack = true
  }

  ngOnInit() { }

  backToMenu(){
    this.route.navigate(['/app-home'])
  }

}
