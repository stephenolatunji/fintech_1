import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgxImageCompressService } from 'ngx-image-compress';
import { ServerService } from '../../services/server.service';
import { SettingsComponent } from '../settings/settings.component';

@Component({
  selector: 'app-change-document',
  templateUrl: './change-document.component.html',
  styleUrls: ['./change-document.component.css']
})
export class ChangeDocumentComponent implements OnInit {

  loading: boolean = false;

  public document = { documentImage: '', documentType: "1", bvn: '', documentNumber: '', documentExpiryDate: '' };
  @ViewChild("fileDropRef", { static: false }) fileDropEl: ElementRef;
<<<<<<< HEAD
  files: any[] = [];  err; msg;
=======
  files: any[] = []; err; msg;
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec

  constructor(private imageCompress: NgxImageCompressService, private settings_: SettingsComponent, private server: ServerService) { }

  ngOnInit(): void {
  }

  uploadFile(event) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files[0] = element.name;
<<<<<<< HEAD
      this.prepareImage(element)     
    }  
=======
      this.prepareImage(element)
    }
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
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
<<<<<<< HEAD
    this.imageCompress.compressFile(image, -1, 50, 50).then(result=> {     
      this.document.documentImage = result; 
=======
    this.imageCompress.compressFile(image, -1, 50, 50).then(result => {
      this.document.documentImage = result;
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
    })
  }

  back() {
    this.settings_.setDefault()
  }

  handleSubmit() {
    this.loading = true;
<<<<<<< HEAD
    this.server.updateUserDocument(document).subscribe(dat=>{
      console.log(dat)
      this.loading = false;
      if(dat.succeeded) {
=======
    this.server.updateUserDocument(document).subscribe(dat => {
      console.log(dat)
      this.loading = false;
      if (dat.succeeded) {
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
        this.msg = 'Document Updated Successfully'
      }
      else {
        this.msg = 'Error Updating your document'
      }
    }, err => this.msg = 'Network Error')
  }

}
