import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Assignment1';
email : any;
name:any;
interMarks:any;
tenthMarks:any;
CGPA:any;
whatsappNumber:any;
gender:any;
Program:any;
clgemail:any;
timeslot:any;



  formValue:any;
  onSubmit(form: any) {
    this.formValue = form.value;
    console.log(form.value);
}
}