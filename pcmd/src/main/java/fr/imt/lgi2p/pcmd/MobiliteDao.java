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
public class MobiliteDao {
	@Autowired
	private SessionFactory sessionFactory;

	public List<Mobilite> listMobilite() {
		Session session = this.sessionFactory.getCurrentSession();
		Query<Mobilite> query = session.createQuery("From Mobilite", Mobilite.class);
		return query.getResultList();
	}
	
	public Mobilite updateMobilite(Mobilite mobilite) {
		Session session = this.sessionFactory.getCurrentSession();
		session.update(mobilite);
		return mobilite;
	}
	
	public Mobilite findById(Long id) {
		Session session = this.sessionFactory.getCurrentSession();
		Mobilite mobilite = session.get(Mobilite.class, id);
		return mobilite;
	}
	
}
