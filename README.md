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

## Documentation


## Testing & Updates

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)