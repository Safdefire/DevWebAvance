package fr.imt.lgi2p.pcmd;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public class UserDao {

	@Autowired
	private SessionFactory sessionFactory;

	public List<User> listUser() {
		Session session = this.sessionFactory.getCurrentSession();
		Query<User> query = session.createQuery("From User", User.class);
		return query.getResultList();
	}

	public User isInformationValide(User user) {
		List<User> users = listUser();
		User valideUser = new User();
		String login = user.getLogin();
		String password = user.getPassword();
		for (int i = 0; i < users.size(); i++) {
			if (users.get(i).getLogin().equals(login) && users.get(i).getPassword().equals(password)) {
				valideUser = users.get(i);
				break;
			}
		}
		return valideUser;
	}
}
