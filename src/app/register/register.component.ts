import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RegisterService } from '../services/register.service';
import { signUp } from '../data-types';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from "ngx-toastr"
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  f: FormGroup;
  constructor(private router: Router, private http: HttpClientModule, private register: RegisterService,
    private formbuilder: FormBuilder, private httP: HttpClient, private toastr: ToastrService,
    private auth: AuthService) { 

      this.f = this.formbuilder.group({
        username: this.formbuilder.control('', Validators.compose([Validators.required, Validators.minLength(5)])),
        name: this.formbuilder.control('', Validators.required),
        email: this.formbuilder.control('', Validators.compose([Validators.required, Validators.email])),
        password: this.formbuilder.control('', Validators.required)
      })
    

    }

  ngOnInit(): void {

  }


  submit() 
  {
    debugger
    let data = {
      username: this.f.controls['username'].value,
      name: this.f.controls['name'].value,
      email_id: this.f.controls['email'].value,
      password: this.f.controls['password'].value
    }
    this.register.Addregister(data).subscribe((res: any) => {
      if (res.success) {
        this.toastr.success("Registration successfully!!");
        this.router.navigate(['login']);
      }
      else {
        alert("Please enter valid data..")
      }
    })
  }
}
