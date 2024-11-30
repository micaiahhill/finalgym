package com.example.h2_demo.controller;


import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;
import com.example.h2_demo.model.Member;
import com.example.h2_demo.service.MemberService;

import java.util.List;
import java.util.Map;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/api/members")
public class MemberController {

    private final MemberService memberService;
    private final JdbcTemplate jdbcTemplate;


    public MemberController(MemberService memberService, JdbcTemplate jdbcTemplate) {
        this.memberService = memberService;
        this.jdbcTemplate = jdbcTemplate;

    }

    // Add a new member
    @PostMapping
    public String addMember(@RequestBody Member member) {
        return memberService.addMember(member) ? "Member added successfully!" : "Failed to add member.";
    }

    // Get all members
    @GetMapping
    public List<Member> getAllMembers() {
        return memberService.getAllMembers();
    }

    // Get member by ID
    @GetMapping("/{id}")
    public Member getMemberById(@PathVariable int id) {
        return memberService.getMemberById(id);
    }

    // Update a member
    @PutMapping("/{id}")
    public String updateMember(@PathVariable int id, @RequestBody Member member) {
        member.setMemberId(id);
        return memberService.updateMember(member) ? "Member updated successfully!" : "Failed to update member.";
    }

    // Delete a member
    @DeleteMapping("/{id}")
    public String deleteMember(@PathVariable int id) {
        return memberService.deleteMember(id) ? "Member deleted successfully!" : "Failed to delete member.";
    }

// Get a custom query 

@PostMapping("/query")
public List<Map<String,Object>> executeQuery(@RequestBody String query) {
    
    
    return jdbcTemplate.queryForList(query);
}

    
}
