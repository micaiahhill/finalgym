package com.example.h2_demo.service;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.example.h2_demo.model.ClassScheduleDTO;
import com.example.h2_demo.model.Member;
import com.example.h2_demo.repository.ClassScheduleRepository;
import com.example.h2_demo.repository.MemberRepository;

@Service
public class MemberService {
    private final MemberRepository memberRepository;
    private final ClassScheduleRepository classScheduleRepository;
 


  public MemberService(MemberRepository memberRepository, ClassScheduleRepository classScheduleRepository){
    this.memberRepository = memberRepository;
    this.classScheduleRepository = classScheduleRepository;
  }

  public List<ClassScheduleDTO> getAllClasses() {
    return classScheduleRepository.findAllClasses();
}
  public boolean addMember(Member member) {
    try {
        // Try to add the member and return true if successful
        return memberRepository.addMember(member) > 0;
    } catch (Exception e) {
        // Handle exception
        e.printStackTrace();
        return false;
    }
}
   // Retrieve class enrollment details by class name
  // public List<Map<String, Object>> getClassEnrollmentDetails(String classType) {
   // return classScheduleRepository.findClassEnrollmentCount(classType);
//}
public List<Map<String, Object>> getClassEnrollmentDetails(String classType) {
    return classScheduleRepository.findClassEnrollmentDetails(classType);
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
       if(memberRepository.existsById(member.getMemberId())){
        memberRepository.updateMember(member);
        return true;
       }
       return false; // if member dosent exists
    }

    // Delete a member
    public boolean deleteMember(int id) {
        return memberRepository.deleteMember(id) > 0;
    }
}
