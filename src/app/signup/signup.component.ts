import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//  ye library hai eslie yaha imprt kie hue hai Observable
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  // yaha mein constructor bnya
constructor(private http : HttpClient){
}
// ye signupdetails function bnyaa constructor k niche 
 
signupdetails(formData:any):  Observable<any> {
   return this.http.post('http://localhost:2103/sign-up', formData)
  
}
onSubmit(formData: any) {
  console.log(formData);
//  alert(formData);
this.signupdetails(formData).subscribe(response => {
  console.log("shrutisuman");
  console.log(response);
});
}

}
