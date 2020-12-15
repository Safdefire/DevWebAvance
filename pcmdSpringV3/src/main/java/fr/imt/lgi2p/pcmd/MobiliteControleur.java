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
	
	@RequestMapping(value="/mobilites", method=RequestMethod.GET)
	   public List<Mobilite> listeMobilites() {
		return mobiliteDao.listMobilite();
	}
	@PostMapping(value = "/ajouterMobilite" )
	public Mobilite ajoutMobilite(@RequestBody String mobilite)
		{
		ObjectMapper mapper = new ObjectMapper();
	     // Petit bug qui permet de forcer le passage d'un int en long
	     mapper.configure(DeserializationFeature.USE_LONG_FOR_INTS, true);
	     try {
	    	 Mobilite newMobilite = mapper.readValue(mobilite, Mobilite.class);
	    	 Mobilite resultMobilite = mobiliteDao.ajouterMobilite(newMobilite);
	         return ( resultMobilite );
	     } catch (JsonProcessingException e) {
	        e.printStackTrace();
	     }
	     return (null);
			
		}
	@PostMapping(value = "/chercherMobilite" )
	public List<Mobilite> chercherMobilite(@RequestBody String user)
		{
		ObjectMapper mapper = new ObjectMapper();
	     // Petit bug qui permet de forcer le passage d'un int en long
	     mapper.configure(DeserializationFeature.USE_LONG_FOR_INTS, true);
	     try {
	    	 User newUser = mapper.readValue(user, User.class);
	    	 return mobiliteDao.chercherMobilites(newUser);
	    	 //return mobiliteDao.listMobilite();
	     } catch (JsonProcessingException e) {
	        e.printStackTrace();
	     }
	     return (null);
			
		}
}
