# js-code-katas
A collection of ES6 testable JavaScript katas to continuously sharpen the toolset and demonstrate the capabilities of ES6 (Harmony).

## Local Setup
Use [Grunt](http://gruntjs.com/) to build the project. Grunt and Grunt plugins are installed and managed via npm, the [Node.js](http://nodejs.org/) package manager.

If you haven't already, install nodejs and then open your terminal. Install grunt command line interface as a global package. You might need to prefix this command with ```sudo``` depending on your permissions:

```
npm install -g grunt-cli
```

Make sure you have grunt installed by testing:

```
grunt -v
```

In order to install all the dependencies required, run this command:

```
npm install
```

Now you can run ```grunt``` to run all of the default tasks (Karma is the only one registered so far).