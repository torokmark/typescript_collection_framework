# Typescript Collection Framework #

## Aim ##

Our aim is to extend TypeScript with this module that ensure well-known collections and interfaces from Java and C#.

## Requirements ##

* TypeScript
	* http://www.typescriptlang.org/

* QUnit
	* https://npmjs.org/package/qunit
	* https://github.com/kof/node-qunit

## Build ##

### Using commandline ###

#### tsc ####

	tsc --target ES5 .\lib\hashset.ts

#### qunit ####

	tsc --target ES5 .\spec\hashset_spec.ts

It generates `.js` files.

	qunit -c .\lib\hashset.js -t .\spec\hashset_spec.js


### Using Visual Studio ###




## Co-contributors ##

* Szabó Toto
