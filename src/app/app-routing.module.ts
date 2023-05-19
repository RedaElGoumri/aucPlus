import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './components/authentification/authentification.component';

const routes: Routes = [
  {path: 'auth', component: AuthentificationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
