import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  form: FormGroup = new FormGroup({
    nome : new FormControl('', [Validators.required, Validators.minLength(3) ] ),
    email : new FormControl('', [Validators.required, Validators.minLength(3)]),
    telefone : new FormControl('', [Validators.required, Validators.minLength(11)])
  })
  
  constructor(
    private service: UserService
  ){}
  
  submit(){
    console.log(this.form.value)
    const user: User = { ...this.form.value }
      this.service
      .salvar(user)
      .subscribe(savedUser => console.log(savedUser))
  }
}
