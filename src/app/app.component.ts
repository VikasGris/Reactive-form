import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ["Male", "Female"];
  signupForm!: FormGroup;

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'gender': new FormControl("Male"),
      
    });

    this.signupForm.setValue({
      'userData': {
        'username': 'gowri',
        'email': 'gowri@gmail.com'
      },
      'gender': 'Male'
    });
  }

  onSubmit() {
    console.log(this.signupForm)
    this.signupForm.reset();
  }

  

  // forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
  //   const promise = new Promise<any>((resolve, rejects) => {
  //     setTimeout(() => {
  //       if (control.value === 'vik@gamil.com') {
  //         resolve({ 'emailIsForbidden': true })
  //       } else {
  //         resolve(null)
  //       }
  //     }, 1500)
  //   });
  //   return promise
  // }

  
}
