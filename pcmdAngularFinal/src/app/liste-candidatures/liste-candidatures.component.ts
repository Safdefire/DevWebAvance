import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

export interface Candidature {
  login: String;
  voeu1: String;
  voeu2: String;
  voeu3: String;
}

@Component({
  selector: 'app-liste-candidatures',
  templateUrl: './liste-candidatures.component.html',
  styleUrls: ['./liste-candidatures.component.css']
})
export class ListeCandidaturesComponent implements OnInit {

  title = 'Liste des candidatures';
  lesCandidatures = [];
  lesEtudiants = [];

  constructor(private http: HttpClient) {
    const desCandidatures:Observable<[]> = this.http.get<[]>('http://127.0.0.1:8080/candidatures/');
    desCandidatures.subscribe(desCandidatures => {
      this.lesCandidatures = desCandidatures;
      console.log(this.lesCandidatures);
    });  
    const desEtudiants:Observable<[]> = this.http.get<[]>('http://127.0.0.1:8080/etudiants');
    desEtudiants.subscribe(desEtudiants => {
      this.lesEtudiants = desEtudiants;
      console.log(this.lesEtudiants);
    }); 
  }

  ngOnInit(): void {
  }

  getPrenomNom(login: String) {
    var prenomNom = '';
    for (var etudiant of this.lesEtudiants) {
      if (etudiant.login == login) {
        prenomNom = etudiant.prenom + ' ' + etudiant.nom;
      }
    }
    return prenomNom;
  }

}

