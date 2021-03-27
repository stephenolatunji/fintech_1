import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/@theme/services/toast.service';
import { AuthService } from '../../@auth/guard/auth.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  constructor(private auth: AuthService, private rout: Router, private toast: ToastService) { }

  ngOnInit(): void {
  }

  logout() {
    this.toast.toast('info', 'Logging out');
    this.auth.logout().subscribe(() => {
      localStorage.setItem('userId', null)
      localStorage.setItem('token_', null)
      this.toast.toast('success', 'Logout Successful');
      this.rout.navigate(['super-admin']);
    });
  }



}
