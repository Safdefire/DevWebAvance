package fr.imt.lgi2p.pcmd;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Candidature {

	@Id
	private String login;

	private String voeu1;
	private String voeu2;
	private String voeu3;

	public Candidature() {
		super();
	}

	public Candidature(String login) {
		super();
		this.login = login;
	}

	public Candidature(String login, String voeu1, String voeu2, String voeu3) {
		super();
		this.login = login;
		this.voeu1 = voeu1;
		this.voeu2 = voeu2;
		this.voeu3 = voeu3;
	}

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getVoeu1() {
		return voeu1;
	}

	public void setVoeu1(String voeu1) {
		this.voeu1 = voeu1;
	}

	public String getVoeu2() {
		return voeu2;
	}

	public void setVoeu2(String voeu2) {
		this.voeu2 = voeu2;
	}

	public String getVoeu3() {
		return voeu3;
	}

	public void setVoeu3(String voeu3) {
		this.voeu3 = voeu3;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((login == null) ? 0 : login.hashCode());
		result = prime * result + ((voeu1 == null) ? 0 : voeu1.hashCode());
		result = prime * result + ((voeu2 == null) ? 0 : voeu2.hashCode());
		result = prime * result + ((voeu3 == null) ? 0 : voeu3.hashCode());
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
		if (voeu1 == null) {
			if (other.voeu1 != null)
				return false;
		} else if (!voeu1.equals(other.voeu1))
			return false;
		if (voeu2 == null) {
			if (other.voeu2 != null)
				return false;
		} else if (!voeu2.equals(other.voeu2))
			return false;
		if (voeu3 == null) {
			if (other.voeu3 != null)
				return false;
		} else if (!voeu3.equals(other.voeu3))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Candidature [login=" + login + ", voeu1=" + voeu1 + ", voeu2=" + voeu2 + ", voeu3=" + voeu3 + "]";
	}

}
