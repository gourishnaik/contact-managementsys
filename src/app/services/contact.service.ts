import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { icontacts } from '../components/models/icontacts';
import { igroup } from '../components/models/igroup';

//import {} from "../components/models/icontacts";
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private serviceurl: string = `http://localhost:9000`; //json-server url 
  constructor(private httpclient: HttpClient) {

  }


//get ALL contact
  public getallcontact(): Observable<icontacts[]> {
    let dataurl: string = `${this.serviceurl}/contacts`;
    return this.httpclient.get<icontacts[]>(dataurl).pipe();
  }

// get single contact
public getcontact(contactid:string):Observable<icontacts>{
  let dataurl:string = `${this.serviceurl}/contacts/${contactid}`;
  return this.httpclient.get<icontacts>(dataurl).pipe();
}

//create a single contact
 public createcontact(contact:icontacts):Observable<icontacts>{
  let dataurl: string = `${this.serviceurl}/contacts`;
  return this.httpclient.post<icontacts>(dataurl,contact)
 }

//update  contact
public updatecontact(contact:icontacts,contactid:string):Observable<icontacts>{
  let dataurl: string = `${this.serviceurl}/contacts/${contactid}`;
  return this.httpclient.put<icontacts>(dataurl,contact)
 }

//delete  contact
public deletecontact(contactid:string):Observable<icontacts>{
  let dataurl: string = `${this.serviceurl}/contacts/${contactid}`;
  return this.httpclient.delete<icontacts>(dataurl)
 }


 //get all groups

 public getallgroups():Observable<igroup[]>{
  let dataurl: string = `${this.serviceurl}/groups`;
  return this.httpclient.get<igroup[]>(dataurl).pipe();
 }

//get single group
 public getGroup(group:icontacts):Observable<igroup[]>{
  let dataurl:string = `${this.serviceurl}/groups/${group.groupid}`;
  return this.httpclient.get<igroup[]>(dataurl).pipe();
}

// public getcontacts(contact:icontacts):Observable<igroup[]>{
 // let dataurl:string = `${this.serviceurl}/groups/${groupid}`;
 // return this.httpclient.get<igroup[]>(dataurl).pipe();
 //}

}


