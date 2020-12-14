package fr.imt.lgi2p.pcmd;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Candidature {

	@Id
	private String login;

	private String mobilite;

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getMobilite() {
		return mobilite;
	}

	public void setMobilite(String mobilite) {
		this.mobilite = mobilite;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((login == null) ? 0 : login.hashCode());
		result = prime * result + ((mobilite == null) ? 0 : mobilite.hashCode());
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
		Candidature other = (Candidature) obj;
		if (login == null) {
			if (other.login != null)
				return false;
		} else if (!login.equals(other.login))
			return false;
		if (mobilite == null) {
			if (other.mobilite != null)
				return false;
		} else if (!mobilite.equals(other.mobilite))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Candidature [login=" + login + ", mobilite=" + mobilite + "]";
	}

	public Candidature(String login, String mobilite) {
		super();
		this.login = login;
		this.mobilite = mobilite;
	}

	public Candidature(String login) {
		super();
		this.login = login;
	}

	public Candidature() {
		super();
	}

}
