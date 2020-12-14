package fr.imt.lgi2p.pcmd;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
public class EtudiantControleur {
	@Autowired
	private EtudiantDao etudiantDao;

	@RequestMapping(value = "/etudiants", method = RequestMethod.GET)
	public List<Etudiant> listeEtudiants() {
		return etudiantDao.listEtudiant();
	}

	@RequestMapping(value = "/etudiant/{login}", method = RequestMethod.GET)
	public Etudiant getEtudiant(@PathVariable String login) {
		Etudiant foundEtudiant = null;
		foundEtudiant = etudiantDao.getEtudiant(login);
		return foundEtudiant;
	}

}
