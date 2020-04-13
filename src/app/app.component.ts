import { Component } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import { format } from 'url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CommunevAssign';
  toShow=true;

  profile=new FormGroup(
    {
      // name :new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern(/^[a-zA-Z0-9_-]*$/)]),
      fname:new FormControl('',[Validators.required]),
      lname:new FormControl('',[Validators.required]),
      uname:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required]),
      country:new FormControl('',[Validators.required]),
      dob:new FormControl('',[Validators.required]),
}
  );

  verify(event){
    this.toShow=!this.toShow;
    console.log(event);
  }
}
