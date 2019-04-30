# pnw4js

[pnw4js](https://github.com/canterbotto/pnw4js) is a simple, type safe, promise-based JavaScript library for accessing the [Politics & War](http://politicsandwar.com/) API. It is written in TypeScript for CommonJS, NodeJS and TypeScript. Compiles to ES5.

## Installation

The easiest way to install pnw4js is using [npm](https://www.npmjs.com/) in your project directory.

```bash
cd project_dir
npm install pnw4js
```

For greater flexibility — such as the ability to edit the code or manually configure the APIs — you are able to manually clone the project from the github. In your project directory, you will want to clone in the files 
```bash
cd project_dir
git clone # Project from Github
npm install # Installs all dependencies
npm install typescript # for compiling github project
tsc
```
You will then see a `dist` folder which contains .js files. Copy the entire contents of the folder into your project folder. To edit the files, you must perform any edits in `.ts` source files and then recompile using `tsc`.

## Usage
For standard installation using npm, the following code outlines usage. 
##### NodeJS:
```js
const PoliticsAndWar = require("pnw4js");
let pnw = new PoliticsAndWar("key", "password");

let nationCall = await pnw.nation(64060); // test call
```
##### CommonJS:
```js
import PoliticsAndWar from "pnw4js";
let pnw = new PoliticsAndWar("key", "password");

let nationCall = await pnw.nation(64060);
```
This library is compatible with TypeScript. Please see Documentation for in-depth documentation. The `PoliticsAndWar(key, [pass])` constructor requires a string parameter for the key, and the default password is `pnw`. The password is `readonly`, however `key` can be updated using the `setKey(key)` method.

## Documentation & Support
In order to promote ease of use and accessibility, this library is straightforward *and* documented on Github Pages written and generated using [TSDoc](https://github.com/Microsoft/tsdoc). 

Please [click here](https://canterbotto.github.io/pnw4js/) to view generated documentation. Alternatively, just read through source code, type annotations and inline documentation.

### Support
This library is actively supported and developed by the creator. Feel free to post an issue on the page, or contact me on Discord @Canter#0548 (send a friend request). You can also join the [my Discord](https://discord.gg/7YzKp3G) and ping me.

## Testing & Updates
This library has been tested and deployed in NodeJS and browser environments. That being said, there likely exist undiscovered bugs. Please submit an issue request if you encounter any problems using the library.

This is current **Version 1** of pnw4js. Version 2 *is planned to* include caching of past calls, and Version 3 will include analysis and filters on calls (TBD). Code written for current updates will still work for future versions of the library.

## Contributing
As an open-source project, any pull requests are welcome! If you implement the library and create any major features, please feel free to send me a message if you're unsure on how to implement them into the library. 

**Pull requests are welcome**. Please include a description of each commit, and keep your contributions atomic - one major feature per pull request please!

## License
[MIT](https://choosealicense.com/licenses/mit/)