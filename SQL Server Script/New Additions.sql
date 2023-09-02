use UniversityDb

create table courseReg
( StudentId nvarchar(5) not null,
CourseId nvarchar(5) not null,
DateOfReg date,
Primary Key (StudentID, CourseID),
Foreign Key (StudentID) References Student(StudentID),
Foreign Key (CourseID) References Course(CourseID))

insert into courseReg values ('S01', 'C01', getDate())