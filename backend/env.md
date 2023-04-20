# All Environment variables for the server side code

NODE_ENV = `development or production`

PORT = `Any port for the server API`

MONGO_URI = `Mongo DB Atlas connection URI`

JWT_ACCESS_TOKEN_SECRET = `Random string of alphanumeric characters`

JWT_REFRESH_TOKEN_SECRET = `Random string of alphanumeric characters`

JWT_EMAIL_TOKEN_SECRET = `Random string of alphanumeric characters`

JWT_FORGOT_PASSWORD_TOKEN_SECRET = `Random string of alphanumeric characters`

MAIL_USERNAME = `Email id of the account used to send the verification email`

MAIL_PASSWORD = `password for the account used to send the verification email`

OAUTH_CLIENT_ID = `Google client id for using gmail along with nodemailer`

OAUTH_CLIENT_SECRET = `Google client secret for using gmail along with nodemailer`

OAUTH_REFRESH_TOKEN = `Google refresh token to send mails using gmail account in nodemailer`

GOOGLE_OAUTH_CLIENT_ID = `Google oauth 2.0 client id for using google oauth strategy of passport.js`

GOOGLE_OAUTH_CLIENT_SECRET = `Google oauth 2.0 client secret for using google oauth strategy of passport.js`

GITHUB_CLIENT_ID = `Github client id for using github strategy of passport.js`

GITHUB_CLIENT_SECRET = `Github client secret for using github strategy of passport.js`

TWITTER_CONSUMER_KEY = `Twitter consumer key for using twitter strategy of passport.js`

TWITTER_CONSUMER_SECRET = `Twitter consumer secret for using twitter strategy of passport.js`

LINKEDIN_CLIENT_ID = `Linkedin client id for using linkedin strategy of passport.js`

LINKEDIN_CLIENT_SECRET = `Linkedin client secret for using linkedin strategy of passport.js`

COOKIE_SESSION_KEY = `Random string of alphanumeric characters`

PAYPAL_CLIENT_ID = `Paypal client id to accept paypal payments`

S3_SECRET_ACCESS_KEY =`AWS S3 storage bucket's secret access key for the aws-sdk`

S3_ACCESS_KEY_ID = `AWS S3 storage bucket's secret access ID for the aws-sdk`

STRIPE_SECRET_KEY = `Stripe secret key for accepting credit/debit card payments`

FRONTEND_BASE_URL = `URL for server side`

BACKEND_BASE_URL = `URL for the client side`

PORT = `Port where you want your backend to run`
MONGO_URL= `Your MongoDB URL`
JWT_SECRET= `your JWT Secret token`
JWT_EXPIRE= `JWT expiry duration`
COOKIE_EXPIRE= `Cookie expiry duration`


EMAIL_USERNAME= `Your Sendgrid email username`
EMAIL_PASSWORD= `Your Sendgrid password`
EMAIL_HOST: `Sendgrid Host`
EMAIL_PORT: `Email Port from Sendgrid`

CLOUDINARY_NAME= `Cloudinary username`
CLOUDINARY_API_KEY= `Cloudinary API Key`
CLOUDINARY_API_SECRET= `Cloudinary API Secret Key`

FRONTEND_URL= `Frontend URL where your frontend runs`

STRIPE_API_KEY= `Stripe Public Key`
STRIPE_SECRET_KEY= `Stripe Secret Key`