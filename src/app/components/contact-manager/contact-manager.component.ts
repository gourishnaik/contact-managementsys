import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { icontacts } from '../models/icontacts';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent implements OnInit {
  public loading: boolean = false;
  public contacts: icontacts[] = [];
  public errorMessage: string | null = null;
  constructor(private contactservice: ContactService) { }

  ngOnInit(): void {
   
    setTimeout(() => {
      this.loading = true;
   }, 1000)

    setTimeout(() => {
      this.loading = false;
    }, 1018)
    this.getallfromserver();

  //  this.contactservice.getallcontact().subscribe((data: icontacts[]) => {
  //    this.contacts = data;
  //    this.loading = true;
 //   },
   //   err => {
  //      alert("something went wrong")
  //      this.errorMessage = err;
  //      this.loading = false;
     // });


  }

getallfromserver(){
  this.contactservice.getallcontact().subscribe((data: icontacts[]) => {
        this.contacts = data;
       this.loading = true;
     },
        err => {
          alert("something went wrong")
          this.errorMessage = err;
          this.loading = false;
        });
  
}



  delete(contactid: any) {
    this.contactservice.deletecontact(contactid).subscribe((data) => {
      this.loading = false;
      this.getallfromserver();
    })
  }

}
