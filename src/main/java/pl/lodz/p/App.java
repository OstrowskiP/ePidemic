package pl.lodz.p;

import com.vividsolutions.jts.geom.Geometry;
import com.vividsolutions.jts.geom.Point;
import com.vividsolutions.jts.io.ParseException;
import com.vividsolutions.jts.io.WKTReader;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.StandardPasswordEncoder;
import pl.lodz.p.dao.ApplicationDao;
import pl.lodz.p.dao.DiseaseDao;
import pl.lodz.p.dao.RoleDao;
import pl.lodz.p.dao.UserDao;
import pl.lodz.p.model.Application;
import pl.lodz.p.model.Disease;
import pl.lodz.p.model.Role;
import pl.lodz.p.model.User;

import java.util.Arrays;
import java.util.Date;

@Slf4j
@SpringBootApplication
public class App {

    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }

    @Bean
    public CommandLineRunner demo(ApplicationDao applicationDao, DiseaseDao diseaseDao, RoleDao roleDao, UserDao userDao) {
        return (args) -> {

            Role adminRole = new Role("admin");
            Role userRole = new Role("user");

            Disease disease = new Disease("cholera");
            Disease disease2 = new Disease("plague");

            StandardPasswordEncoder spe = new StandardPasswordEncoder();
            String pass = spe.encode("pass");

            User user = new User("John", "Smith", "Skankhunt42", pass, "skank@gmail.com", true, adminRole);
            User user2 = new User("Will", "Barret", "barret3", pass, "barret3@gmail.com", true, userRole);

            Application application = createApplication(disease, user, createWktPoint(213.04, 923.23));
            Application application2 = createApplication(disease2, user2, createWktPoint(54.32, 53.26));

            roleDao.save(adminRole);
            roleDao.save(userRole);

            diseaseDao.save(disease);
            diseaseDao.save(disease2);

            userDao.save(user);
            userDao.save(user2);

            applicationDao.save(application);
            applicationDao.save(application2);

            System.out.println(applicationDao.findOne(1L));
            System.out.println(applicationDao.findByUser_Id(1L));

            Iterable<User> adminUsers = userDao.findByRole_Name("admin");
            log.debug("number of admins: " + Arrays.asList(adminUsers).size());

            String userName = "barret3";
            User someUser = userDao.findByUsername(userName);
            log.debug("user with following username: " + userName + " has " + someUser.getApplicationsList().size() + " applications");

            String polygon = createWktQuadrangle(100.00, 400.00, 600.00, 700.00, 1100.00, 300.00, 100.00, 1050.00);
            String diseaseName = "cholera";
            Iterable<Application> applications = applicationDao.findWithin(wktToGeometry(polygon), diseaseName);

            log.debug(diseaseName + " was detected in following places: ");
            applications.forEach(app -> log.debug("x: " + app.getLocation().getX() + " y: " + app.getLocation().getY()));

        };
    }

/*    public static void main(String[] args) {

        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
        ApplicationDao applicationDao = context.getBean(ApplicationDao.class);
        DiseaseDao diseaseDao = context.getBean(DiseaseDao.class);
        RoleDao roleDao = context.getBean(RoleDao.class);
        UserDao userDao = context.getBean(UserDao.class);

        Role adminRole = new Role("admin");
        Role userRole = new Role("user");

        Disease disease = new Disease("cholera");
        Disease disease2 = new Disease("plague");

        User user = new User("John", "Smith", "Skankhunt42", "pass", "skank@gmail.com", true, adminRole);
        User user2 = new User("Will", "Barret", "barret3", "pass", "barret3@gmail.com", true, userRole);

        Application application = createApplication(disease, user, createWktPoint(213.04, 923.23));
        Application application2 = createApplication(disease2, user2, createWktPoint(54.32, 53.26));

        roleDao.save(adminRole);
        roleDao.save(userRole);

        diseaseDao.save(disease);
        diseaseDao.save(disease2);

        userDao.save(user);
        userDao.save(user2);

        applicationDao.save(application);
        applicationDao.save(application2);

        System.out.println(applicationDao.findOne(1L));
        System.out.println(applicationDao.findByUser_Id(1L));

        Iterable<User> adminUsers = userDao.findByRole_Name("admin");
        System.out.println("number of admins: " + Arrays.asList(adminUsers).size());

        String userName = "barret3";
        User someUser = userDao.findByUsername(userName);
        System.out.println("user with following username: " + userName + " has " + someUser.getApplicationsList().size() + " applications");

        String polygon = createWktQuadrangle(100.00, 400.00, 600.00, 700.00, 1100.00, 300.00, 100.00, 1050.00);
        String diseaseName = "cholera";
        Iterable<Application> applications = applicationDao.findWithin(wktToGeometry(polygon), diseaseName);

        System.out.println(diseaseName + " was detected in following places: ");
        applications.forEach(app -> System.out.println("x: " + app.getLocation().getX() + " y: " + app.getLocation().getY()));

        context.close();
    }*/

    private static String createWktQuadrangle(Double x1, Double y1, Double x2, Double y2, Double x3, Double y3, Double x4, Double y4) {
        StringBuilder sb = new StringBuilder("POLYGON");
        sb
                .append("((")
                .append(x1)
                .append(" ")
                .append(y1)
                .append(", ")
                .append(x2)
                .append(" ")
                .append(y2)
                .append(", ")
                .append(x3)
                .append(" ")
                .append(y3)
                .append(", ")
                .append(x4)
                .append(" ")
                .append(y4)
                .append(", ")
                .append(x1)
                .append(" ")
                .append(y1)
                .append("))");
        return sb.toString();
    }

    private static String createWktPoint(Double x, Double y) {
        StringBuilder sb = new StringBuilder("POINT");
        sb
                .append("(")
                .append(String.valueOf(x))
                .append(" ")
                .append(String.valueOf(y))
                .append(")");
        return sb.toString();
    }

    private static Application createApplication(Disease disease, User user, String wktPoint) {
        return new Application(disease, convertToObjectPoint(wktPoint), user, new Date());
    }

    private static Point convertToObjectPoint(String wktPoint) {
        Geometry geom = wktToGeometry(wktPoint);

        if (!geom.getGeometryType().equals("Point")) {
            throw new RuntimeException("Geometry must be a point. Got a " + geom.getGeometryType());
        }
        return (Point) geom;
    }

    private static Geometry wktToGeometry(String wktGeom) {
        WKTReader fromText = new WKTReader();
        Geometry geom = null;
        try {
            geom = fromText.read(wktGeom);
        } catch (ParseException e) {
            throw new RuntimeException("Not a WKT string:" + wktGeom);
        }
        return geom;
    }
}