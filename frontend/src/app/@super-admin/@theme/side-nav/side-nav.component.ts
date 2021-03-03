import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  rout;
  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.checkRout()
    });
  }

  checkRout() {
    
    if(this.router.url=='/super-admin/dashboard') {
      document.getElementById('dashboard').setAttribute('src', 'assets/super-admin/side-nav/dashboardc.svg');
      document.getElementById('dashboardText').style.color = '#F27348';
    }
    else if(this.router.url=='/super-admin/user') {
      document.getElementById('user').setAttribute('src', 'assets/super-admin/side-nav/userc.svg');
      document.getElementById('userText').style.color = '#F27348';
    }
    else if(this.router.url=='/super-admin/reports') {
      document.getElementById('reports').setAttribute('src', 'assets/super-admin/side-nav/reportsc.svg');
      document.getElementById('reportsText').style.color = '#F27348';
    }
    else if(this.router.url=='/super-admin/support') {
      document.getElementById('support').setAttribute('src', 'assets/super-admin/side-nav/supportc.svg');
      document.getElementById('supportText').style.color = '#F27348';
    }    
    else if(this.router.url=='/super-admin/configuration') {
      document.getElementById('configuration').setAttribute('src', 'assets/super-admin/side-nav/configurationc.svg');
      document.getElementById('configurationText').style.color = '#F27348';
    }
  }

  routerLink(x) {
    this.router.navigate([`/super-admin/${x}`]);
  }

}
