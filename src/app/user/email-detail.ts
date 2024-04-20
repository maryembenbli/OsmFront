/*export class EmailDetails {
    constructor(
      public id: number,
      public recipient: string,
      public msgBody: string,
      public subject: string,
      public attachment: string | null
    ) {}
  }*/
  export interface EmailDetails {
    id: number;
    recipient: string;
    msgBody: string;
    subject: string;
    attachment: string;
  }
  