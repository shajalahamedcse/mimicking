# mimicking-func 


You can use it when you want to wrap a function in another function  and  want to preserve the original name and properties.



## Install

```
$ npm install mimicking-func
```


## Usage

```js
const mimickingFunc = require('mimicking-func');

const say = ()=> {};
say.hello = 'hello';
say.hi = 'hi';

function wrapperFunction() {
	return say() {};
}

console.log(wrapperFunction.name);
//=> 'wrapper'

mimicFn(wrapperFunction, say);

console.log(wrapperFunction.name);
//=> 'foo'

console.log(wrapperFunction.say);
//=> '
```


## API

Will copy over the properties :
    `name`
    `length`
    `displayName`
and other custom properties you have declared.

### mimickingFunc(to, from)

It will modify `to` and return it.

#### to

Type: `Function`

Mimicking function.

#### from

Type: `Function`

Function to mimic.


## Related

- [rename-fn](https://github.com/sindresorhus/rename-fn) - Rename a function


## License

MIT © 
