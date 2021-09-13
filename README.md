# Node.js Fundamentals

## What is Node.js?

It is a cross-platform, back-end JavaScript runtime environment that runs on the v8 engine and executes JavaScript code outside a web browser. 

Node.js lets developers use JavaScript to write server side scripts. Consequently Node.js represents a "JavaScript everywhere" paradigm. Unifying web-application development around a single programming language, rather than different language for server-side and client-side scripts.

Node.js allows the creation of web servers using JS and a collection of "modules" that handles various core functionalities, such as File System IO, networking, binary data buffers, cryptography functions, data streams etc.  

## Browser JavaScript vs. Node.js (Server)

|                   Browser JS                   |                           Node.js                            |
| :--------------------------------------------: | :----------------------------------------------------------: |
|           DOM (Part of Browser API)            |                            No DOM                            |
|          Window (Part of Browser API)          |                          No Window                           |
|     Interactive Apps (Part of Browser API)     |                       Server Side Apps                       |
|                 No File System                 |                         File System                          |
| Fragmentation (App runs on different browsers) | Versions (App only runs on the Node version it has developed for) |
|                  ES6 Modules                   |                      Common JS modules                       |

## Node.js Installation

1. Link:  [Node.js](https://nodejs.org/en/)

   ```powershell
   # Version check for Node.js 
   $ node -v
   ```

## Node.js Program Execution  : REPL vs. CLI 

1. **REPL** stands for Read, Eval, Print, Loop

2. Basically Node terminal, where user can write a logic as query. Node terminal will perform the operation and print the result in the same terminal window. [This approach is not used for development]

3. Sample CLI based Node.js program

   ```javascript
   // File : program.js
   const amount = 10;
   if(amount<12){
       console.log('amount is small');
   }
   else {
       console.log('amount is big');
   }
   
   ```

   ```powershell
   
   #Execute the following command in terminal
   #note : you should be in the directory where .js file is located
   $ node program
   > amount is small
   ```

## Global Objects

1. While working with the Node.js, we have access to the window objects

2. This objects are accessible from anywhere in the application.

3. This objects can be useful in various situations

4. Following are some of the global objects

   ```javascript
   // __dirname : will return the current directory
   console.log(__dirname);
   
   // __filename : will return the directory with the current file
   console.log(__filename);
   
   // require : will return the function require
   console.warn(require);
   
   // module : info about current module
   console.warn(module);
   
   //process : returns the info about env where program is being executed
   console.log(process);
   
   //setInterval : also a global object, can be accessed from anywhere in app
   setInterval(() => {
       console.warn('interval triggered');
   }, 2000);
   
   // setTimeOut : also global object, can be accessed from anywhere in app
   setTimeout(() => {
       console.warn('time out after 5000 ms');
   }, 5000);
   ```

## Modules

**Modules** are the blocks of encapsulated code that communicates with an external application on the basis of their related functionality. Modules can be a single file or a collection of multiples files/folders. Modules can hold pure object models or it can hold functions. The reason programmers are heavily reliant on modules is because of their re-usability as well as the ability to break down a complex piece of code into manageable chunks.

**Types of Modules**

| Module type                                | Description                                                  |
| ------------------------------------------ | ------------------------------------------------------------ |
| **Core Modules** (built-in modules)        | This are built in modules of the Node.js that are part of the platform and comes with Node.js installation. |
| **Local Modules**                          | Unlike Core and Third-party modules, this modules are created locally in the Node.js application by the user. |
| **Third-party Modules** (External Modules) | This modules are available only, provided by third party vendors, which can be installed and used in the Node.js app using NPM. This modules can be installed locally in project folder or globally for all the projects. Eg. Mongoose, Express and **Angular**. |

## Local Modules

This modules are created locally in the Node.js application. This modules includes different functionalities of the application in separate files and folders. This modules can also be package and distributed via NPM, so that Node.js community can use it. This modules can hold models as well as functions. 

**Simple app implementation without Modularity** 

```javascript
// location : NodeCode >> localModuleExample >> appWithoutModules.js
const input1 = 'abc';
const input2 = 'def';

const upperCaseMakerFunction = (input) => {
    	let output = input.toUpperCase();
    	return output;
}

console.log(sampleFunction(input1));
console.log(sampleFunction(input2));
console.log(sampleFunction('ghi'));

// disadvantage of such single file implementation 
// it can be difficult to track when code base become bigger
// Everything is exposed and allowed to modify 
// no encapsulation
```

**Above app with separated modules**

```javascript
// location : NodeCode >> localModuleExample >> appWithModules.js
// Node.js uses CommonJs, therefore every file is module(by default)
const inputs = require('./inputs');
const sampleFunction = require('./funcUtils');

//console.log(inputs);

console.log(sampleFunction(inputs.input1));
console.log(sampleFunction(inputs.input2));

console.log(sampleFunction(modInputs.arrayValue[0]));
console.log(sampleFunction(modInputs.arrayValue[1]));
```

```javascript
//location : NodeCode >> localModuleExample >> inputs.js
// local datq just for this file
const secretInput = 'xyz';

// shared data for entire application
const input1 = 'abc';
const input2 = 'def';

module.exports = {input1, input2}
```

```javascript
//location : NodeCode >> localModuleExample >> funcUtils.js
const sampleFunction = (input) => {
    let output = input.toUpperCase();
    return output;
}

module.exports = sampleFunction;
```

```javascript
//location : NodeCode >> localModuleExample >> modInput.js
module.exports.arrayValue = ['pqr', 'stu'];
```

## Built-in Modules

Node.js has a set of built-in modules which you can use without any further installation. following are some of the important built in modules and their description.

[Full list of the modules and respected methods of this modules](https://nodejs.org/dist/latest-v14.x/docs/api/)

| Core Modules | Description                                                  |
| :----------: | :----------------------------------------------------------- |
|      OS      | Provide Information about operating system on which node.js app is running. Example code location : **NodeCode >> coreModules >> os-module.js** |
|      FS      | Used to handle file system. file can be handled async or in sync. To achieve non blocking behavior use async. Example code location : **NodeCode >> coreModules >> fileSystem-async/sync-module.js** |
|     Path     | Includes methods to deal with file paths. Example code location : **NodeCode >> coreModules >> path-module.js** |
|   Process    | Provides information and control about the current Node.js process. |
|    assert    | set of assertion functions useful for testing.               |
|     http     | creates an HTTP server in Node.js.                           |
| querystring  | utility used for parsing and formatting URL query strings.   |
|     URL      | module provides utilities for URL resolution and parsing.    |

**Basic Http server implementation using http module**

```javascript
const http = require('http');

// req : incoming request bound to the server
// res : response from the server to the client
const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.write('home page');
    }
    else if(req.url === '/about'){
        res.write('about section');
    }
    else {
        res.write(`<h1>Oops</h1> 
        <a href="/"> back home</a>`);
    }
    res.end();
});

server.listen(5000);
```

## Third party Modules : NPM

Third party modules/packages can be install using NPM. NPM is automatically installed when Node.js is installed. NPM packages can be installed locally or globally.

Locally installed Node packages can only be used by the project directory where this packages are installed. Where as globally installed Node packages can be used in any project on  the computer.

To install the Node package locally using NPM, redirect to the project root folder and perform following operation in console

```bash
npm install <packageName>
or
npm i <packageName>
```

To install Node package globally using NPM, perform following operation in console any where in the computer

```bash
npm install -g <packageName> #windows
sudo npm install -g <packageName> #linux
```

**Package.json** [must have before installing any dependency]

Package.json is the file that **lives in the root directory of your project**. Your Package.json holds important information about the project. It contains human-readable metadata about the project (like the project name and description) as well as functional metadata like the package version number and a list of dependencies required by the application.

There are two approaches of creating Package.json file

1. Manual approach : Create Package.json file in the root of your project, and create each property manually
2. Using NPM : 

```bash
npm init # step by step, press enter to skip
#or
npm init -y # everything default
```

Every time we will install dependency in our project using NPM install command, the Package.json file will be updated with the dependency list as follow

```json
{
  "name": "NodeCode",
  "version": "1.0.0",
  "description": "",
  "main": "global.js",
  "scripts": {		// this script can be used with npm
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
  "dependencies": {} // installed dependency will come here  
}
```

**Scripts in Package.json file**

```json
// example script section in the Package.json
"scripts": {
    "start":"node fileName.js"
  }
```

```bash
#script usage
$ npm start
# this will execute the start script of the package.json
```

## Nodemon [3rd party module]

Nodemon is a utility that will monitor for any changes in your source and automatically restart your server. Perfect for development. It is a dev dependency, because this dependency is not used during production. But this utility is used during development.

Install the Nodemon as dev dependency from terminal [user must be in the project root]

```bash
$ npm i nodemon --save-dev
```

Modify the Package.json for Nodemon script

```json
"scripts": {
    "dev": "nodemon fileName.js",
    "start": "node fileName.js"
  },
```

Execute the Nodemon script from terminal as follow

```bash
$ npm run dev
```

**Uninstall Nodemon**

Approach 1 

```bash
$ npm uninstall nodemon
```

Approach 2

1. Remove **node_modules** folder from project
2. Remove the **Package-lock.json**
3. Remove the **nodemon dependency** from package.json
4. Perform **$ npm install**

