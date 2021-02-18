import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { ServerService } from 'src/app/@theme/services/server.service';
import { HelperService } from 'src/app/@theme/services/helper.service';
import { NgxImageCompressService } from 'ngx-image-compress';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doc-upload',
  templateUrl: './doc-upload.component.html',
  styleUrls: ['./doc-upload.component.css']
})
export class DocUploadComponent implements OnInit {
  @ViewChild("fileDropRef", { static: false }) fileDropEl: ElementRef;
  files: any[] = []; err;

  @Input() user;

  public user_ = { documentImage: '', documentType: "1", bvn: '', documentNumber: '', documentExpiryDate: '' };

  constructor(private server: ServerService, private rout: Router, private helper: HelperService, private imageCompress: NgxImageCompressService) { }

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
    if (this.user_.documentImage !== '' && this.user_.documentNumber) {


      this.user.documentType = parseInt(this.user_.documentType);
      this.user.bvn = this.user_.bvn;
      this.user.documentImage = this.user_.documentImage;
      this.user.documentNumber = this.user_.documentNumber;
      this.user.documentExpiryDate = this.user_.documentExpiryDate;
      this.user.gender = 1
      // user

      this.server.newUser(this.user).subscribe(dat => {
        console.log(dat)
      })
      // this.rout.navigate(['login']);



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
    this.imageCompress.compressFile(image, -1, 50, 50).then(result => {
      this.user_.documentImage = result;
    })
  }
}