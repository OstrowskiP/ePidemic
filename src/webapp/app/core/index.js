import UsersNodeClient from './rest/node/UsersNodeClient';
import { backendServiceUri } from '../config';
import AuthenticationNodeClient from './rest/node/AuthenticationNodeClient';

export const usersClient = new UsersNodeClient(backendServiceUri);
export const authenticationNodeClient = new AuthenticationNodeClient(backendServiceUri);
