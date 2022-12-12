import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SignIn } from '../../models/sigin';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user!: SignIn;
  myform: FormGroup;
  userName: FormControl;
  password: FormControl;
  errMsg: string | undefined;
  flag: boolean = false;

  constructor(builder: FormBuilder, private authService: AuthenticationService, private router: Router) {
    this.userName = builder.control('', [Validators.required, Validators.minLength(2)]);
    this.password = builder.control('', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]);
    this.myform = builder.group({
      userName: this.userName,
      password: this.password
    });
  }

  ngOnInit(): void {
  }

  signin() {
    const userName = this.userName.value;
    const password = this.password.value;

    const observable: Observable<string> = this.authService.login(userName, password);
    observable.subscribe({
      next: (token: string) => {
        console.log("inside observable");
        console.log("received token", token);
        this.errMsg = undefined;
        this.authService.saveToken(userName, token);
        this.router.navigate(['/home']);
      },
      error: (err: Error) => {
        this.errMsg = err.message;
        this.flag = true;
        setInterval(() => {
          this.flag = false;
        }, 3000);
      }
    });
    console.log("inside onFormSubmit username=" + userName + " ,password=" + password);

  }

  goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }

}

