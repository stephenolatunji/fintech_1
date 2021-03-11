import { Component, OnInit } from '@angular/core';
import { SuperServiceService } from '../../@theme/service/super-service.service';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  newUser = {
    firstName: '', middleName: '', lastName: '', gender: '', email: '', phoneNumber: '', department: '', supervisor: '',
    role: '', staffCode: '', accessLevel: ''
  }; err;
  constructor(private userFunc: UsersComponent, private server: SuperServiceService) { }

  ngOnInit(): void {
  }

  goBack() {
    this.userFunc.addUserClicked = false;
  }

  handleUpdate() {
    if(this.newUser.firstName=='' || this.newUser.middleName=='' || this.newUser.lastName=='' || this.newUser.gender=='' ||
    this.newUser.email=='' || this.newUser.phoneNumber== '' || this.newUser.department=='' || this.newUser.supervisor=='' ||
    this.newUser.role=='' || this.newUser.staffCode=='' || this.newUser.accessLevel==''
    ) {
      this.err = 'Please fill all input boxes'
    }
    else {
      this.server.addNewUser(this.newUser).subscribe(dat=>{
        console.log(dat)
      })
    }

  }


  editProfilePic(ev) {
    const element = ev[0];
    // this.user.uploadImage = element.name;
    // this.newProfilePictureUploaded = true;
    this.prepareImage(element)     
  }

  prepareImage(image) {
    var reader = new FileReader();
    reader.onloadend = () => {
      // compress image
      this.compressFile(reader.result);
      reader.result.toString();
    }
    return reader.readAsDataURL(image);
  }

  compressFile(image) {
    // this.imageCompress.compressFile(image, -1, 50, 50).then(result=> {     
    //   this.user.uploadImage = result; 
    // })
  }
}
