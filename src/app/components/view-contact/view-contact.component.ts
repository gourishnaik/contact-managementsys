import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';
import { icontacts } from '../models/icontacts';
import { igroup } from '../models/igroup';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {
  public loading: boolean = true;
  public contactid: string | null = null;
  //public data: string | null = null;
  public contact: icontacts = {} as icontacts;
  public group: igroup = {} as igroup;


  constructor(private Activatedroute: ActivatedRoute, private contactservice: ContactService) { }

  ngOnInit(): void {
    this.Activatedroute.paramMap.subscribe((param: Params) => {
      this.contactid = param.get('contactid');
      setTimeout(() => {
        this.loading = false;
      }, 1000)


    });




    if (this.contactid) {

      this.contactservice.getcontact(this.contactid).subscribe((data: any) => {
        this.contact = data;

        // this.contactservice.getGroup(data).subscribe((data:igroup[])=>{
        //   this.group = data;
        // });

        this.contactservice.getGroup(data).subscribe((data: any) => {
          this.group = data;
        });

      },

        err => {
          alert("something went wrong")
          this.loading = false;
        });

    }

  }

  public isnotempty() {
    return Object.keys(this.contact).length > 0 && Object.keys(this.group).length > 0;
  }
}
