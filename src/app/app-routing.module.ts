import { PersonalPageComponent } from './components/personal-page/personal-page.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppHomeComponent } from './components/app-home/app-home.component';
import { CardsComponent } from './components/cards/cards.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { NewAccountComponent } from './components/new-account/new-account.component';
import { PerfilComponent } from './components/perfil/perfil.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'newAccount', component: NewAccountComponent },
  { path: 'app-home', component: AppHomeComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'personal', component: PersonalPageComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
