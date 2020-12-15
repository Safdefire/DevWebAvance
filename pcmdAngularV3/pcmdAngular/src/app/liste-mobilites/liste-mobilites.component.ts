import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../login/login.component';

export interface Mobilite {
  id: number;
  universite: string;
  pays: string;
  dateDebut: Date;
  dateFin: Date;
  nombreDeCandidatures: number;
  nombreDePlaces: number;
  departement: string;
  domaineDeFormation: string;
}

@Component({
  selector: 'app-liste-mobilites',
  templateUrl: './liste-mobilites.component.html',
  styleUrls: ['./liste-mobilites.component.css']
})
export class ListeMobilitesComponent implements OnInit {
  information ;
  loginUser : string="";
  statutUser : string="";
  title = 'Liste des mobilités';
  lesMobilites = [];
  user : User;

  constructor(private http: HttpClient) {
    this.information = history.state;
    console.log(this.information);
    this.loginUser = history.state.loginUSER;
    console.log(this.loginUser);
    this.statutUser = history.state.statutUSER;
    console.log(this.statutUser);
    if(this.statutUser == "E")
    {
      this.user = new User(this.loginUser, this.statutUser);

      const desMobilites:Observable<[Mobilite]> = this.http.post<[Mobilite]>('http://127.0.0.1:8080/chercherMobilite', this.user);
      desMobilites.subscribe(desMobilites => {
        this.lesMobilites = desMobilites;
        console.log(this.lesMobilites);
    }); 
    }
    else
    {
      const desMobilites:Observable<[]> = this.http.get<[]>('http://127.0.0.1:8080/mobilites');
      desMobilites.subscribe(desMobilites => {
        this.lesMobilites = desMobilites;
        console.log(this.lesMobilites);
    }); 
    }
     
    
  }

  ngOnInit(): void {
    
  }

}