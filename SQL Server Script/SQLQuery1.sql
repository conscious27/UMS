Create Database UniversityDb

use UniversityDb

Create Table Institutional_Information
( UniversityID nvarchar(5) Primary key check (UniversityID like 'U%'),
UniversityName nvarchar(50) not null,
UAddress nvarchar(100) not null,
ContactNumber nvarchar(10) check (ContactNumber like '[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]'),
Website nvarchar(100) check (Website like 'http://%' or Website like 'https://%'))

Create Table Department
( DepartmentID nvarchar(5) Primary key check (DepartmentID like 'D%'),
DepartmentName nvarchar(50) not null,
ContactNumber nvarchar(10) check (ContactNumber like '[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]'))

Create Table Branch
( BranchID nvarchar(5) Primary key check (BranchID like 'B%'),
BranchName nvarchar(50) not null,
DepartmentID nvarchar(5) foreign key references Department(DepartmentID) not null)

Create table Course
( CourseID nvarchar(5) Primary key check (CourseID like 'C%'),
CourseCode nvarchar(7) not null unique,
CourseName nvarchar(50) not null,
Credits int not null,
DepartmentID nvarchar(5) foreign key references Department(DepartmentID) not null,
Syllabus nvarchar(255),
Description nvarchar(200))

Create table Faculty
( FacultyID nvarchar(5) Primary key check (FacultyID like 'F%'),
FirstName nvarchar(50) not null,
LastName nvarchar(50),
Gender nvarchar(10) check (Gender in ('Male', 'Female', 'Other')),
ContactNumber nvarchar(10) check (ContactNumber like '[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]'),
Email nvarchar(255) check (Email like '%_@%._%'),
DepartmentID nvarchar(5) foreign key references Department(DepartmentID) not null,
CourseID nvarchar(5) foreign key references Course(CourseID) not null)


create table Student
( StudentID nvarchar(5) Primary key check (StudentID like 'S%'),
FirstName nvarchar(50) not null,
LastName nvarchar(50),
Gender nvarchar(10) check (Gender in ('Male', 'Female', 'Other')),
ContactNumber nvarchar(10) check (ContactNumber like '[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]'),
Email nvarchar(255) check (Email like '%_@%._%'),
DateOfBirth date not null,
DepartmentID nvarchar(5) foreign key references Department(DepartmentID) not null,
BranchID nvarchar(5) foreign key references Branch(BranchID) not null,
EnrollmentDate date not null,
SAddress nvarchar(100) not null,
Semester int not null)

create table Attendance
( StudentID nvarchar(5) not null,
CourseID nvarchar(5) not null,
DOA date,
Status nvarchar(10) check (Status in ('Present', 'Absent')),
Primary Key (StudentID, CourseID, DOA),
Foreign Key (StudentID) References Student(StudentID),
Foreign Key (CourseID) References Course(CourseID))

create table Examination
( ExamID nvarchar(5) Primary key check (ExamID like 'E%'),
CourseID nvarchar(5) foreign key references Course(CourseID) not null,
DOE date not null,
Duration int not null,
Semester int,
Type nvarchar(10) check (Type in ('Midterm', 'Final', 'Other')))

create table Result
(StudentID nvarchar(5) not null,
ExamID nvarchar(5) not null,
MarksObtained int not null,
Grade nvarchar(1) check (Grade in ('A', 'B', 'C', 'F')),
Foreign Key (StudentID) References Student(StudentID),
Foreign Key (ExamID) References Examination(ExamID))

create table Admin
(AdminID nvarchar(5) primary key check (AdminID like 'A%'),
FirstName nvarchar(50) not null,
LastName nvarchar(50),
Gender nvarchar(10) check (Gender in ('Male', 'Female', 'Other')),
ContactNumber nvarchar(10) check (ContactNumber like '[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]'),
Email nvarchar(255) check (Email like '%_@%._%'))


create table Users
(UserID nvarchar(5) primary key,
Username nvarchar(50) not null,
Password nvarchar(50) not null,
Role nvarchar(20) check (Role in ('Student', 'Faculty', 'Admin')))