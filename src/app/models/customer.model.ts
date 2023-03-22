export enum AccountType {
  Saving = 'saving',
  Checking = 'checking',
}

export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  accountNumber: string;
  phoneNumber: string;
  email: string;
  amountOfMoney: number;
  accountType: string;
  gender: string;
}
