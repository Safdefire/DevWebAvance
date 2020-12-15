import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

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

  title = 'Liste des mobilités';
  lesMobilites = [];
  lesCandidatures = [];

  constructor(private http: HttpClient) {
    const desMobilites: Observable<[]> = this.http.get<[]>('http://127.0.0.1:8080/mobilites/');
    desMobilites.subscribe(desMobilites => {
      this.lesMobilites = desMobilites;
      console.log(this.lesMobilites);
    });
    const desCandidatures: Observable<[]> = this.http.get<[]>('http://127.0.0.1:8080/candidatures');
    desCandidatures.subscribe(desCandidatures => {
      this.lesCandidatures = desCandidatures;
      console.log(this.lesCandidatures);
    });
  }

  ngOnInit(): void { }

  getCandidature(univeriste: String) {
    var c = 0;
    for (var candidature of this.lesCandidatures) {
      if ((candidature.voeu1 == univeriste) || (candidature.voeu2 == univeriste) || (candidature.voeu3 == univeriste)) {
        c+=1;
      }
    }
    return c;
  }

}