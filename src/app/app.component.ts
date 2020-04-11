import { Component } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';
 form_new: FormGroup
  constructor(private fb: FormBuilder){}
 ngOnInit() {
   this.form_new = this.fb.group({
     classroom:[''],
     childrens: new FormArray([])
   })
   this.t.push(this.fb.group({
     name:['']
   }))

 }
  get f() { return this.form_new.controls; }
 get t() { return this.f.childrens as FormArray; }
 
 add(){
    this.t.push(this.fb.group({
     name:['']
   }))
 }
 delete(val){
    this.t.removeAt(val)
 }

}
