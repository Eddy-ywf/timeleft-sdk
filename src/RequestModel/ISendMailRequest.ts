interface IToReceiver {
  email: string;
}

export enum TemplateType {
  RegisTer = 'register'
}

export default interface ISendMailRequest {
  toReceiver: Array<IToReceiver>;
  templateType: TemplateType;
}
