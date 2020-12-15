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
public class MobiliteControleur {
	@Autowired
	private MobiliteDao mobiliteDao;

	@RequestMapping(value = "/mobilites", method = RequestMethod.GET)
	public List<Mobilite> listeMobilites() {
		return mobiliteDao.listMobilite();
	}
	
	@RequestMapping(value = "/mobilite/{id}", method = RequestMethod.GET)
	public Mobilite getMobilite(@PathVariable Long id) {
		Mobilite mobilite = mobiliteDao.findById(id);
		return mobilite;
	}
	
	@PostMapping(value = "/updateMobilite")
	public Mobilite updateMobilite(@RequestBody String mobilite) {
		ObjectMapper mapper = new ObjectMapper();
		try {
			Mobilite newMobilite = mapper.readValue(mobilite, Mobilite.class);
			mobiliteDao.updateMobilite(newMobilite);
			return (newMobilite);
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		return (null);
	}
	
}
