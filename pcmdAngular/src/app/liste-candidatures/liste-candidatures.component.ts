import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

export interface Candidature {
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
  selector: 'app-liste-candidatures',
  templateUrl: './liste-candidatures.component.html',
  styleUrls: ['./liste-candidatures.component.css']
})
export class ListeCandidaturesComponent implements OnInit {

  title = 'Liste des candidatures';
  lesCandidatures = [];

  constructor(private http: HttpClient) {
    const desMobilites:Observable<[]> = this.http.get<[]>('http://127.0.0.1:8080/mobilites/');
    desMobilites.subscribe(desMobilites => {
      this.lesCandidatures = desMobilites;
      console.log(this.lesCandidatures);
    });  
  }

  ngOnInit(): void {
  }

}
