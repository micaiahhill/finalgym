package com.example.h2_demo.service;

import java.util.List;

import org.springframework.stereotype.Service;
import com.example.h2_demo.model.Member;
import com.example.h2_demo.repository.MemberRepository;

@Service
public class MemberService {
    private final MemberRepository memberRepository;
 
  public MemberService(MemberRepository memberRepository){
    this.memberRepository = memberRepository;
  }
  public boolean addMember(Member member) {
        return memberRepository.addMember(member) > 0;
    }

    // Get all members
    public List<Member> getAllMembers() {
        return memberRepository.getAllMembers();
    }

    // Get a member by ID
    public Member getMemberById(int id) {
        return memberRepository.getMemberById(id);
    }

    // Update a member
    public boolean updateMember(Member member) {
        return memberRepository.updateMember(member) > 0;
    }

    // Delete a member
    public boolean deleteMember(int id) {
        return memberRepository.deleteMember(id) > 0;
    }
}
