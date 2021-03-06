import UsersNodeClient from './rest/node/UsersNodeClient';
import {backendServiceUri} from '../config';
import AuthenticationNodeClient from './rest/node/AuthenticationNodeClient';
import DiseasesNodeClient from './rest/node/DiseasesNodeClient';
import DiseaseDefinitionsNodeClient from './rest/node/DiseaseDefinitionsNodeClient';
import ContactNodeClient from "./rest/node/ContactNodeClient";

export const usersClient = new UsersNodeClient(backendServiceUri);
export const authenticationNodeClient = new AuthenticationNodeClient(backendServiceUri);
export const diseasesNodeClient = new DiseasesNodeClient(backendServiceUri);
export const diseaseDefinitionsNodeClient = new DiseaseDefinitionsNodeClient(backendServiceUri);
export const contactNodeClient = new ContactNodeClient(backendServiceUri);