import { faker } from '@faker-js/faker';

export const productData ={
    BLUE_TOP: '1',
    MEN_TSHIRT: '2',
    WINTER_TOP: '5',
    SLEEVELESS_UNICORN_PATCH_GOWN: '19',
    COTTON_MULL_EMBROIDERED_DRESS:'20',
    BLUE_COTTON_INDIE_MICKEY_DRESS: '21',
    SLEEVELESS_UNICORN_PRINT_FIT_FLARE_NET_DRESS: '23',
    PREMIUM_POLO_TSHIRTS: '30',
    CHOSEN_QUANTITY: '30',
    getRandomProduct: () => {
        return faker.helpers.arrayElement([productData.BLUE_TOP, productData.MEN_TSHIRT, productData.WINTER_TOP, productData.SLEEVELESS_UNICORN_PATCH_GOWN, productData.COTTON_MULL_EMBROIDERED_DRESS, productData.BLUE_COTTON_INDIE_MICKEY_DRESS,productData.SLEEVELESS_UNICORN_PRINT_FIT_FLARE_NET_DRESS,productData.PREMIUM_POLO_TSHIRTS])
    }
}

export const messagesData = {
    SUBJECT: faker.commerce.productName(),
    MESSAGE: faker.commerce.productDescription(),
    CONTACT_US_MESSAGE: faker.finance.transactionDescription()
}

export const signUpData = {
    NAME: faker.person.firstName(),
    CHANGED_NAME: ' ' + faker.person.firstName(),
    PASSWORD: faker.internet.password(),
    DAYS: faker.number.int({ min: 1, max: 31}),
    MONTH: faker.date.month(),
    YEARS: faker.helpers.arrayElement(['2000','2012', '2005', '2017', '2021', '2009', '1999', '2015']),
    FIRST_NAME: faker.person.firstName(),
    LAST_NAME: faker.person.lastName(),
    COMPANY: faker.company.buzzPhrase(),
    ADDRESS_1: faker.location.direction() + ' ' + faker.location.ordinalDirection(),
    ADDRESS_2: faker.location.secondaryAddress(),
    COUNTRY: faker.helpers.arrayElement(['Canada', 'United States', 'India', 'Australia', 'Israel', 'New Zealand', 'Singapore']),
    STATE: faker.location.state(),
    CITY: faker.location.city(),
    ZIP_CODE: faker.location.zipCode(),
    MOBILE_NUMBER: faker.phone.imei(),
    getEmail: (name) => {
        return faker.internet.email({ firstName: name})
    }
}

export const filesPaths = {
    UPLOAD_FILE: faker.helpers.arrayElement(['cypress/files/plants.pdf', 'cypress/files/testing.png']),
    FIXTURES_LOGIN: 'cypress/fixtures/login.json'
}

export const paymentMethodData = {
    NAME: faker.person.fullName(),
    CARD_NUMBER: faker.finance.creditCardNumber(),
    CVC: faker.finance.creditCardCVV(),
    EXPIRATION_MONTH: faker.number.int({ min: 1, max: 12}),
    EXPIRATION_YEAR: faker.number.int({ min: 2000, max: 2033})
}

export const edgeData = {
    NEGATIVE_QUANTITY: faker.number.int({ min: -1000, max: -100}),
    GENERAL_EDGE_DATA: faker.person.firstName() + faker.number.int({ min: 100, max: 1000}) + faker.helpers.arrayElement(['.','-','*', ',', '&', '$', '#', '%', '!']),
    PASSWORD: faker.internet.password()
}

export const verifyMessages = {
    CREATED_ACCOUNT: 'Account Created!',
    EXISTING_EMAIL: 'Email Address already exist!',
    INCORRECT_EMAIL_PASSWORD: 'Your email or password is incorrect!'
}