package com.example.h2_demo.controller;


import org.springframework.web.bind.annotation.*;
import com.example.h2_demo.model.Member;
import com.example.h2_demo.service.MemberService;

import java.util.List;

@RestController
@RequestMapping("/api/members")
public class MemberController {

    private final MemberService memberService;

    public MemberController(MemberService memberService) {
        this.memberService = memberService;
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
    
}
