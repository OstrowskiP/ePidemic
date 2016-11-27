package pl.lodz.p.dao;

import com.vividsolutions.jts.geom.Geometry;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import pl.lodz.p.model.Application;

//@Repository
public interface ApplicationDao extends CrudRepository<Application, Long> {

        Application findByUser_Id(Long userId);

        @Query("select a from Application a where within(a.location, :filter) = true and a.disease.name = :disease")
        Iterable<Application> findWithin(@Param("filter") Geometry filter, @Param("disease") String diseaseName);
}
