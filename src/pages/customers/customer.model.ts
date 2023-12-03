export enum Status {
  ACTIVE = 1,
  INACTIVE = 0,
}

export type User = {
  id: number;
  first_name: string;
  middle_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
  active: Status;
  address: string;
  country: string;
  join_date: string;
  full_name: string;
};
