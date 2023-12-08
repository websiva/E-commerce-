import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ToastrService } from "ngx-toastr"
import { AuthService } from '../services/auth.service';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userdata: any;
  email:any;
  password: string = ''
  error: string = ''
  constructor(private router: Router, private formbuilder: FormBuilder, private toastr: ToastrService,
    private auth: AuthService, private login: RegisterService) {

  }
  ngOnInit(): void {

  }

  loginForm = this.formbuilder.group({
    user: this.formbuilder.control('', Validators.required),
    password: this.formbuilder.control('', Validators.required)
  })

  proceedtologin() {
    debugger
    const email = this.loginForm.get('user')?.value
    this.login.getPasswordUsingEmail(this.email).subscribe(
      (response) => {
        if (response) {
          this.password = "yes";
          alert(this.password)
          this.toastr.success('Login successful...')
          this.router.navigate(['home']);
        } else {
          this.password = '';
          this.toastr.warning('Invalid Credentials');
        }
      }
    );
  }


}
