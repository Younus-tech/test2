import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentmanagement',
  templateUrl: './studentmanagement.component.html',
  styleUrls: ['./studentmanagement.component.css']
})
export class StudentmanagementComponent implements OnInit {
  displayData:any=[];
  constructor(private http:HttpClient, private stusrvc:StudentService, private router:Router) { }

  ngOnInit() {
    this.getData();
  }
  getData(){
    this.stusrvc.getStudentsData().subscribe((stu)=>{
      this.displayData = stu;
      console.log(this.displayData);
    })
  }
  deleteStu(id:any){
    this.http.delete(`${'http://localhost:3000/student'}/${id}`).subscribe(()=>{
      this.getData();
    })
  }

}
