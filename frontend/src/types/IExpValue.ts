import { IServerUserValue } from "./IServerUserValue";

export interface IExpValue {
  postId: number;
  title: string;
  body: string;
  user: IServerUserValue;
  createDate: string;
  modifiedDate: string;
}

export interface IExpCommentValue {
  body: string;
  createdAt: string;
  modifiedAt: string;
  user: IServerUserValue;
}
