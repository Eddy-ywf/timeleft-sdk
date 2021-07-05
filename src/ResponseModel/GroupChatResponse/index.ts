export interface GroupChatResponse {
  recentMessage?: RecentMessage;
  members?: { [key: string]: boolean };
  type?: number;
  createAt?: Date;
  createBy?: string;
  name?: string;
  users?: { [key: string]: User };
  updateAt?: Date;
  uid?: string;
}

export interface RecentMessage {
  isRead: boolean;
  sentAt: Date;
  messageText: string;
  type: string;
  sentBy: string;
  photos: any[];
}

export interface User {
  img: Img;
  alias: string;
  uid: string;
}

export interface Img {
  url: null | string;
}

export interface ResultWrapper<T> {
  result: T;
}
