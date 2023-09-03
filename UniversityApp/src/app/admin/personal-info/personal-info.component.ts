import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AdminInfoService } from 'src/app/shared/admin-info.service';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';
import { AdminInfo } from 'src/app/shared/admin-info.model';

@Component({
  selector: 'app-admin-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class AdminPersonalInfoComponent implements OnInit {
  adminId: any;

  constructor(public adminService: AdminInfoService, private router: Router,
    private cdRef: ChangeDetectorRef) {}

  ngOnInit() {
    const token: any = localStorage.getItem('authToken');

    try {
      const tokenPayload: any = jwtDecode(token);
      console.log(tokenPayload.AdminId)
      this.adminId = tokenPayload.AdminId;
      // Call the method to fetch admin data
      this.fetchAdminData(this.adminId);
    } catch (error) {
      localStorage.clear();
      this.router.navigate(['/']);
    }
  }

  // personal-info.component.ts
  fetchAdminData(id) {
  try {
    this.adminService.getAdminInfoById(id).subscribe(
      (data) => {
        this.adminService.AdminData = data as AdminInfo; // Assuming AdminInfo is the type
        console.log(this.adminService.AdminData.AdminId);
        this.cdRef.detectChanges();
      },
      (error) => {
        console.error('Error fetching admin data:', error);
      }
    );
  } catch (error) {
    console.error('Error fetching admin data:', error);
  }
}

}
