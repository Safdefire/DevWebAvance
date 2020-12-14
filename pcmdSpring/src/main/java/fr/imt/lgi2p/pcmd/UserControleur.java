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
public class UserControleur {

	@Autowired
	private UserDao userDao;

	@RequestMapping(value = "/users", method = RequestMethod.GET)
	public List<User> listeUsers() {
		return userDao.listUser();
	}

	@PostMapping(value = "/connexion")
	public User connexion(@RequestBody String user) {
		ObjectMapper mapper = new ObjectMapper();
		// Petit bug qui permet de forcer le passage d'un int en long
		mapper.configure(DeserializationFeature.USE_LONG_FOR_INTS, true);
		try {
			User newUser = mapper.readValue(user, User.class);
			User resultUser = userDao.isInformationValide(newUser);
			return (resultUser);
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		return (null);

	}
}
