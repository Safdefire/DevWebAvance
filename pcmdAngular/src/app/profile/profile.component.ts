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
  etudiant: Etudiant;
  candidature: Candidature;
  
  private etudiantUrl = 'http://127.0.0.1:8080/etudiant';

  constructor(private http: HttpClient) {
    const desMobilites: Observable<[]> = this.http.get<[]>('http://127.0.0.1:8080/mobilites/');
    desMobilites.subscribe(desMobilites => {
      this.lesMobilites = desMobilites;
      console.log(this.lesMobilites);
    });
    const url = `${this.etudiantUrl}/${this.loginUser}`;
    const etudiant: Observable<Etudiant> = this.http.get<Etudiant>(url);
    etudiant.subscribe(etudiant => {
      this.etudiant = etudiant;
      console.log(this.etudiant);
    });
  }

  ngOnInit(): void {
    //console.log(history.state);
    this.information = history.state;
    console.log(this.information);
    this.loginUser = history.state.loginUSER;
    console.log(this.loginUser);
    this.statutUser = history.state.statutUSER;
    console.log(this.statutUser);
    this.candidature = new Candidature();
  }

  private candidatureUrl = 'http://127.0.0.1:8080/candidature';


  ajouterVoeu1(value: String): void {
    // On récupère la candidature    
    const url = `${this.candidatureUrl}/${this.loginUser}`;
    const candidature: Observable<Candidature> = this.http.get<Candidature>(url);
    candidature.subscribe(candidature => {
      this.candidature = candidature;
    });
    this.candidature.voeu1 = value;
    const newCandidature: Observable<Candidature> = this.http.post<Candidature>('http://127.0.0.1:8080/updateCandidature'
      , this.candidature);
    newCandidature.subscribe(newCandidature => {
      this.candidature = newCandidature;
      console.log(this.candidature);
    });
  }

  ajouterVoeu2(value: String): void {
    // On récupère la candidature    
    const url = `${this.candidatureUrl}/${this.loginUser}`;
    const candidature: Observable<Candidature> = this.http.get<Candidature>(url);
    candidature.subscribe(candidature => {
      this.candidature = candidature;
    });
    this.candidature.voeu2 = value;
    const newCandidature: Observable<Candidature> = this.http.post<Candidature>('http://127.0.0.1:8080/updateCandidature'
      , this.candidature);
    newCandidature.subscribe(newCandidature => {
      this.candidature = newCandidature;
      console.log(this.candidature);
    });
  }

  ajouterVoeu3(value: String): void {
    // On récupère la candidature    
    const url = `${this.candidatureUrl}/${this.loginUser}`;
    const candidature: Observable<Candidature> = this.http.get<Candidature>(url);
    candidature.subscribe(candidature => {
      this.candidature = candidature;
    });
    this.candidature.voeu3 = value;
    const newCandidature: Observable<Candidature> = this.http.post<Candidature>('http://127.0.0.1:8080/updateCandidature'
      , this.candidature);
    newCandidature.subscribe(newCandidature => {
      this.candidature = newCandidature;
      console.log(this.candidature);
    });
  }

}
