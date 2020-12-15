export class Mobilite {
    id: number;
    universite: string;
	pays: string;
	dateDebut: Date;
	dateFin: Date;
    nombreDeCandidatures: number;
	nombreDePlaces: number;
	departement: string;
	domaineDeFormation: string;
    constructor(univ,pays,dateD,dateF,nbrCandidatures,nbrPlaces,departement,domaineF)
    {
        this.universite=univ;
        this.pays=pays;
        this.dateDebut=dateD;
        this.dateFin=dateF;
        this.nombreDeCandidatures=nbrCandidatures;
        this.nombreDePlaces=nbrPlaces;
        this.departement=departement;
        this.domaineDeFormation=domaineF;
    }
    

}