insert into Institutional_Information values
( 'U01', 'AdvanceLink Institute', 'Laddakh', '0120022201', 'https://advlink.edu/contact_us.aspx')

insert into Department values ( 'D01', 'Engineering', '0120022202')
insert into Department values ( 'D02', 'Commerce', '0120022203')

insert into Branch values ('B01', 'B.Tech CSE', 'D01')
insert into Branch values ('B02', 'B.Tech MAE', 'D01')
insert into Branch values ('B03', 'B.Tech Civil', 'D01')
insert into Branch values ('B04', 'BBA', 'D02')
insert into Branch values ('B05', 'BCOM', 'D02')

insert into Course (CourseID, CourseCode, CourseName, Credits, DepartmentID, Description)
Values ('C01', 'CS101', 'Programming Fundamental', 4, 'D01', 'Introduction to Programming and Algorithms'),
('C02', 'MAE101', 'Engineering Mechanics', 3, 'D01', 'Study of Mechanics in Engineering'),
('C03', 'CIV101', 'Civil Engineering Material', 3, 'D01', 'Materials Used in Civil Engineering'),
('C04', 'COM101', 'Introduction to Commerce', 3, 'D02', 'Basic Introduction to Commerce Concept'),
('C05', 'BBA101', 'Principal of Business Management', 4, 'D01', 'Introduction to Business Management')

insert into Faculty values ('F01', 'John', 'Doe', 'Male', '9876543210', 'john.doe@advlink.com', 'D01', 'C01')
insert into Faculty values ('F02', 'Joe', 'Smith', 'Male', '1234567890', 'Joe.smith@advlink.com', 'D01', 'C02')
insert into Faculty values ('F03', 'Amit', 'Kumar', 'Male', '8765432109', 'Amit.kumar@advlink.com', 'D01', 'C03')
insert into Faculty values ('F04', 'Sneha', 'Verma', 'Female', '2345678901', 'Sneha.verma@advlink.com', 'D02', 'C04')
insert into Faculty values ('F05', 'Rahul', 'Sharma', 'Male', '6756483921', 'Rahul.sharma@advlink.com', 'D02', 'C05')

insert into Student values ('S01', 'Raj', 'Kumar', 'Male', '9876545456',   'raj.kumar@advlink.com','12/12/2001',
'D01', 'B01', '01/08/2022', '123 Main St, Ranchi', 3)
insert into Student values ('S02', 'Priya', 'Sharma', 'Female',  '8767832145', 'priya.sharma@advlink.com','2002-05-10',
'D01', 'B02', '2022-08-01', '456 Elm St, Raipur', 3)
insert into Student values ('S03', 'Amit', 'Singh', 'Male', '7656432121', 'amit.singh@advlink.com', '2001-01-20',
'D01', 'B03', '2023-08-01', '789 Oak St, Puri', 1)
insert into Student values ('S04', 'Anjali', 'Verma', 'Female',  '7656767898', 'anjali.verma@advlink.com', '2002-08-25',
'D02', 'B04', '2023-08-01', '101 Pine St, Pune', 1)
insert into Student values ('S05', 'Vikas', 'Gupta', 'Male',  '6566765432', 'vikas.gupta@advlink.com','1999-01-15',
'D02', 'B05', '2021-07-01', '123 Main St, Ranchi', 5)

insert into Attendance values ('S01', 'C01', '2023-08-05', 'Present')
insert into Attendance values ('S01', 'C02', '2023-08-05', 'Present')
insert into Attendance values ('S01', 'C03', '2023-08-05', 'Present')
insert into Attendance values ('S02', 'C01', '2023-08-05', 'Absent')
insert into Attendance values ('S02', 'C02', '2023-08-05', 'Present')
insert into Attendance values ('S02', 'C03', '2023-08-05', 'Present')
insert into Attendance values ('S03', 'C01', '2023-08-05', 'Absent')
insert into Attendance values ('S03', 'C02', '2023-08-05', 'Absent')
insert into Attendance values ('S03', 'C03', '2023-08-05', 'Present')
insert into Attendance values ('S04', 'C04', '2023-08-05', 'Present')
insert into Attendance values ('S04', 'C05', '2023-08-05', 'Absent')
insert into Attendance values ('S05', 'C04', '2023-08-05', 'Absent')
insert into Attendance values ('S05', 'C05', '2023-08-05', 'Present')

insert into Admin values('A01', 'Chaitanya','Pradhan', 'Male', '7345654321', 'cp@advlink.com')

insert into Users Values('A01', 'chaitanya', 'ckp@27', 'Admin')
insert into Users Values('S01', 'raj', 'raj@rnc', 'Student')
insert into Users Values('F01', 'john', 'john@2001', 'Faculty')