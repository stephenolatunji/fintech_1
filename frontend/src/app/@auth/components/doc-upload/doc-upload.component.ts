import { Component, OnInit, ViewChild, ElementRef, Input  } from '@angular/core';
import { ServerService } from 'src/app/@theme/services/server.service';
import { HelperService } from 'src/app/@theme/services/helper.service';
import { NgxImageCompressService } from 'ngx-image-compress';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { RegisterComponent } from '../register/register.component';
import { AuthService } from '../../guard/auth.service';

@Component({
  selector: 'app-doc-upload',
  templateUrl: './doc-upload.component.html',
  styleUrls: ['./doc-upload.component.css']
})
export class DocUploadComponent implements OnInit {
  @ViewChild("fileDropRef", { static: false }) fileDropEl: ElementRef;
  files: any[] = []; err; loading: boolean = false;

  @Input() user;

  public user_ = { documentImage: '', documentType: "1", bvn: '', documentNumber: '', documentExpiryDate: '' };

  constructor(private reg: RegisterComponent, private auth: AuthService, private server: ServerService, private rout: Router, private helper: HelperService, private imageCompress: NgxImageCompressService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {

  }
  
  uploadFile(event) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files[0] = element.name;
      this.prepareImage(element)     
    }  
  }
  
  handleSubmit() {
    if(this.user_.documentImage !=='' && this.user_.documentNumber && this.user_.documentExpiryDate !==null ) {
      if((this.user.countryCode == '+234' && this.user_.bvn !==null) || (this.user.countryCode != '+234' ) ) {

        this.user.documentType = parseInt(this.user_.documentType);
        this.user.bvn = this.user_.bvn;
        this.user.documentImage = this.user_.documentImage.split(",")[1];
        this.user.documentNumber =  this.user_.documentNumber;
        this.user.documentExpiryDate = this.user_.documentExpiryDate.toString();
        
        this.loading = true;
        //logout user
        this.auth.logout();
     
        this.server.newUser(this.user).subscribe(dat=>{
          this.loading = false;
          if(dat.succeeded) {
            this.openSnackBar('Successful!');
            this.rout.navigate(['otp-auth']);
            console.log(dat.entity)
          }
          else {
            this.openSnackBar(`Sorry, ${dat.messages[0]}`);
            this.err = `Sorry, ${dat.messages[0]}`;
          }
        }, error => this.handleError(error))

      }

      else {
        this.err = 'Please fill all fields'
      }
    
    }
    else {
      this.err = 'Please fill all fields'
    }
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
    this.imageCompress.compressFile(image, -1, 50, 50).then(result=> {     
      this.user_.documentImage = result; 
    })
  }

  handleError(error) {
    this.reg.docUpload = false;
    console.log('here')
    this.loading = false;
    this.openSnackBar(`Sorry, Account creation was not successful!`);
  }

  openSnackBar(msg) {
    this._snackBar.open(msg, '', {
      duration: 2500,
    });
  }
}
