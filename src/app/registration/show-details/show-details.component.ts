import { Component } from '@angular/core';
import { RegistrationFormService } from '../registration.service';
import { Registration } from '../registration';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrl: './show-details.component.scss'
})
export class ShowDetailsComponent {
  registration: any;
  constructor(private registrationFormService:RegistrationFormService){}

  allFormDetails:Registration[] = [];
  itemToDelete:string = '';
  deleteModal:any;
  popupId:string = '';
  updateModal:any;
  

  ngOnInit():void{
    this.deleteModal = new (window as any).bootstrap.Modal(
      document.getElementById("deleteModal")
    )
    this.updateModal = new (window as any).bootstrap.Modal(
      document.getElementById("updateModal")
    )
    this.getAll();
  }

  getAll(){
    this.registrationFormService.get().subscribe((data) => {
      console.log(data);
      this.allFormDetails = data;
    });

  }

  openDeletePopup(id:string){
    this.itemToDelete = id;
    console.log("id----"+this.itemToDelete);
    this.deleteModal.show();
  }
  openUpdatePopup(id:string)
  {
      // this.registrationFormService.openUpdateModalWithDetails(id).subscribe((data) => {
      // this.registration.firstname = data.firstname;
      // this.registration.lastname = data.lastname;
      // this.registration.dob = data.dob;
      // this.registration.email = data.email;
      this.popupId = id;
      this.updateModal.show();
    // })
  }

  // updatePopUp(id:string){
  //   this.registrationFormService.openUpdateModalWithDetails(id).subscribe((data) => {
  //     this.registration.firstname = data.firstname;
  //     this.registration.lastname = data.lastname;
  //     this.registration.dob = data.dob;
  //     this.registration.email = data.email;

  //     this.popupId = id;
  //     this.updateModal.show();
  //   })

  // }

  DeleteData()
  {
    this.registrationFormService.deleteRecord(this.itemToDelete).subscribe(() =>{
      this.deleteModal.hide();
    })
  }

}


