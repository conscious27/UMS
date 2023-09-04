import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { FacultyAddOn } from 'src/app/shared/faculty-add-on';
import { FacultyInfoService } from 'src/app/shared/faculty-info.service';

@Component({
  selector: 'app-faculty-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class FacultyPersonalInfoComponent {
  facultyId: any;

  constructor(public facultyService: FacultyInfoService, private router: Router,
    private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    const token: any = localStorage.getItem('authToken');

    try {
      const tokenPayload: any = jwtDecode(token);
      console.log(tokenPayload.AdminId)
      this.facultyId = tokenPayload.AdminId;
      // Call the method to fetch admin data
      this.facultyService.getFacultysAddOnById(this.facultyId);
    } catch (error) {
      localStorage.clear();
      this.router.navigate(['/']);
    }
  }

  // personal-info.component.ts
  // fetchFacultyData(id) {
  //   try {
  //     this.facultyService.getFacultysAddOnById(id).subscribe(
  //       (data) => {
  //         this.facultyService.FacultyAddOnData = data as FacultyAddOn; // Assuming AdminInfo is the type
  //         console.log(this.facultyService.FacultyData.FacultyId);
  //         this.cdRef.detectChanges();
  //       },
  //       (error) => {
  //         console.error('Error fetching student data:', error);
  //       }
  //     );
  //   } catch (error) {
  //     console.error('Error fetching student data:', error);
  //   }
  // }
}
