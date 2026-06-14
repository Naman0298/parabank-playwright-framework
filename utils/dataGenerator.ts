import { faker } from '@faker-js/faker';
import { User } from '../types/User';

export const generateUser = (): User => {
    return {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        address: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipCode: faker.location.zipCode(),
        phone: faker.phone.number(),
        ssn: faker.string.numeric(9),
        username: `user_${Date.now()}`,
        password: 'Test@12345'
    };
};