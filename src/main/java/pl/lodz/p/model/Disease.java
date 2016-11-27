package pl.lodz.p.model;

import javax.persistence.*;
import java.util.List;

/**
 * Created by Arkadiusz on 2016-11-13.
 */

@Entity
public class Disease {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long id;

    @Column(nullable = false)
    private String name;

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL, mappedBy = "disease")
    private List<Application> applicationsList;

    public Disease() {
    }

    public Disease(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Application> getApplicationsList() {
        return applicationsList;
    }

    public void setApplicationsList(List<Application> applicationsList) {
        this.applicationsList = applicationsList;
    }

    @Override
    public String toString() {
        return "Disease{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }
}
