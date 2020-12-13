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
public class EtudiantDao {
	
	@Autowired
	private SessionFactory sessionFactory;
	
	public List<Etudiant> listEtudiant() {
		  Session session = this.sessionFactory.getCurrentSession();
		  Query<Etudiant> query = session.createQuery("From Etudiant", Etudiant.class);
		  return query.getResultList();
		}
	public Etudiant getEtudiant(String login) {
		List<Etudiant> lesEtudiants = listEtudiant();
		Etudiant foundEtudiant = null;
		for(int i=0; i<lesEtudiants.size();i++)
		{
			if(lesEtudiants.get(i).getLogin().equals(login))
			{
				foundEtudiant = lesEtudiants.get(i);
				break;
			}
		}
		return foundEtudiant;
	}
}
