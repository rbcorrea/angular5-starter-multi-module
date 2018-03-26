import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authentication: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  login(username, password) {
		this.authentication.login(username, password);
	}

}
