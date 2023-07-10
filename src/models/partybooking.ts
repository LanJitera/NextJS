export enum StatusEnum {
  APPROVE = 'Approve',
  REJECT = 'Reject',
  UNVALUE = 'Unvalue',
}

export type PartybookingModel = {
  id: number;
  created_at: Date;
  updated_at: Date;
  user_id: number;
  party_id: number;
  status: `${StatusEnum}`;
};
