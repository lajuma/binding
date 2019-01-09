import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InquiryEditorService {

  inquiries = [
    {
      id: 12345,
      elak : 'E234/00000239/XY',
      status: 'PRE_EDITING',
      persons: [
        {
          id: 123451,
          personId: 1,
          roleId: 30
        },
        {
          id: 123452,
          personId: 2,
          roleId: 31
        },
        {
          id: 123453,
          personId: 3,
          roleId: 32
        }
      ]
    },
    {
      id: 67890,
      elak : 'E678/00000239/AB',
      status: 'CORRECTION',
      persons: [
        {
          id: 678901,
          personId: 4,
          roleId: 30
        },
        {
          id: 678902,
          personId: 5,
          roleId: 31
        },
        {
          id: 678903,
          personId: 6,
          roleId: 32
        }
      ]
    }
  ];

  constructor() { }

  getInquiry(id: number) {
    return this.inquiries.find(inquiry => inquiry.id === id);
  }


}
