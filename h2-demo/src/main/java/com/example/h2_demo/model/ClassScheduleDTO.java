package com.example.h2_demo.model;

import java.sql.Time;

public class ClassScheduleDTO {
     private int classId;
    private String classType;
    private String location;
    private Time classTime;
    private String classDay;
    private String instructorFirstName;
    private String instructorLastName;

    // Constructor
    public ClassScheduleDTO(int classId, String classType, String location, Time classTime, String classDay, String instructorFirstName, String instructorLastName) {
        this.classId = classId;
        this.classType = classType;
        this.location = location;
        this.classTime = classTime;
        this.classDay = classDay;
        this.instructorFirstName = instructorFirstName;
        this.instructorLastName = instructorLastName;
    }

    // Getters and Setters
    public int getClassId() {
        return classId;
    }

    public void setClassId(int classId) {
        this.classId = classId;
    }

    public String getClassType() {
        return classType;
    }

    public void setClassType(String classType) {
        this.classType = classType;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Time getClassTime() {
        return classTime;
    }

    public void setClassTime(Time classTime) {
        this.classTime = classTime;
    }

    public String getClassDay() {
        return classDay;
    }

    public void setClassDay(String classDay) {
        this.classDay = classDay;
    }

    public String getInstructorFirstName() {
        return instructorFirstName;
    }

    public void setInstructorFirstName(String instructorFirstName) {
        this.instructorFirstName = instructorFirstName;
    }

    public String getInstructorLastName() {
        return instructorLastName;
    }

    public void setInstructorLastName(String instructorLastName) {
        this.instructorLastName = instructorLastName;
    }
    
}
