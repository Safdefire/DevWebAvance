import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Etudiant } from '../Etudiant';
import { Mobilite } from '../liste-mobilites/liste-mobilites.component';

export class Candidature {
  login: String;
  voeu1: String;
  voeu2: String;
  voeu3: String;

  constructor() { }
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  information;
  loginUser: string = "";
  statutUser: string = "";
  lesMobilites = [];
  lesEtudiants = [];
  lesCandidatures = [];
  candidature: Candidature;
  
  ngOnInit(): void {
    //console.log(history.state);
    this.information = history.state;
    console.log(this.information);
    this.loginUser = history.state.loginUSER;
    console.log(this.loginUser);
    this.statutUser = history.state.statutUSER;
    console.log(this.statutUser);
  }

  constructor(private http: HttpClient) {
    const desMobilites: Observable<[]> = this.http.get<[]>('http://127.0.0.1:8080/mobilites/');
    desMobilites.subscribe(desMobilites => {
      this.lesMobilites = desMobilites;
      console.log(this.lesMobilites);
    });
    const desEtudiants:Observable<[]> = this.http.get<[]>('http://127.0.0.1:8080/etudiants');
    desEtudiants.subscribe(desEtudiants => {
      this.lesEtudiants = desEtudiants;
      console.log(this.lesEtudiants);
    }); 
    const desCandidatures:Observable<[]> = this.http.get<[]>('http://127.0.0.1:8080/candidatures');
    desCandidatures.subscribe(desCandidatures => {
      this.lesCandidatures = desCandidatures;
      console.log(this.lesCandidatures);
    });
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

  getCandidature(login: String) {
    var currentCandidature;
    for (var candidature of this.lesCandidatures) {
      if (candidature.login == login) {
        currentCandidature = candidature;
      }
    }
    return currentCandidature;
  }

  ajouterVoeu1(value: String): void {
    var candidature = this.getCandidature(this.loginUser);
    candidature.voeu1 = value;
    const newCandidature: Observable<Candidature> = this.http.post<Candidature>('http://127.0.0.1:8080/updateCandidature'
      , candidature);
    newCandidature.subscribe(newCandidature => {
      candidature = newCandidature;
      console.log(candidature);
    });
  }

  ajouterVoeu2(value: String): void {
    var candidature = this.getCandidature(this.loginUser);
    candidature.voeu2 = value;
    const newCandidature: Observable<Candidature> = this.http.post<Candidature>('http://127.0.0.1:8080/updateCandidature'
      , candidature);
    newCandidature.subscribe(newCandidature => {
      candidature = newCandidature;
      console.log(candidature);
    });
  }

  ajouterVoeu3(value: String): void {
    var candidature = this.getCandidature(this.loginUser);
    candidature.voeu3 = value;
    const newCandidature: Observable<Candidature> = this.http.post<Candidature>('http://127.0.0.1:8080/updateCandidature'
      , candidature);
    newCandidature.subscribe(newCandidature => {
      candidature = newCandidature;
      console.log(candidature);
    });
  }

}
