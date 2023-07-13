
#Project Title
Shop


#Project Description
This project is about a shop, you'll find the automated flow in order to select products, register users, buy new products,
log in and pay with a credit card


#Used Technologies
- Cypress: Framework in order to automate the test cases of the project
- Programming language: JavaScript
- Viewport: desktop (1920 x 1080) and mobile versions (390 x 844)
- Cypress Test Runner: It is a graphical user interface (GUI) that allows you to easily visualize and debug your tests
Also, shows the test results (failed, passed and skip test cases)
- Browsers: Chrome and Electron -> Instances where the tests will be run
- Operating Systems: Windows and Mac
- Faker Plugin: Using this plugin for generating random data in order to create user accounts


#Run Desktop version - You should run the following command:
npm run desktop


#Run Mobile version - You should run the following command:
npm run mobile


#Automated user flow
- User lands on the page and scroll to the middle
- User chooses a product and clicks on “View product” at the bottom of the image
- User enters the value 30 in the quantity field
- User clicks on “Add to cart” and after clicking on “View cart”
- User clicks on “Proceed to checkout”
- User enters an email and clicks on “Register/Log in”
- User enters a name and email in “New User Sign up”
- User enters the rest of the information and clicks on “Create Account’
- User clicks on “Continue” ubicated below of the title “Account Created!”
- User clicks on the shopping cart ubicated on the header
- User clicks on “Proceed to checkout”
- User enters a comment and clicks on “Place Order”
- User enters the information about fake credit card and clicks on “Pay and Confirm Order”
- User clicks on the continue button
- User clicks on “Log out” at the top on the header
- User enters the previously created account in “Log in your account”
- User clicks on the “Contact Us” ubicated on the header
- User fills out the form and clicks on the submit button
- User clicks on ”OK” button localized on the pop-up
- User clicks on the “Log out” button on the header


#FYI
The "login.json" file only saves the last registered user


#GitHub Repostiory
https://github.com/KimberlingYarihuaman/automation-cypress