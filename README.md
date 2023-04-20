<h1 align="center">
<img src="https://user-images.githubusercontent.com/42696800/147324216-b7c6f919-e9c4-4e3a-9411-4ffabb3a35d2.png" alt="logo" width="30" height="30" />
ECOMMERCE
<!-- <p align='center'>

<img src='https://img.shields.io/github/license/Rajatm544/MERN-Ecommerce' alt='license'>
<img src='https://img.shields.io/github/last-commit/Rajatm544/MERN-Ecommerce' alt='last commit'>
<img src='https://img.shields.io/website?down_message=Down&up_message=Up&url=https%3A%2F%2Fkosells.herokuapp.com%2F' alt='website'>
<img src='https://img.shields.io/github/v/release/Rajatm544/MERN-Ecommerce?sort=semver' alt='release'>
<img src='https://img.shields.io/maintenance/yes/2022'
<img src='https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat' alt='maintained'>
</p> -->
	
</h1>
An Ecommerce app built using the MERN stack, Redux.js, Material UI, Node JS and MongoDB.
<br/>
The app also implements an email verification system for users registering using an email and password. Stripe payment gateway is implemented to provide payment options, and the app also includes an admin panel to keep track of all products, orders and users. This is also a PWA

## Getting Started

-   Fork this repo and run the `git clone <forked repo>` command from your terminal/bash.
-   Cd into the directories and `npm install`
-   Create a `config.env` file in the config folder of the root directory and add the variables as in [this file](https://github.com/tathagata1805/Ecommerce/blob/backend/env.md)
-   Run the command `npm run start` to run the server side and `npm start` to run the client side.

You can obtain the MONGO_URI after creating a collection on [mongodb atlas](https://www.mongodb.com/cloud/atlas).

Obtain the Stripe payment credentials from the Stripe developer console.

_P.S: Do star this repo if you like it or find it useful :)_

## Info

-   **Ecommerce** is an E-commerce PWA.
-   It has been built from scratch using the MERN stack with the client side using React JS and Redux store as well. Material UI is used along with some custom styling.
 _There are loads of features throughout the app._
-   The client side uses React hooks along with Redux.js and redux-thunk middleware
-   The server side is built using the Express framework of Node JS.
-   The Database used to store the users, orders, products and refresh tokens is the free tier of the cloud based MongoDB service from MongoDB Atlas.
-   The user authentication and authorisation implementation:

    **An email & password based login**:

    -   Here, the JWT tokens are used to verify each new registered user by sending an email for account verification.
    -   There is also a feature of allowing the user to reset password in case he/she forgets the credentials. This also uses refresh tokens and access tokens of varying life spans.
    -   If user changes the email id after logging in, another verification link is sent to verify the new email id for extra security.

    The [Stripe API](https://stripe.com/en-in) is used to accept payments via a **Credit Card**. Since the app is using the 3D Secure feature of Stripe in test mode, you can test this using 4000 0000 0000 3220 and any combition of date/cvv

-   The images for the user avatar and the product are stored in Cloudinary.
-   The app is responsive and is also a progressive web app, with a notification sent to the user everytime the app has an update.

### Admin Panel

-   The admin panel view is meant to handle all the orders, products and registered users
-   An order can be marked as delivered, after the user has completed the payment
-   The admin can create a product for the shop, which makes it easier to add/remove more products to replicate a real world e-commerce site
-   The users detail can altered, only by setting them as admin or not. Other than this, the admin cannot change any other detail about the registered user.
-   Helps give an estimate of the total number of orders and users on the app.

### Easy Workflow for Ordering Items

-   The app has been designed and built in a manner that makes it very easy to order items once they are added to the cart.
-   There is a status bar implemented that can help keep the user informed about the number of steps left in placing an order.

### Responsive Design & PWA

-   The latest version of Material UI is used along with custom stylesheets
-   Additional styling is included to format various smaller elements throughout the app.
-   The Navbar is built using a NPM package `overlay-navbar` which provides a highly customisable navbar along with hamburgers

### Miscellaneous

-   The app makes use of [react-helmet-async](https://www.npmjs.com/package/react-helmet-async) to add a custom HTML title for different pages.
-   A user can submit a review for any product only if he/she has placed an order for the product, and hasn't already submitted a review
-   The cart page makes it very easy to alter the quantity of the products, and the cart size is indicated to the user at all instants.
-   The product carousel in the home page fetches the top rated products and provides the details
-   Pagination is also implemented to be server side rendered list of products/orders.

## Potential Improvements

-   Adding GSAP/Framer for sleek animations!
-   Cleaner UI with use of styled components rather than MUI
-   More payment gateways like UPI or Google Pay
-   Improved Fuzzy Search implementation.
-   Addition of many more product categories and a sorting feature
-   Adding products as favorites for repeated orders

Any more suggestions are always welcome in the PRs!

## Technologies Used

Some of the technologies used in the development of this web application are as follow:

-   [MongoDB Atlas](https://www.mongodb.com/cloud/atlas): It provides a free cloud service to store MongoDB collections.
-   [React.js](https://reactjs.org/): A JavaScript library for building user interfaces.
-   [Node.js](https://nodejs.org/en/): A runtime environment to help build fast server applications using JS.
-   [Express.js](https://expressjs.com/): A popular Node.js framework to build scalable server-side for web applications.
-   [Redux.js](https://redux.js.org/): A predictable & global state container for React apps.
-   [Mongoose](https://mongoosejs.com/): An ODM(Object Data Modelling)library for MongoDB and Node.js
-   [JSON Web Tokens or JWTs](https://jwt.io/): A standard to securely authenticate HTTP requests
-   [Material UI](https://mui.com/): A popular framework for building responsive, mobile-first sites.
