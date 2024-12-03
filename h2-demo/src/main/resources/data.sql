--INSERT INTO Employee (FirstName, LastName, Department, Salary)
--VALUES ('John', 'Doe', 'Sales', 50000.00);

-- Insert Members
INSERT INTO Member ( FirstName, LastName, Email, MembershipType) 
VALUES 
( 'Alice', 'Brown', 'alice.brown@example.com', 'Gold'),
( 'James', 'Jones', 'jj1234@gmail.com', 'Gold'),
( 'Mary', 'Mcmillian', 'MaryMC56@yahoo.com', 'Silver'),
( 'Robert', 'Hill', 'HillR@yahoo.com', 'Bronze'),
( 'Jennifer', 'Gatson', 'JGatson78@gmail.com', 'Bronze'),
( 'David', 'Henson', 'Davidhenson@yahoo.com', 'Silver'),
( 'Jessica', 'Williams', 'JessWilliams1153@aos.com', 'Gold'),
( 'Daniel', 'Baker', 'BakerDan@gmail.com', 'Silver'),
( 'Karen', 'Jackson', 'Kar3nJacks0n@yahoo.com', 'Bronze'),
( 'Mark', 'Acker', 'Macker@gmail.com', 'Gold'),
( 'Laura', 'Clark', 'LauraClark@gmail.com', 'Silver');

-- Insert Instructors
INSERT INTO Instructor (InstructorID, FirstName, LastName, Certification, ContactInfo) 
VALUES 
(1, 'John', 'Smith', 'Yoga Certification', 'john.smith@example.com'),
(2, 'Ashley', 'Jones', 'Yoga Certification', 'jones.ashley@yahoo.com'),
(3, 'Becky', 'Ann', 'Pilates Certification', 'Becky123@gmail.com'),
(4, 'Anna', 'Scott', 'Boxing Certification', 'anna@aos.com'),
(5, 'Amiracle', 'Harvey', 'Pilates Certification', 'Aharvey@yahoo.com'),
(6, 'Tyler', 'Acre', 'Yoga Certification', 'Tyacre@gmail.com'),
(7, 'Micaiah', 'Edis', 'Boxing Certification', 'EdisM@yahoo.com'),
(8, 'William', 'Jack', 'Yoga Certification', 'jack_william@gmail.com'),
(9, 'Brandon', 'Saban', 'Boxing Certification', 'BranSab@yahoo.com'),
(10, 'Gabe', 'Webb', 'Pilates Certification', 'Gawebb@yahoo.com'),
(11, 'Ashton', 'Zee', 'Yoga Certification', 'Ashzee@yahoo.com');

-- Insert Class Schedule
-- Yoga teachers are 1,2,6,8,11
-- Pilates teachers are 3,5,10
-- Boxing teachers are 4,7,9
INSERT INTO Class_Schedule (ClassID, ClassType, Location, InstructorID, Semester,ClassTime,ClassDay) 
VALUES 
(1, 'Yoga', 'Studio 1', 1, 'Fall 2024', '10:00:00', 'Monday'),
(2, 'Pilates', 'Studio 2', 3, 'Spring 2025', '14:00:00', 'Tuesday'),
(3, 'Boxing', 'Studio 3', 4, 'Fall 2024', '16:00:00', 'Wednesday'),
(4, 'Yoga', 'Studio 1', 2, 'Spring 2025', '09:00:00', 'Thursday'),
(5, 'Pilates', 'Studio 2', 5, 'Fall 2024', '13:00:00', 'Friday'),
(6, 'Boxing', 'Studio 3', 7, 'Spring 2025', '15:00:00', 'Saturday'),
(7, 'Yoga', 'Studio 1', 6, 'Fall 2024', '11:00:00', 'Sunday'),
(8, 'Pilates', 'Studio 2', 10, 'Spring 2025', '12:00:00', 'Monday'),
(9, 'Boxing', 'Studio 3', 9, 'Fall 2024', '17:00:00', 'Tuesday'),
(10, 'Yoga', 'Studio 1', 8, 'Spring 2025', '08:00:00', 'Wednesday'),
(11, 'Yoga', 'Studio 1', 11, 'Fall 2024', '10:00:00', 'Sunday'),
(12, 'Boxing', 'Studio 3', 4, 'Spring 2025', '09:00:00', 'Saturday'),
(13, 'Pilates', 'Studio 2', 3, 'Fall 2024', '11:00:00', 'Friday'),
(14, 'Yoga', 'Studio 1', 1, 'Spring 2025', '08:00:00', 'Thursday'),
(15, 'Boxing', 'Studio 3', 7, 'Fall 2024', '13:00:00', 'Wednesday'),
(16, 'Pilates', 'Studio 2', 5, 'Spring 2025', '07:00:00', 'Tuesday'),
(17, 'Yoga', 'Studio 1', 2, 'Fall 2024', '14:00:00', 'Monday'),
(18, 'Boxing', 'Studio 3', 9, 'Spring 2025', '07:30:00', 'Sunday'),
(19, 'Pilates', 'Studio 2', 10, 'Fall 2024', '15:00:00', 'Saturday'),
(20, 'Yoga', 'Studio 1', 6, 'Spring 2025', '10:00:00', 'Friday');

-- Insert Class Attendance
INSERT INTO Class_Attendance (MemberID, ClassID, AttendanceDate) 
VALUES 
(1, 1, '2024-10-01'),
(2, 2, '2025-01-15'),
(3, 3, '2025-02-25'),
(4, 4, '2025-03-06'),
(5, 5, '2025-04-19'),
(6, 6, '2025-05-31'),
(7, 7, '2024-12-01'),
(8, 8, '2024-11-05'),
(9, 9, '2024-10-18'),
(10, 10, '2024-09-23');

-- Insert Payments
INSERT INTO Payment (MemberID, PaymentDate, Amount, PaymentType, MembershipType) 
VALUES 
(1, '2024-01-15', 50.00, 'Credit Card', 'Gold'),
(2, '2024-01-01', 60.00, 'Cash', 'Silver'),
(3, '2024-02-15', 25.00, 'Venmo', 'Bronze'),
(4, '2024-02-01', 25.00, 'Credit Card', 'Bronze'),
(5, '2024-10-15', 60.00, 'Cash', 'Silver'),
(6, '2024-11-01', 75.00, 'Venmo', 'Gold'),
(7, '2024-06-15', 60.00, 'Credit Card', 'Silver'),
(8, '2024-09-01', 25.00, 'Cash', 'Bronze'),
(9, '2024-12-15', 75.00, 'Venmo', 'Gold'),
(10, '2024-03-01', 60.00, 'Credit Card', 'Silver');
