import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjouterMobiliteComponent } from './ajouter-mobilite/ajouter-mobilite.component';
import { CompteComponent } from './compte/compte.component';
import { ListeCandidaturesComponent } from './liste-candidatures/liste-candidatures.component';
import { ListeMobilitesComponent } from './liste-mobilites/liste-mobilites.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'compte/:statut/:idLogin', component: CompteComponent,
    children: [
      { path: 'profile', component: ProfileComponent, outlet: 'secondRouter' },
      { path: 'listeMobilites', component: ListeMobilitesComponent, outlet: 'secondRouter' },
      { path: 'listeCandidatures', component: ListeCandidaturesComponent, outlet: 'secondRouter' },
      { path: 'ajouterMobilite', component: AjouterMobiliteComponent, outlet: 'secondRouter' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ProfileComponent, LoginComponent, CompteComponent, ListeMobilitesComponent]