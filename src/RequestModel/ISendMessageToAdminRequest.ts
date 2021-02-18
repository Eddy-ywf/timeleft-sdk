export default interface SendMessageToAdminRequest {
  email: string;
  title?: string;
  message: string;
  subject?: string;
}
