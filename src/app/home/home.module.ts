import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HeaderComponent } from '../components/header/header.component';
import { LoginComponent } from '../components/login/login.component';
import { NewAccountComponent } from '../components/new-account/new-account.component';
import { BrMaskerModule } from 'br-mask';
import { CardsComponent } from '../components/cards/cards.component';
import { AppHomeComponent } from '../components/app-home/app-home.component';
import { PerfilComponent } from '../components/perfil/perfil.component';
import { TabsComponent } from '../components/tabs/tabs.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule,
    BrMaskerModule
  ],
  declarations: [
    HomePage,
    HeaderComponent,
    LoginComponent,
    NewAccountComponent,
    CardsComponent,
    AppHomeComponent,
    PerfilComponent,
    TabsComponent,
  ],
})
export class HomePageModule {}
