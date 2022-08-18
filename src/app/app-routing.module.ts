import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { StudentmanagementComponent } from './studentmanagement/studentmanagement.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

const routes: Routes = [
  {path:'',component:StudentmanagementComponent},
  {path:'add-student',component:AddstudentComponent},
  {path:'update-student/:id',component:UpdateStudentComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
