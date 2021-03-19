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
  files: any[] = []; err; msg;

  constructor(private imageCompress: NgxImageCompressService, private settings_: SettingsComponent, private server: ServerService) { }

  ngOnInit(): void {
  }

  uploadFile(event) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files[0] = element.name;
      this.prepareImage(element)
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
      this.document.documentImage = result;
    })
  }

  back() {
    this.settings_.setDefault()
  }

  handleSubmit() {
    this.loading = true;
    this.server.updateUserDocument(document).subscribe(dat => {
      console.log(dat)
      this.loading = false;
      if (dat.succeeded) {
        this.msg = 'Document Updated Successfully'
      }
      else {
        this.msg = 'Error Updating your document'
      }
    }, err => this.msg = 'Network Error')
  }

}
