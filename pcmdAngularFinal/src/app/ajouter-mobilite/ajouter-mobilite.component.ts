import { Component, OnInit } from '@angular/core';
import { Mobilite } from '../Mobilite';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-mobilite',
  templateUrl: './ajouter-mobilite.component.html',
  styleUrls: ['./ajouter-mobilite.component.css']
})
export class AjouterMobiliteComponent implements OnInit {
  universite: string;
	pays: string;
	dateDebut: string;
	dateFin: string;
  nombreCandidatures: string = "0";
	nombrePlaces: string;
	departement: string;
  domaineFormation: string;
  mobilite: Mobilite;
  valideMobilite: Mobilite;
  isValide: boolean;
  constructor(private http: HttpClient, private router:Router) { }

  ngOnInit(): void {
  }
  isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
  }
  ajouterMobilite()
  {
    if(this.universite && this.dateDebut && this.dateFin && this.pays && this.domaineFormation && this.nombreCandidatures &&this.nombrePlaces && this.departement){
      this.mobilite=new Mobilite(this.universite, this.pays, new Date(this.dateDebut), new Date(this.dateFin), parseInt(this.nombreCandidatures), parseInt(this.nombrePlaces), this.departement, this.domaineFormation);
      console.log(this.mobilite);
      const newMobilite:Observable<Mobilite> = this.http.post<Mobilite>('http://127.0.0.1:8080/ajouterMobilite' 
    , this.mobilite );
    newMobilite.subscribe(newMobilite =>{
      this.valideMobilite = newMobilite;
      this.isValide = this.isEmptyObject(this.valideMobilite);
      console.log(this.valideMobilite);
      console.log(this.isValide);
      if(this.isValide == false)
        {
          let element3: HTMLElement = document.getElementById('alertMessage');
          element3.removeAttribute("style");
        }
      });
    }
  }
}
