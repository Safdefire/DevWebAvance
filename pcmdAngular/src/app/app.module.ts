import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CompteComponent } from './compte/compte.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ListeMobilitesComponent } from './liste-mobilites/liste-mobilites.component';
import { ListeCandidaturesComponent } from './liste-candidatures/liste-candidatures.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    routingComponents,
    CompteComponent,
    SideBarComponent,
    ListeMobilitesComponent,
    ListeCandidaturesComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
