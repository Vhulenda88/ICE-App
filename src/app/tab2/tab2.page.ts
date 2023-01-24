import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private router: Router) {}

  add_contacts(){

  }

  navigate(){
    this.router.navigateByUrl("/contact")
  }

  contact={
    name:"",
    number:""
  }
  savecontact(){
    
    localStorage.setItem("contactname",this.contact.name)
    localStorage.setItem("contactnumber",this.contact.number)
    
  }

}
