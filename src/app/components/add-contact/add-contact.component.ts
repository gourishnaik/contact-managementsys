import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';
import { icontacts } from '../models/icontacts';
import { igroup } from '../models/igroup';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  public loading = false;
  public contact: icontacts = {} as icontacts;
  public groups: igroup[] = [] as igroup[];

  constructor(private contactservice: ContactService, private router: Router) { }

  ngOnInit(): void {



    this.contactservice.getallgroups().subscribe((data: igroup[]) => {
      this.groups = data;
    })

  }


  createsubmit() {
    this.contactservice.createcontact(this.contact).subscribe((data: icontacts) => {
      //console.log(data)
      this.router.navigate(['/'])
    },
      err => {
        alert("something went wrong")
        this.router.navigate(['/contacts/add'])
      });
  }

}
