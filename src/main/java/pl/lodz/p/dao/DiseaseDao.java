package pl.lodz.p.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import pl.lodz.p.model.Disease;

//@Repository
public interface DiseaseDao extends CrudRepository<Disease, Long> {

    Disease findByName(String name);

}
