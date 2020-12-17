import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Etudiant } from '../Etudiant';
import { Candidature } from '../liste-candidatures/liste-candidatures.component';
import { Mobilite } from '../liste-mobilites/liste-mobilites.component';

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
    const desEtudiants: Observable<[]> = this.http.get<[]>('http://127.0.0.1:8080/etudiants');
    desEtudiants.subscribe(desEtudiants => {
      this.lesEtudiants = desEtudiants;
      console.log(this.lesEtudiants);
    });
    const desCandidatures: Observable<[]> = this.http.get<[]>('http://127.0.0.1:8080/candidatures');
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

  getCandidaturesMobilite(univeriste: String) {
    var c = 0;
    for (var candidature of this.lesCandidatures) {
      if ((candidature.voeu1 === univeriste) || (candidature.voeu2 === univeriste) || (candidature.voeu3 === univeriste)) {
        c = c+1;
      }
    }
    return c;
  }

  updateMobilite() {
    var c = 0;
    var updatedMobilite;
    for (var mobilite of this.lesMobilites) {
      c = this.getCandidaturesMobilite(mobilite.id);
      mobilite.nombreDeCandidatures = c;
      const newMobilite: Observable<Mobilite> = this.http.post<Mobilite>('http://127.0.0.1:8080/updateMobilite'
        , mobilite);
      newMobilite.subscribe(newMobilite => {
        mobilite = newMobilite;
        console.log(mobilite);
      });
      c=0;
    }
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
    this.updateMobilite();
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
    this.updateMobilite();
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
    this.updateMobilite();
  }

}

