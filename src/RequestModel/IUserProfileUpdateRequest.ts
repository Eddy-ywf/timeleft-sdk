export default interface UserRequest {
  alias?: string;
  description?: string;
  gender?: 'male' | 'female' | string;
  language?: 'fr-FR' | 'en-EN';
  availableToHelp?: boolean;
  cguAccepted?: boolean;
  birthdate?: string;
  uid?: string;
  imageUrl?: string;
  email?: string;
}
