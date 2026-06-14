import dotenv from 'dotenv';

dotenv.config();

export const env = {
    baseUrl: process.env.BASE_URL || 'https://parabank.parasoft.com/parabank',
    apiUrl: process.env.API_URL || 'https://parabank.parasoft.com/parabank/services_proxy/bank',
};