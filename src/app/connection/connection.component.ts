import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterService } from '../services/register.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent implements OnInit {
  f:FormGroup;
  constructor(private service: RegisterService,private fb:FormBuilder){
this.f = this.fb.group(
  {
    Name : [''],
    place : [''],
    courseId : ['']

  }
)
  }

  ngOnInit() {
    
  }
  submit(){
    let inp = {
      name : this.f.controls['Name'].value,
      place : this.f.controls['place'].value,
      courseId : this.f.controls['courseId'].value   }
      this.service.Addregister(inp).subscribe((data:any)=>{
        if(data.success)
        {
          alert("added")
        }
        else{
          alert("not added")
        }
      })
  }

}
