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
public class AdminDao {
	@Autowired
	private SessionFactory sessionFactory;
	
	public List<Admin> listAdmin() {
		  Session session = this.sessionFactory.getCurrentSession();
		  Query<Admin> query = session.createQuery("From Admin", Admin.class);
		  return query.getResultList();
		}
}
