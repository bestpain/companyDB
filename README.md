## Single Page full stack App using React,Redux,Node.js,Mongo,Webpack,Express
Includes Authentication,Authorization,Forgot Password,Email Verification.

## How to Start FrontEnd locally
1.Download the frontend folder.</br>
2.Inside the frontend folder run `npm install`.</br>
3.Build the project using  `npm run dev`.</br>
4.start the server using  `npm start`.</br>
5.visit[http://localhost:8080] in browser.</br>

## How to Start Backend locally
1.Download the backend folder.</br>
2.Inside the backend folder run  `npm install`.</br>
3.configure db file inside db file to work with your local mongo db setup.</br>
4.uncomment the addCompany() method inside index.js file to insert sample data into the database.</br>
5.start the server using  `npm run dev`.</br>

## Frontend technologies stack
JavaScript, React.js, Redux, Redux-Saga, Reselect,Webpack,Sass

## Backend technologies stack
Node.js, Express, REST API, MongoDB,JWT

Click [Here](https://company-ui.herokuapp.com) For Live Preview.

It is not using Server Side Rendering So it may take some time to load.
Loading time could  be improved using Server Side Rendering,Code splitting,Lazy Loading.
SignOut Function is not available so please refresh the page because authentication status is not being persisted in local storage.
