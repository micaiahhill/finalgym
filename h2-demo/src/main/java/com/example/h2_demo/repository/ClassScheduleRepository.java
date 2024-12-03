package com.example.h2_demo.repository;
import java.util.List;
import java.util.Map;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import com.example.h2_demo.model.ClassScheduleDTO;

@Repository
public class ClassScheduleRepository {
    private final JdbcTemplate jdbcTemplate;

    public ClassScheduleRepository(JdbcTemplate jdbcTemplate){
        this.jdbcTemplate = jdbcTemplate;
    }
      
public List<Map<String, Object>> findClassEnrollmentDetails(String classType) {
    String sql = "SELECT cs.ClassID, cs.ClassType, cs.Location, cs.ClassTime, cs.ClassDay, " +
                 "i.FirstName AS InstructorFirstName, i.LastName AS InstructorLastName, " +
                 "m.FirstName AS MemberFirstName, m.LastName AS MemberLastName, m.Email " +
                 "FROM Class_Schedule cs " +
                 "JOIN Instructor i ON cs.InstructorID = i.InstructorID " +
                 "JOIN Class_Attendance ca ON cs.ClassID = ca.ClassID " +
                 "JOIN Member m ON ca.MemberID = m.MemberID " +
                 "WHERE cs.ClassType = ?";

    return jdbcTemplate.queryForList(sql, classType);
}

    public List<ClassScheduleDTO> findAllClasses() {
        String sql = "SELECT cs.ClassID, cs.ClassType, cs.Location, cs.ClassTime, cs.ClassDay, " +
                     "i.FirstName AS InstructorFirstName, i.LastName AS InstructorLastName " +
                     "FROM Class_Schedule cs " +
                     "JOIN Instructor i ON cs.InstructorID = i.InstructorID";

        return jdbcTemplate.query(sql, (rs, rowNum) -> new ClassScheduleDTO(
                rs.getInt("ClassID"),
                rs.getString("ClassType"),
                rs.getString("Location"),
                rs.getTime("ClassTime"),
                rs.getString("ClassDay"),
                rs.getString("InstructorFirstName"),
                rs.getString("InstructorLastName")
        ));
    }
}