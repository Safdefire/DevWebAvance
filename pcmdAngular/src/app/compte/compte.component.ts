import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import {Etudiant} from '../Etudiant';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {
  button_text : string='';
  etudiant : Etudiant = new Etudiant();
  loginUser: String='';
  statutUser: String;
  lesEtudiants = [];
  val : string='';
  constructor(private http: HttpClient, private router:ActivatedRoute) {
    let login = this.router.snapshot.paramMap.get('idLogin');
    let stat = this.router.snapshot.paramMap.get('statut');
    this.loginUser = login;
    this.statutUser = stat;
    console.log(this.loginUser);
    console.log(this.statutUser);
    const desEtudiants:Observable<[]> = this.http.get<[]>('http://127.0.0.1:8080/etudiants/');
    desEtudiants.subscribe(desEtudiants => {
      this.lesEtudiants = desEtudiants;
      console.log(this.lesEtudiants);
    }); 
    if(this.statutUser == "E")
      {
        const newEtudiant:Observable<Etudiant> = this.http.get<Etudiant>('http://127.0.0.1:8080/etudiant/'+this.loginUser);
        newEtudiant.subscribe(newEtudiant =>{
        this.etudiant = newEtudiant;
        console.log(this.etudiant);
        });
        this.button_text="Postuler"
      }
      else
      {
        //Récupérer le compte du professeur
        this.button_text="Ajouter une candidature"
      }
    
      //console.log(this.etudiant);
   }

  ngOnInit(): void {
    


  }

}
