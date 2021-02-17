import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
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
  files: any[] = [];

  public user_ = { document: '', docType: 'intPaassport', bvn: null }; user;

  constructor(private server: ServerService, private rout: Router, private helper: HelperService, private imageCompress: NgxImageCompressService) { }

  ngOnInit(): void {
    if(this.server.userDetails == undefined) {
      this.goBack();
    }
    else {
      this.user = this.server.userDetails;
    }
  }
  
  uploadFile(event) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files[0] = element.name;
      this.prepareImage(element)     
    }  
  }
  
  handleSubmit() {
    if(this.user_.document !=='') {
      this.user.docType = this.user_.docType;
      this.user.bvn = this.user_.bvn;
      this.user.document = this.user_.document;
      // user
      this.rout.navigate(['login']);
    }
  }

  goBack() {
    window.history.back();
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
      this.user_.document = result; 
    })
  }
}
