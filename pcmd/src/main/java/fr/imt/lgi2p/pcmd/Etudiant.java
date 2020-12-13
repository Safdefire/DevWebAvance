package fr.imt.lgi2p.pcmd;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Etudiant {
	@Id
	private String login;

	private String nom;
	private String prenom;
	private String email;
	private String niveauScolaire;
	private String departement;
	public Etudiant() {
		super();
	}
	public Etudiant(String login, String nom, String prenom, String email, String niveauScolaire,
			String departement) {
		super();
		this.login = login;
		this.nom = nom;
		this.prenom = prenom;
		this.email = email;
		this.niveauScolaire = niveauScolaire;
		this.departement = departement;
	}
	public String getLogin() {
		return login;
	}
	public void setLogin(String login) {
		this.login = login;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getPrenom() {
		return prenom;
	}
	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getNiveauScolaire() {
		return niveauScolaire;
	}
	public void setNiveauScolaire(String niveauScolaire) {
		this.niveauScolaire = niveauScolaire;
	}
	public String getDepartement() {
		return departement;
	}
	public void setDepartement(String departement) {
		this.departement = departement;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((departement == null) ? 0 : departement.hashCode());
		result = prime * result + ((email == null) ? 0 : email.hashCode());
		result = prime * result + ((login == null) ? 0 : login.hashCode());
		result = prime * result + ((niveauScolaire == null) ? 0 : niveauScolaire.hashCode());
		result = prime * result + ((nom == null) ? 0 : nom.hashCode());
		result = prime * result + ((prenom == null) ? 0 : prenom.hashCode());
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
		Etudiant other = (Etudiant) obj;
		if (departement == null) {
			if (other.departement != null)
				return false;
		} else if (!departement.equals(other.departement))
			return false;
		if (email == null) {
			if (other.email != null)
				return false;
		} else if (!email.equals(other.email))
			return false;
		if (login == null) {
			if (other.login != null)
				return false;
		} else if (!login.equals(other.login))
			return false;
		if (niveauScolaire == null) {
			if (other.niveauScolaire != null)
				return false;
		} else if (!niveauScolaire.equals(other.niveauScolaire))
			return false;
		if (nom == null) {
			if (other.nom != null)
				return false;
		} else if (!nom.equals(other.nom))
			return false;
		if (prenom == null) {
			if (other.prenom != null)
				return false;
		} else if (!prenom.equals(other.prenom))
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "Etudiant [login=" + login + ", nom=" + nom + ", prenom=" + prenom + ", email=" + email
				+ ", niveauScolaire=" + niveauScolaire + ", departement=" + departement + "]";
	}
	
}
