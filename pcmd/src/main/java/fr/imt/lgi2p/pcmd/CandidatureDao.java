package fr.imt.lgi2p.pcmd;

import java.util.List;
import java.util.Optional;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public class CandidatureDao {
	
	@Autowired
	private SessionFactory sessionFactory;

	public List<Candidature> listeCandidatures() {
		Session session = this.sessionFactory.getCurrentSession();
		Query<Candidature> query = session.createQuery("From Candidature", Candidature.class);
		return query.getResultList();
	}

	public Candidature newCandidature(Candidature newCandidature) {
		Session session = this.sessionFactory.getCurrentSession();
		session.save(newCandidature);
		return newCandidature;
	}

	public Candidature updateCandidature(Candidature candidature) {
		Session session = this.sessionFactory.getCurrentSession();
		session.update(candidature);
		return candidature;
	}

	public Candidature findById(String login) {
		Session session = this.sessionFactory.getCurrentSession();
		Candidature candidature = session.get(Candidature.class, login);
		return candidature;
	}
	
}
