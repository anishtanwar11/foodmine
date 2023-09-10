## Lessons
1. Add Header
   1.  Generate Component
   2.  Add Html
   3.  Add CSS

2. List Food
   1.  Create Food Model
   2.  Create data.ts
       1. Add Simple Foods
   3.  Add images to assets
   4.  Create Food Service
   5.  Create Home Component
       1. Add ts
       2. Add Html
       3. Add CSS

3. Search
   1.  Add method to food service
   2.  Add service route
   3.  Show search result in home component
   4.  Generate search component
       1. Add to home component 
       2. Add ts
       3. Add html
       4. Add CSS 

4. Food page
   1.  Add method to food service
   2.  Generate Food page Component
       1. Ass Route
       2. Add ts
       3. Add html
       4. Add CSS

5. Tags Bar
   1.  Create Tag Model
   2.  Add sample Tag to data.ts
   3.  Food Service
       1. Add get all tag methods
       2. Add get all foods by tag method
   4.  Add tag route
   5.  Show tag result in Home Components
   6.  Generate tag component
       1. Add to home Component
       2. Add ts
       3. Add html
       4. Add CSS

6. Cart Page
   1.  Create CartItem Model
   2.  Create Cart Model
   3.  Generate Cart Service
   4.  Add to Cart Button in Food Page
   5.  Generate Cart page component
       1. Add Route
       2. Add ts
       3. Add html
       4. Add CSS
       
7. Not Found!
   1.  Generate Component
       1. Add ts
       2. Add html
       3. Add CSS
   2.  Add to Pages
       1. Home Page
       2. Food Page
       3. Cart Page

8. Connect To Backend
   1.  Create Backend Folder
   2.  npm init -y
   3.  npm install typescript
   4.  Create tsconfig.json
   5.  Create .gitignore
   6.  Copy data.ts to Backend/src
   7.  npm install express core
   8.  Create server.ts
       1. install @types
       2. Add apis
   9.  npm install nodemon ts-node --save-dev
   10. Add urs.ts to burgerking
   11. Add HttpClient module
   12. Update food service

9. Login Page
   1.  Generate Component
       1. Add route
       2. Add ts
       3. Add html
          1. Import Reactive form module
       4. Add Css
   2.  Add login Api
       1. Use Json
       2. Add jsonwebtoken
       3. Test using Postman
   3.  Generate User Service
       1. Generate user model
       2. Add user subject
       3. Add login method
          1. Add User Urls
          2. Generate IUserLogin interface
          3. Add ngx toastr
             1. Import module
             2. Import BrowserAnimationModule
             3. Add styles in angular.json
          4. Add to header
             1. Add local Storage Method
             2. Add Logout Method
                1. Add to Header

10. Making Component For Login Page
    1.  Input Container
    2.  Input Validation
    3.  Text Input
    4.  Default Button

11. Connect Login API TO MongoDB Atlas
    1.  Moving Api into router
    2.  Create MongoDB Atlas
    3.  Create .env file
    4.  Install
        1. mongoose
        2. dotenv
        3. bcryptjs
        4. jsonwebtoken // Already Installed //
        5. express-async-handler
    5.  Connect to MongoDB Atlas
    6.  Use MongoDB instead of data.ts in apis

12. Register User
    1.  Add Register api
    2.  Add Register Service method
    3.  Add Register link
    4.  Add Register components

13. Loading!
    1.  Add Image
    2.  Add Component
    3.  Add service
    4.  Add Interceptor

14. Checkout page
    1.  Create Order model
    2.  Create checkout Page Component
        1. Add to router
    3.  Add User to User Service
    4.  Add Cart to Cart Service
    5.  Create order Items List Component
    6.  Adding Map To The Checkout Page
        1.  Add Leaflet npm package
            1.  Add @types/leaflet
            2.  Add Css to angular.json
        2.  Add AddressLatLng to Order Model
        3.  Create Map component
            1.  Add to checkout page
            2.  Add TS
                1.  Change app-map selector to map
            3.  Add Html
            4.  Add CSS
        4.  Add Auth Guard

15. Save Order
    1. Add Order Model
    2. Add Order Status Enum
    3. Add Auth Middleware
    4. Add Order Router
       1. Add create API
    5. Add Order Urls to urls.ts
    7. Add Order Service
       1. Add create Method
    8. Add Auth Interceptor

16. Payment Page
    1. Generate Component
    2. Add 'getOrderForCurrentUser' api 
    3. Add Order Service method
    4. Connect Component to Service
    5. Make the map component readonly

17. Adding Paypal
    1. Generate Component
       1. Add to payment page
    2. Get Paypal client Id
    3. Add Paypal JS to index.html
    4. Set up Paypal button
    5. Add Pay api to order router   
    6. Get Paypal sandbox account

18. Order Track Page
    1.  Generate Component
        1.  Add to routes
    2.  Add API
        1.  Add to urls.ts
    3.  Add method to order.service
    4.  Add HTML
    5.  Add CSS