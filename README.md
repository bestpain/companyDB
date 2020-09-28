This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to Start locally

In the project directory, you can run:

### `npm install`

### `npm run dev`

Runs the app in the development mode.<br />
Open [http://localhost:5000]

[deployment](https://xspace-ssr.herokuapp.com/) for more information.

It is a Server Side Rendered App.So on visiting the homepage(localhost:5000) an static HTML file is served.
I am making the API call after the first JS file is sent to the client because it makes the loading faster compared to making an api call with the HTML file.Making the API call with the HTML file increases the loading time.

The Header and Sidebar are fixed.The content keeps on changing based on URL.

Redux for state management.

Redux-Saga for making API calls and handling side effects.
Since on a single page there are many buttons which can make async/API calls a user can click on these buttons repeatedly which could lead to side effects.Saga limits the user from doing so and any new network request overwrites the previous request.

React-Helmet for SEO support.

Added 404 pages.

Styled components for styling react components.

Axios for making network requests.
