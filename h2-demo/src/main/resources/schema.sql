CREATE TABLE Member (
    MemberID INT AUTO_INCREMENT PRIMARY KEY,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    Email VARCHAR(100) UNIQUE NOT NULL,
    MembershipType VARCHAR(50),
    PhoneNumber VARCHAR(15)
);

CREATE TABLE Instructor (
    InstructorID INT AUTO_INCREMENT PRIMARY KEY,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    Certification VARCHAR(100),
    ContactInfo VARCHAR(100)
);

--- Fall 2024 for class offers and Spring 2025 class offers (class ID, class type , location, instrucor )
CREATE TABLE Class_Schedule (
    ClassID INT AUTO_INCREMENT PRIMARY KEY, 
    ClassType VARCHAR(50) NOT NULL, --Class Type
    Location VARCHAR(100), 
    InstructorID INT,
    Semester VARCHAR(20),
    ClassTime TIME NOT NULL,
    ClassDay VARCHAR(20) NOT NULL,
    FOREIGN KEY (InstructorID) REFERENCES Instructor(InstructorID)
);

CREATE TABLE Class_Attendance (
    AttendanceID INT AUTO_INCREMENT PRIMARY KEY,
    MemberID INT NOT NULL,
    ClassID INT NOT NULL,
    AttendanceDate DATE NOT NULL,
    FOREIGN KEY (MemberID) REFERENCES Member(MemberID),
    FOREIGN KEY (ClassID) REFERENCES Class_Schedule(ClassID)
);

CREATE TABLE Payment (
    PaymentID INT AUTO_INCREMENT PRIMARY KEY,
    MemberID INT NOT NULL,
    PaymentDate DATE NOT NULL,
    Amount DECIMAL(10, 2) NOT NULL,
    PaymentType VARCHAR(50), 
    MembershipType VARCHAR(50), 
    FOREIGN KEY (MemberID) REFERENCES Member(MemberID)
);