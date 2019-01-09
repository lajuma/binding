import { Component, OnInit, Input } from '@angular/core';
import { InquiryEditorService } from './inquiry-editor.service';

export class Inquiry {
  id: number;
  elak : string;
  status: string;
  persons: any[];

  constructor() {
    this.id = null;
    this.elak = '';
    this.status = 'INIT';
    this.persons = [];
  }

  create(data: any) {
    this.id = data.id;
    this.elak = data.elak;
    this.status = data.status;
    this.persons = data.persons;
  }
}

@Component({
  selector: 'app-inquiry-editor',
  templateUrl: './inquiry-editor.component.html',
  styleUrls: ['./inquiry-editor.component.css']
})
export class InquiryEditorComponent implements OnInit {

  inquiry: Inquiry;

  @Input() id: number;

  constructor(private ies: InquiryEditorService) { }

  ngOnInit() {
    // 1) init empty object with properties set to null or empty
    this.inquiry = new Inquiry();

    // 2) if there is an id, get the data from the service
    if (this.id) {
      const inquiryData = this.ies.getInquiry(this.id);

      // if the the service does not deliver any data (id was wrong), stay with the empty object, else Inquiry.create with the delivered data
      if (inquiryData) {
        this.inquiry.create(inquiryData);
      }
    }
  }

}
