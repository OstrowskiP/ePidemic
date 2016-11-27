package pl.lodz.p.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import pl.lodz.p.model.User;


//@Repository
public interface UserDao extends CrudRepository<User, Long> {

    Iterable<User> findByRole_Name(String roleName);

    User findByUsername(String username);

    User findByEmail(String email);

}
