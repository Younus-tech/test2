import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentmanagementComponent } from './studentmanagement/studentmanagement.component';
import { HttpClientModule } from '@angular/common/http';
import { AddstudentComponent } from './addstudent/addstudent.component'
import { FormsModule } from '@angular/forms';
import { UpdateStudentComponent } from './update-student/update-student.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentmanagementComponent,
    AddstudentComponent,
    UpdateStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
