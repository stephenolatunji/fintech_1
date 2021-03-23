import { Component, OnInit } from '@angular/core';
import { SuperServiceService } from '../../@theme/service/super-service.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  addFaq: boolean = false; faqs; newFaq = { answer: '', question: '', staffId: localStorage.getItem('staffId') }
  constructor(private server: SuperServiceService) { }

  ngOnInit(): void {
    this.getFaqs()
  }

  getFaqs() {
    this.server.getAllFaq().subscribe(dat => {
      this.faqs = dat.entity
    })
  }

  handleMore() {
    alert()
  }

  handleOpenAddFaq() {
    this.addFaq = true;
  }

  back() {
    this.addFaq = false;
  }

  handleAddFaq() {
    this.server.addNewFaq(this.newFaq).subscribe(dat => {
      console.log(dat)
      if (dat.succeeded) {

      }
      else {

      }
    })
  }

}
