import { IServerUserValue } from "./IServerUserValue";

export interface IMentorValue {
  annualSales: string;
  introduction: null;
  job: string;
  mentoringId: number;
  price: string;
  user: IServerUserValue;
}

export interface IServerMentorListValue {
  mentoringId: number;
  annualSales: string;
  price: string;
  job: string;
  user: IServerUserValue;
  introduction: string;
}
