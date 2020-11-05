import { Component, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f',{static:true}) form:NgForm;
  user={username:'',
email:'',
secret:'',
answer:'',
gender:''}
  pett='pet';
  secret='';
  genders=['male','female'];
   sname;
   sub=false;
  suggestUserName(f) {
     this.sname= 'Superuser';
  }
  onSubmit(f:NgForm)
  {
    console.log(f);
    this.sub=true;
    this.user.username=f.value.userdata.username;
    this.user.email=f.value.userdata.email;
    this.user.secret=f.value.secret;
    this.user.answer=f.value.QuestionAnswer;
    this.user.gender=f.value.gender;

  }
  
}
