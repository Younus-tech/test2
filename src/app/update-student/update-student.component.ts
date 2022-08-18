import { formatCurrency } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  id:any
  newObj:any = {};
  displayStudent:any=[];
  displayStudentInfo:any=[]
  exist:boolean=false;
  constructor(private http:HttpClient ,private currId:ActivatedRoute, private stusrvc:StudentService, private router:Router) { }
  
  ngOnInit(){
    this.currId.params.subscribe((id)=>{
      this.id = id['id'];
      console.log(this.id)
    })
    this.stusrvc.getStudentsData().subscribe((getstu)=>{
      this.displayStudent = getstu;
      console.log(this.displayStudent);
      for(var i=0;i<this.displayStudent.length;i++){
        console.log(this.displayStudent[i].id)
        if(parseInt(this.displayStudent[i].id) == this.id){
          this.displayStudentInfo = this.displayStudent[i];
          console.log(this.displayStudentInfo);
          this.exist = true;
        }
      }
    })
  }
  
  // updatestu(form:NgForm){
  //   return ;
  // }
  updatestu(form:NgForm){
    if(form.invalid){
      return ;
    }
    this.newObj = {
      "firstname":form.value.fname,
      "lastname":form.value.lname,
      "email":form.value.email,
    }
    this.http.put(`${'http://localhost:3000/student'}/${this.id}`,this.newObj).subscribe(()=>{
      this.router.navigate(['/']);
    })
  }

  
  

}
