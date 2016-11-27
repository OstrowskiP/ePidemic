package pl.lodz.p.model;

import com.vividsolutions.jts.geom.Point;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by Arkadiusz on 2016-11-13.
 */

@Entity
public class Application {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name="DISEASE_ID")
    private Disease disease;

    @ManyToOne
    @JoinColumn(name="USER_ID")
    private User user;

    @Column(nullable = false)
    //@Type(type = "org.hibernate.spatial.GeometryType")
    private Point location;

    @Column(nullable = false)
    private Date date;


    public Application(Disease disease, Point location, User user, Date date) {
        this.disease = disease;
        this.location = location;
        this.user = user;
        this.date = date;
    }

    public Application() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Disease getDisease() {
        return disease;
    }

    public void setDisease(Disease disease) {
        this.disease = disease;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Point getLocation() {
        return location;
    }

    public void setLocation(Point location) {
        this.location = location;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    @Override
    public String toString() {
        return "Application{" +
                "id=" + id +
                ", disease=" + disease +
                ", user=" + user +
                ", location=" + location +
                ", date=" + date +
                '}';
    }
}
