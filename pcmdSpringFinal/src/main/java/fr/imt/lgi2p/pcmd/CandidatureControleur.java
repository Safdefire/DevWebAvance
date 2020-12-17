package fr.imt.lgi2p.pcmd;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
public class CandidatureControleur {

	@Autowired
	private CandidatureDao candidatureDao;

	@RequestMapping(value = "/candidatures", method = RequestMethod.GET)
	public List<Candidature> listeCandidatures() {
		List<Candidature> listeCandidatures = candidatureDao.listeCandidatures();
		return listeCandidatures;
	}

	@RequestMapping(value = "/addCandidature/{login}", method = RequestMethod.GET)
	public Candidature newCandidature(@PathVariable String login) {
		Candidature candidature = new Candidature(login);
		if (candidatureDao.findById(login) == null) {
			candidatureDao.newCandidature(candidature);
		}
		return candidatureDao.findById(login);
	}
	
	@RequestMapping(value = "/candidature/{login}", method = RequestMethod.GET)
	public Candidature getCandidature(@PathVariable String login) {
		Candidature candidature = candidatureDao.findById(login);
		return candidature;
	}

	@PostMapping(value = "/updateCandidature")
	public Candidature updateCandidature(@RequestBody String candidature) {
		ObjectMapper mapper = new ObjectMapper();
		try {
			Candidature newCandidature = mapper.readValue(candidature, Candidature.class);
			candidatureDao.updateCandidature(newCandidature);
			return (newCandidature);
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		return (null);
	}

}
