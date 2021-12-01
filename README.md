# Ecommerce-app
BuyNow is a full stack application using the idea of a simple e-commerce website. This web application is built with the following:

Front-end:
REACT
Ant-Design components

Back-end:
Express.js
Node.js
Alan AI
Socket.io

Database:
PostgreSQL

As a user you can:
-Add products to cart
-Configure cart items
-Make purchases with stripe payment/receive notifcation for successful order placement
-Message customer service for queries
-Use voice control to access certain features of the AI (i.e Availability of the products)

As an owner (admin) you can:
-Create your own products
-Configure products (i.e price, description, image, etc.)
-Remove products
-Respond to client's queries
-Use voice control to access certain features of the AI (i.e Check the item stock)
-Change the theme for the website
-View the total number of orders

STRETCH FEATURE:
-View the total revenue
-View the order history (for the particular order)
-Implement better messaging feature regarding client/owner (adding a message bot potentially)
-Extend AI features including but not limited to: fetching data from database, navigating around website using only voice control
-Create/Adding more themes

# Final product
!["Home Page"](https://github.com/nathan-judge/ecommerce-app/blob/main/docs/homepage.PNG?raw=true)

!["Cart"](https://github.com/nathan-judge/ecommerce-app/blob/main/docs/cart.PNG?raw=true)

!["Product detail"](https://github.com/nathan-judge/ecommerce-app/blob/main/docs/productdetail.PNG?raw=true)

!["Admin Page"](https://github.com/nathan-judge/ecommerce-app/blob/main/docs/adminpage.PNG?raw=true)

!["Add Product form"](https://github.com/nathan-judge/ecommerce-app/blob/main/docs/addform.PNG?raw=true)

!["Edit Product form"](https://github.com/nathan-judge/ecommerce-app/blob/main/docs/editform.PNG?raw=true)

!["Delete Product"](https://github.com/nathan-judge/ecommerce-app/blob/main/docs/deleteform.PNG?raw=true)

!["Checkout Page"](https://github.com/nathan-judge/ecommerce-app/blob/main/docs/checkoutform.PNG?raw=true)

!["Payment with stripe"](https://github.com/nathan-judge/ecommerce-app/blob/main/docs/paymentform.PNG?raw=true)

!["Order notification"](https://github.com/nathan-judge/ecommerce-app/blob/main/docs/orderconfirmation.PNG?raw=true)

!["Alan AI"](https://github.com/nathan-judge/ecommerce-app/blob/main/docs/features.PNG?raw=true)

!["Chat box"](https://github.com/nathan-judge/ecommerce-app/blob/main/docs/chatbox.PNG?raw=true)

!["Review form"](https://github.com/nathan-judge/ecommerce-app/blob/main/docs/addreview.PNG?raw=true)

!["Search function"](https://github.com/nathan-judge/ecommerce-app/blob/main/docs/search.PNG?raw=true)


# Dependencies:
Server side (buy-now-api)
-node 10.x or above
-express 
-npm 6.x or above
-body-parser 
-Dotenv
-pg-native
-pg
-socket.io 
-uuid
-stripe

Server side for chat message (buy-now-chat)
-esm
-express
-nodemon
-socket.io

Client side (buy-now)
-alan-ai/alan-sdk-web
-ant-design/icons
-axios
-express
-lodash
-node-sass
-react *** important * (must use ^16.9.0)
-react-chat-widget *** important * (must use ^3.0.5)
-react-dom *** important * (must use ^16.9.0)
-react-router-dom
-react-scripts
-react-stripe-checkout
-socket.io-client
-styled-components
-web-vitals
-webfontloader

# Getting Started
-npm i (install all dependencies)

-Create local database:
1. `psql -d template1`
2. CREATE ROLE [username] WITH LOGIN password "[password]" 
3. CREATE DATABASE [database name] OWNER [owner name]

-Run Development web server:
1. `npm run local` (`http://localhost:3545`)

-Run Development chat server
1. `npm start` (`http://localhost:8000`)

-Run React Web application (client)
1. `npm start` (`http://localhost:3000`)


# Contributors
-Paul Wei (https://github.com/wei-paul)
-Shivangi Patodiya (https://github.com/shivangipatodiya)
-Nathan Judge (https://github.com/nathan-judge)
 

