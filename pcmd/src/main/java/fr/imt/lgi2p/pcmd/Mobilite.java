package fr.imt.lgi2p.pcmd;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Mobilite {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String universite;
	private String pays;
	private Date dateDebut;
	private Date dateFin;
	private int nombreDeCandidatures;
	private int nombreDePlaces;
	private String departement;
	private String domaineDeFormation;

	public Mobilite() {
		super();
	}

	public Mobilite(Long id, String universite, String pays, Date dateDebut, Date dateFin, int nombreDeCandidatures,
			int nombreDePlaces, String departement, String domaineDeFormation) {
		super();
		this.id = id;
		this.universite = universite;
		this.pays = pays;
		this.dateDebut = dateDebut;
		this.dateFin = dateFin;
		this.nombreDeCandidatures = nombreDeCandidatures;
		this.nombreDePlaces = nombreDePlaces;
		this.departement = departement;
		this.domaineDeFormation = domaineDeFormation;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((dateDebut == null) ? 0 : dateDebut.hashCode());
		result = prime * result + ((dateFin == null) ? 0 : dateFin.hashCode());
		result = prime * result + ((departement == null) ? 0 : departement.hashCode());
		result = prime * result + ((domaineDeFormation == null) ? 0 : domaineDeFormation.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + nombreDeCandidatures;
		result = prime * result + nombreDePlaces;
		result = prime * result + ((pays == null) ? 0 : pays.hashCode());
		result = prime * result + ((universite == null) ? 0 : universite.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Mobilite other = (Mobilite) obj;
		if (dateDebut == null) {
			if (other.dateDebut != null)
				return false;
		} else if (!dateDebut.equals(other.dateDebut))
			return false;
		if (dateFin == null) {
			if (other.dateFin != null)
				return false;
		} else if (!dateFin.equals(other.dateFin))
			return false;
		if (departement == null) {
			if (other.departement != null)
				return false;
		} else if (!departement.equals(other.departement))
			return false;
		if (domaineDeFormation == null) {
			if (other.domaineDeFormation != null)
				return false;
		} else if (!domaineDeFormation.equals(other.domaineDeFormation))
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (nombreDeCandidatures != other.nombreDeCandidatures)
			return false;
		if (nombreDePlaces != other.nombreDePlaces)
			return false;
		if (pays == null) {
			if (other.pays != null)
				return false;
		} else if (!pays.equals(other.pays))
			return false;
		if (universite == null) {
			if (other.universite != null)
				return false;
		} else if (!universite.equals(other.universite))
			return false;
		return true;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUniversite() {
		return universite;
	}

	public void setUniversite(String universite) {
		this.universite = universite;
	}

	public String getPays() {
		return pays;
	}

	public void setPays(String pays) {
		this.pays = pays;
	}

	public Date getDateDebut() {
		return dateDebut;
	}

	public void setDateDebut(Date dateDebut) {
		this.dateDebut = dateDebut;
	}

	public Date getDateFin() {
		return dateFin;
	}

	public void setDateFin(Date dateFin) {
		this.dateFin = dateFin;
	}

	public int getNombreDeCandidatures() {
		return nombreDeCandidatures;
	}

	public void setNombreDeCandidatures(int nombreDeCandidatures) {
		this.nombreDeCandidatures = nombreDeCandidatures;
	}

	public int getNombreDePlaces() {
		return nombreDePlaces;
	}

	public void setNombreDePlaces(int nombreDePlaces) {
		this.nombreDePlaces = nombreDePlaces;
	}

	public String getDepartement() {
		return departement;
	}

	public void setDepartement(String departement) {
		this.departement = departement;
	}

	public String getDomaineDeFormation() {
		return domaineDeFormation;
	}

	public void setDomaineDeFormation(String domaineDeFormation) {
		this.domaineDeFormation = domaineDeFormation;
	}

	@Override
	public String toString() {
		return "Mobilite [id=" + id + ", universite=" + universite + ", pays=" + pays + ", dateDebut=" + dateDebut
				+ ", dateFin=" + dateFin + ", nombreDeCandidatures=" + nombreDeCandidatures + ", nombreDePlaces="
				+ nombreDePlaces + ", departement=" + departement + ", domaineDeFormation=" + domaineDeFormation + "]";
	}

}
