import { IEnvironment } from './environment.interface';

export const environment: IEnvironment = {
    production: true,

    ROOT_DOMAIN_URL: 'https://fairyssteamreview.azurewebsites.net/',
    dataApiUrl: 'https://fairyssteamreview.azurewebsites.net/api',

    MONGO_DB_CONNECTION_STRING: 'mongodb://remote-host/mongodb'
};
