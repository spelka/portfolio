import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { Contact } from './../data/contact';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {

  formsModule: FormsModule;
  formGroup: FormGroup;
  //post: any;
  username: String;
  //email: String;
  //message: string;

  contact = new Contact('','','');

  constructor() { }

  ngOnInit() {
  }

  onSubmit()
  {
    console.log(this.contact);
  }

  submitFormDataToModel(username:string, email:string, message:string)
  {
    this.contact.username = username;
    this.contact.email = email;
    this.contact.message = message;
  }

}
