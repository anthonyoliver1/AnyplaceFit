import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  // Your web app's Firebase configuration
  public firebaseConfig = {
    apiKey: "AIzaSyD760iVBhZ5Q5rCN1_Uxh8yhVCcRXh80xY",
    authDomain: "anyplace-fit-8231f.firebaseapp.com",
    projectId: "anyplace-fit-8231f",
    storageBucket: "anyplace-fit-8231f.appspot.com",
    messagingSenderId: "279694165545",
    appId: "1:279694165545:web:7b0b7e61d507e409117e38",
    measurementId: "G-3106E49N2Z"
  };

  // Initialize Firebase
  public app = initializeApp(this.firebaseConfig);
  public analytics = getAnalytics(this.app);

  constructor(private route: Router) {
    route.events.subscribe((el) => {
      if(el instanceof NavigationStart) {
        if(el.url !== "/personal") localStorage.removeItem("personal")
      }
    })
  }

  
}
