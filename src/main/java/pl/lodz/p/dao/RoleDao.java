package pl.lodz.p.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import pl.lodz.p.model.Role;

//@Repository
public interface RoleDao extends CrudRepository<Role, Long> {

}
