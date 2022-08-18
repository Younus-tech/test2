import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
  obj:any={};
  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
  }
  addstu(form:NgForm){
    if(form.invalid){
      return ;
    }
    this.obj = {
      "firstname":form.value.fname,
      "lastname":form.value.lname,
      "email":form.value.email,
    }
    this.http.post('http://localhost:3000/student',this.obj).subscribe(()=>{
      this.router.navigate(['/']);
    });
    
  }

}
