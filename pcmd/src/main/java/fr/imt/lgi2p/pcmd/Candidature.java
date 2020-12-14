package fr.imt.lgi2p.pcmd;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Candidature {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private String login;

	private String mobilite;

}
