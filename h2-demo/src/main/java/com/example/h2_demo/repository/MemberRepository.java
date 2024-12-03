package com.example.h2_demo.repository;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import com.example.h2_demo.model.Member;
import org.springframework.jdbc.core.RowMapper;

@Repository
public class MemberRepository {

    private final JdbcTemplate jdbcTemplate;


    public MemberRepository(JdbcTemplate jdbcTemplate){
        this.jdbcTemplate = jdbcTemplate;
    }

    // Add a new member
    public int addMember(Member member) {
        String sql = "INSERT INTO Member (FirstName, LastName, Email, MembershipType) VALUES (?, ?, ?, ?)";
        int rowsAffected = jdbcTemplate.update(sql, member.getFirstName(), member.getLastName(), member.getEmail(), member.getMembershipType());
        return rowsAffected;
    }

      // Check if a member exists by ID
    public boolean existsById(int memberId) {
        String sql = "SELECT COUNT(*) FROM Member WHERE MemberID = ?";
        Integer count = jdbcTemplate.queryForObject(sql, Integer.class, memberId);
        return count != null && count > 0;
    }

    // Get all members
    public List<Member> getAllMembers() {
        String sql = "SELECT * FROM Member";
        return jdbcTemplate.query(sql, new MemberRowMapper());
}

    // Get a member by ID
    public Member getMemberById(int id) {
        String sql = "SELECT * FROM Member WHERE MemberID = ?";
        return jdbcTemplate.queryForObject(sql, new MemberRowMapper(), id);
    }

    // Update a member
    public void updateMember(Member member) {
        String sql = "UPDATE Member SET FirstName = ?, LastName = ?, Email = ?, MembershipType = ? WHERE MemberID = ?";
        jdbcTemplate.update(sql,
        member.getFirstName(),
        member.getLastName(),
        member.getEmail(),
        member.getMembershipType(),
        member.getMemberId()
        );
    }
    

    // Delete a member
    public int deleteMember(int id) {
        String sql = "DELETE FROM Member WHERE MemberID = ?";
        return jdbcTemplate.update(sql, id);
    }

   
    private static class MemberRowMapper implements RowMapper<Member> {
        @Override
        public Member mapRow(ResultSet rs, int rowNum) throws SQLException {
            Member member = new Member();
            member.setMemberId(rs.getInt("MemberID"));
            member.setFirstName(rs.getString("FirstName"));
            member.setLastName(rs.getString("LastName"));
            member.setEmail(rs.getString("Email"));
            member.setMembershipType(rs.getString("MembershipType"));
            return member;
        }
    }
}
