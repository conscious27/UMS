using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace UniversityAPI.Models;

public partial class UniversityDbContext : DbContext
{
    public UniversityDbContext()
    {
    }

    public UniversityDbContext(DbContextOptions<UniversityDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Admin> Admins { get; set; }

    public virtual DbSet<Attendance> Attendances { get; set; }

    public virtual DbSet<Branch> Branches { get; set; }

    public virtual DbSet<Course> Courses { get; set; }

    public virtual DbSet<Department> Departments { get; set; }

    public virtual DbSet<Examination> Examinations { get; set; }

    public virtual DbSet<Faculty> Faculties { get; set; }

    public virtual DbSet<InstitutionalInformation> InstitutionalInformations { get; set; }

    public virtual DbSet<Result> Results { get; set; }

    public virtual DbSet<Student> Students { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("server=BASUDEVSAHU;database=UniversityDb;trusted_connection=true;TrustServerCertificate=True");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Admin>(entity =>
        {
            entity.HasKey(e => e.AdminId).HasName("PK__Admin__719FE4E83C0F236E");

            entity.ToTable("Admin");

            entity.Property(e => e.AdminId)
                .HasMaxLength(5)
                .HasColumnName("AdminID");
            entity.Property(e => e.ContactNumber).HasMaxLength(10);
            entity.Property(e => e.Email).HasMaxLength(255);
            entity.Property(e => e.FirstName).HasMaxLength(50);
            entity.Property(e => e.Gender).HasMaxLength(10);
            entity.Property(e => e.LastName).HasMaxLength(50);
        });

        modelBuilder.Entity<Attendance>(entity =>
        {
            entity.HasKey(e => new { e.StudentId, e.CourseId, e.Doa }).HasName("PK__Attendan__AA97C8E1E046284F");

            entity.ToTable("Attendance");

            entity.Property(e => e.StudentId)
                .HasMaxLength(5)
                .HasColumnName("StudentID");
            entity.Property(e => e.CourseId)
                .HasMaxLength(5)
                .HasColumnName("CourseID");
            entity.Property(e => e.Doa)
                .HasColumnType("date")
                .HasColumnName("DOA");
            entity.Property(e => e.Status).HasMaxLength(10);

            entity.HasOne(d => d.Course).WithMany(p => p.Attendances)
                .HasForeignKey(d => d.CourseId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Attendanc__Cours__5AEE82B9");

            entity.HasOne(d => d.Student).WithMany(p => p.Attendances)
                .HasForeignKey(d => d.StudentId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Attendanc__Stude__59FA5E80");
        });

        modelBuilder.Entity<Branch>(entity =>
        {
            entity.HasKey(e => e.BranchId).HasName("PK__Branch__A1682FA5E0A90105");

            entity.ToTable("Branch");

            entity.Property(e => e.BranchId)
                .HasMaxLength(5)
                .HasColumnName("BranchID");
            entity.Property(e => e.BranchName).HasMaxLength(50);
            entity.Property(e => e.DepartmentId)
                .HasMaxLength(5)
                .HasColumnName("DepartmentID");

            entity.HasOne(d => d.Department).WithMany(p => p.Branches)
                .HasForeignKey(d => d.DepartmentId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Branch__Departme__4222D4EF");
        });

        modelBuilder.Entity<Course>(entity =>
        {
            entity.HasKey(e => e.CourseId).HasName("PK__Course__C92D7187AB278582");

            entity.ToTable("Course");

            entity.HasIndex(e => e.CourseCode, "UQ__Course__FC00E0009037C945").IsUnique();

            entity.Property(e => e.CourseId)
                .HasMaxLength(5)
                .HasColumnName("CourseID");
            entity.Property(e => e.CourseCode).HasMaxLength(7);
            entity.Property(e => e.CourseName).HasMaxLength(50);
            entity.Property(e => e.DepartmentId)
                .HasMaxLength(5)
                .HasColumnName("DepartmentID");
            entity.Property(e => e.Description).HasMaxLength(200);
            entity.Property(e => e.Syllabus).HasMaxLength(255);

            entity.HasOne(d => d.Department).WithMany(p => p.Courses)
                .HasForeignKey(d => d.DepartmentId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Course__Departme__46E78A0C");
        });

        modelBuilder.Entity<Department>(entity =>
        {
            entity.HasKey(e => e.DepartmentId).HasName("PK__Departme__B2079BCDCA1F87AB");

            entity.ToTable("Department");

            entity.Property(e => e.DepartmentId)
                .HasMaxLength(5)
                .HasColumnName("DepartmentID");
            entity.Property(e => e.ContactNumber).HasMaxLength(10);
            entity.Property(e => e.DepartmentName).HasMaxLength(50);
        });

        modelBuilder.Entity<Examination>(entity =>
        {
            entity.HasKey(e => e.ExamId).HasName("PK__Examinat__297521A712562030");

            entity.ToTable("Examination");

            entity.Property(e => e.ExamId)
                .HasMaxLength(5)
                .HasColumnName("ExamID");
            entity.Property(e => e.CourseId)
                .HasMaxLength(5)
                .HasColumnName("CourseID");
            entity.Property(e => e.Doe)
                .HasColumnType("date")
                .HasColumnName("DOE");
            entity.Property(e => e.Type).HasMaxLength(10);

            entity.HasOne(d => d.Course).WithMany(p => p.Examinations)
                .HasForeignKey(d => d.CourseId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Examinati__Cours__6383C8BA");
        });

        modelBuilder.Entity<Faculty>(entity =>
        {
            entity.HasKey(e => e.FacultyId).HasName("PK__Faculty__306F636E6D997BE7");

            entity.ToTable("Faculty");

            entity.Property(e => e.FacultyId)
                .HasMaxLength(5)
                .HasColumnName("FacultyID");
            entity.Property(e => e.ContactNumber).HasMaxLength(10);
            entity.Property(e => e.CourseId)
                .HasMaxLength(5)
                .HasColumnName("CourseID");
            entity.Property(e => e.DepartmentId)
                .HasMaxLength(5)
                .HasColumnName("DepartmentID");
            entity.Property(e => e.Email).HasMaxLength(255);
            entity.Property(e => e.FirstName).HasMaxLength(50);
            entity.Property(e => e.Gender).HasMaxLength(10);
            entity.Property(e => e.LastName).HasMaxLength(50);

            entity.HasOne(d => d.Course).WithMany(p => p.Faculties)
                .HasForeignKey(d => d.CourseId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Faculty__CourseI__4E88ABD4");

            entity.HasOne(d => d.Department).WithMany(p => p.Faculties)
                .HasForeignKey(d => d.DepartmentId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Faculty__Departm__4D94879B");
        });

        modelBuilder.Entity<InstitutionalInformation>(entity =>
        {
            entity.HasKey(e => e.UniversityId).HasName("PK__Institut__9F19E19C847F3ECE");

            entity.ToTable("Institutional_Information");

            entity.Property(e => e.UniversityId)
                .HasMaxLength(5)
                .HasColumnName("UniversityID");
            entity.Property(e => e.ContactNumber).HasMaxLength(10);
            entity.Property(e => e.Uaddress)
                .HasMaxLength(100)
                .HasColumnName("UAddress");
            entity.Property(e => e.UniversityName).HasMaxLength(50);
            entity.Property(e => e.Website).HasMaxLength(100);
        });

        modelBuilder.Entity<Result>(entity =>
        {
            entity.HasKey(e => new { e.StudentId, e.ExamId }).HasName("PK__Result__50527863BE02D8D5");

            entity.ToTable("Result");

            entity.Property(e => e.StudentId)
                .HasMaxLength(5)
                .HasColumnName("StudentID");
            entity.Property(e => e.ExamId)
                .HasMaxLength(5)
                .HasColumnName("ExamID");
            entity.Property(e => e.Grade).HasMaxLength(1);

            entity.HasOne(d => d.Exam).WithMany(p => p.Results)
                .HasForeignKey(d => d.ExamId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Result__ExamID__04E4BC85");

            entity.HasOne(d => d.Student).WithMany(p => p.Results)
                .HasForeignKey(d => d.StudentId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Result__StudentI__03F0984C");
        });

        modelBuilder.Entity<Student>(entity =>
        {
            entity.HasKey(e => e.StudentId).HasName("PK__Student__32C52A79CABF0378");

            entity.ToTable("Student");

            entity.Property(e => e.StudentId)
                .HasMaxLength(5)
                .HasColumnName("StudentID");
            entity.Property(e => e.BranchId)
                .HasMaxLength(5)
                .HasColumnName("BranchID");
            entity.Property(e => e.ContactNumber).HasMaxLength(10);
            entity.Property(e => e.DateOfBirth).HasColumnType("date");
            entity.Property(e => e.DepartmentId)
                .HasMaxLength(5)
                .HasColumnName("DepartmentID");
            entity.Property(e => e.Email).HasMaxLength(255);
            entity.Property(e => e.EnrollmentDate).HasColumnType("date");
            entity.Property(e => e.FirstName).HasMaxLength(50);
            entity.Property(e => e.Gender).HasMaxLength(10);
            entity.Property(e => e.LastName).HasMaxLength(50);
            entity.Property(e => e.Saddress)
                .HasMaxLength(100)
                .HasColumnName("SAddress");

            entity.HasOne(d => d.Branch).WithMany(p => p.Students)
                .HasForeignKey(d => d.BranchId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Student__BranchI__5629CD9C");

            entity.HasOne(d => d.Department).WithMany(p => p.Students)
                .HasForeignKey(d => d.DepartmentId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Student__Departm__5535A963");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.UserId).HasName("PK__Users__1788CCAC1EE7FF9F");

            entity.Property(e => e.UserId)
                .HasMaxLength(5)
                .HasColumnName("UserID");
            entity.Property(e => e.Password).HasMaxLength(50);
            entity.Property(e => e.Role).HasMaxLength(20);
            entity.Property(e => e.Username).HasMaxLength(50);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
