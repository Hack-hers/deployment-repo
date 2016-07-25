# Hack-Hers* Deployment Workshop

##Requirements:
- Node.js
- npm
- webpack

##To run the project:
- Make sure Node.js, npm and webpack are globally install on your machine
- Clone down the repo `git clone https://github.com/Hack-hers/deployment-repo` and navigate to it in your terminal `cd deployment-repo`
- Run `npm install`, this installs all of your libraries and various other dependencies
- Run `webpack --config webpack.config.js`. This command makes webpack build a folder called "dist" with a bundle.js file inside. The bundle.js file is the transpiled version of the React/Redux code.
- Run `node server.js` in the terminal. This starts the node server.
- Navigate to `localhost:3000` in your browser. You should see a TODO app.



##Acknowledgements:
- This repo is a modified version of [Redux's TODO MVC example](https://github.com/reactjs/redux/tree/master/examples/todomvc)



