export enum IsstatusEnum {
  PUBLIC = 'Public',
  DRAFT = 'Draft',
  CLOSE = 'Close',
  PRIVATE = 'Private',
}

export type PartyModel = {
  id: number;
  created_at: Date;
  updated_at: Date;
  nameparty: string;
  partystarttime: Date;
  partylocation: string;
  numberofpeople: number;
  isstatus: `${IsstatusEnum}`;
  admin_id: number;
  describe: string;
  requiredage: number;
  img: string;
};
