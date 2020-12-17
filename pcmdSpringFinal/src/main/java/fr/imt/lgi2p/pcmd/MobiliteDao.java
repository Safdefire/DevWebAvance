package fr.imt.lgi2p.pcmd;
import java.util.ArrayList;
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
	@Autowired
	private EtudiantDao etudiantDao;
	@Autowired
	private AdminDao adminDao;
	
	public List<Mobilite> listMobilite() {
		  Session session = this.sessionFactory.getCurrentSession();
		  Query<Mobilite> query = session.createQuery("From Mobilite", Mobilite.class);
		  return query.getResultList();
		}
	public Mobilite ajouterMobilite(Mobilite mobilite) {
		Session session = this.sessionFactory.getCurrentSession();
		session.save(mobilite);
		return mobilite;
		}
	public List<Mobilite> chercherMobilites(User user) {
		String login = user.getLogin();
		String departement = "";
		List<Etudiant> etudiants = etudiantDao.listEtudiant();
			for(int i=0; i<etudiants.size();i++)
			{
				if(etudiants.get(i).getLogin().equals(login))
				{
					departement = etudiants.get(i).getDepartement();
				}
			}
			
		
			
		List<Mobilite> mobilites = listMobilite();
		List<Mobilite> newMobilites = new ArrayList<Mobilite>();
		for(int i=0; i<mobilites.size();i++)
			{
				if(mobilites.get(i).getDepartement().equals(departement))
				{
					newMobilites.add(mobilites.get(i));
				}
			}
		return newMobilites;
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
