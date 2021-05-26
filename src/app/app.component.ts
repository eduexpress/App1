import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root-sample',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  loginForm = new FormGroup({
    email: new FormControl(
      '',[
        Validators.email,
        Validators.required
        ]
    ),
    password: new FormControl(
      '',[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10)
      ]
    )
  });

  login(){
    console.log(this.loginForm)
    console.log(this.loginForm.get('email'))
    console.log(this.loginForm.get('password'))
  }

}
