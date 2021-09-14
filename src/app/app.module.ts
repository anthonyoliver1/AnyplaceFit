import { PersonalPageComponent } from './components/personal-page/personal-page.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { AppHomeComponent } from './components/app-home/app-home.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { HeaderComponent } from './components/header/header.component';
import { CardsComponent } from './components/cards/cards.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrMaskerModule } from 'br-mask';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    HeaderComponent,
    PerfilComponent,
    AppHomeComponent,
    TabsComponent,
    PersonalPageComponent,
    LoginComponent
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot(), FormsModule, ReactiveFormsModule, BrMaskerModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
