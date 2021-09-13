import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private route: Router) {
    route.events.subscribe((el) => {
      if(el instanceof NavigationStart) {
        if(el.url !== "/personal") localStorage.removeItem("personal")
      }
    })
  }
}
