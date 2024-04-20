import { EmailDetails } from './email-detail';


/*export interface History {
  id: number;
  status: string;
  createdAt: Date;
  emailDetails: EmailDetails; // Assuming you also have an EmailDetails model
}*/

export class History {
  constructor(
    public id: number,
    public status: string,
    public createdAt: string,
    public emailDetails: EmailDetails ,
   // public email_id: number // Add the email_id property
  ) {}
}
