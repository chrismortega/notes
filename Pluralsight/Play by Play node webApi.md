# Build a Node WebApi with Sam Artioli and John Papa

Use `npm init -y` to take the defaults and create `package.json`

by default it uses `index.js` as the entry point

require http to bring in the http module
  - `require` is not part of javascript but part of node.js. It's job is to load modules.
  - modules are just separated chunks of code that can be loaded one at a time
  - in plain old javascript there is a global scope that scripts get loaded into and any script might affect another script
  - in node each module has its own scope - to expose things from a module they must be assigned to `exports` or `module.exports`. These can be accessed by another module that uses `require`.
  - `npm install` lets you download packages that contain node modules. These modules are stored in the node_modeules folder.

node forked to io.js, did some good work, and merged back into node

npm is a repo of packages with number of downloads etc

package.json allows the project to specify what modules will be required without including them in the source. This means the source repo doesn't need to contain those packages, they can be managed separately. Plus this way the correct packages can be pulled for the target environment. So if you pull from a PC you get pc packages, from a mac, mac packages etc.

when the project is pulled, a user can run `npm install` to install the items from the package.json

A .gitignore should be created that includes node_modules so that those files do not get pushed to source control.

When specifying versions in the package.json file, a tilda means only wildcard the minor version - so get the latest patch.

Major version is usually breaking changes, minor is changes but backwards compatible, patch is just small updates and bug fixes.

express is an easier way of writing a server. use `npm install express`

with npm install a -g means install globally - doesn't install to your package.json - puts it in your path so you can use it from your terminal. Might need `sudo`.

nodemon can be used to monitor files and restart your server when they change. Can install it globally.

lodash is a useful library for performing operations on arrays and collections. map, reduce, find, etc

MEAN stack - Mongo Express Angular Node

require can also be used with a path, in which case it loads a module from your own dang local code. You can pass a parameter to a required module, in which case that module should take in that parameter and use it. For intance, if we're creating routes, we need to take in the express app on which to create them.

Use `body-parser` to get the body of a request

When you require express it is a singleton for your entire app

`MongoDb` is a Document Store - a NoSQL database. Can install it via homebrew, or on windows you could use chocolaty.
  - Homebrew is a package manager for mac, Chocolatey is one for windows
  - Use command `brew` in terminal for homebrew
  - run `brew tap mongodb/brew`
  - mongoose is a node module that allows you to talk to easily access mongodb

  We're using node to talk to express, and express to talk to mongoose, and mongoose is talking to mongoDb





