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

  constructor(private http: HttpClient) {
    const desMobilites:Observable<[]> = this.http.get<[]>('http://127.0.0.1:8080/mobilites/');
    desMobilites.subscribe(desMobilites => {
      this.lesMobilites = desMobilites;
      console.log(this.lesMobilites);
    });  
  }

  ngOnInit(): void {}

}