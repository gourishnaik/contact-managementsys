import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap,Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';
import { icontacts } from '../models/icontacts';
import { igroup } from '../models/igroup';
@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  //public contacts: icontacts[] = []; 
  public groups: igroup[] = [] as igroup[];
  public contactid: string | null = null; 
  public contact: icontacts = {} as icontacts;
  public group: igroup = {} as igroup;
  constructor(private activatedroute:ActivatedRoute,private contactservice:ContactService,private router:Router) { }

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe((param:ParamMap)=>{
    this.contactid = param.get('contactid')
    });
    if(this.contactid){
this.contactservice.getcontact(this.contactid).subscribe((data:icontacts)=>{
  this.contact = data;
  
 
})
 }
 // this.contactservice.getallgroups().subscribe((data:any)=>{
   //   this.group = data;
  //  })
    this.contactservice.getallgroups().subscribe((data: igroup[]) => {
      this.groups = data;
    })
  }


  update(){
    if(this.contactid){
    this.contactservice.updatecontact(this.contact,this.contactid).subscribe((data: icontacts) => {
      //console.log(data)
      this.router.navigate(['/'])
    },
      err => {
        alert("something went wrong")
        this.router.navigate(['/contacts/edit/${this.contactid}'])
      });
    }
  }
}
