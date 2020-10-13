# foreach-object

This library provides secure foreach functionality for objects. 
 Mainly focuses on avoiding some common errors that encounter with javascript for-in iterations, such as iterating through prototype properties.

Method signature is similar to Array.prototype.forEach.

## Installation

```
npm i foreach-object
```

## Example Usage

After installing foreach-object module, you can use either `import` syntax of ES6 or `require` syntax of node to make this library available in your file.

#### Using `import`

```
import each from 'foreach-object';
   
const object = {
   firstName: 'Arosha',
   lastName: 'Sum',
   country: 'Australia'
};
   
each(object, (value, key, object) => {
   console.log(key + ': ' + value);
});
   
// Console log output will be:
//      firstName: Arosha
//      lastName: Sum
//      country: Australia
```

#### Using `require`

```
const each = require('foreach-object');

const object = {
   firstName: 'Arosha',
   lastName: 'Sum',
   country: 'Australia'
};
   
each(object, (value, key, object) => {
   console.log(key + ': ' + value);
});
   
// Console log output will be:
//      firstName: Arosha
//      lastName: Sum
//      country: Australia
```

## Remarks

This library will iterate through object's own properties only. Therefore, prototype properties will be ignored.
