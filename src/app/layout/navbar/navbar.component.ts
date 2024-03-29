import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isAuth: boolean;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged(
      (user) => {
        if (user) {
          this.isAuth = true;
        } else {
          this.isAuth = false;
        }
      }
    );
  }

  onSignOut() {
    this.authService.signOutUser();
    this.router.navigate(['home']);
  }

  YearNow(): void {
    var d = new Date();
    var year = d.getFullYear();
    document.getElementById("year").append(year.toString());
  } 
}
