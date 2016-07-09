extend-deep
===========

Clone recursively and merge array && object member.

## Install

    $ npm install extend-deep

## Usage

```javascript
var extend = require("extend-deep");

var obj1 = {
  apple: 0,
  pear: ['yellow', 'red'],
  banana: { weight: 52, price: 100 },
  cherry: 97
};
var obj2 = {
  pear: ['white'],
  banana: { price: 200 },
  durian: 100
};
extend(obj1, obj2);
// => {"apple":0,"pear":["white","red"],"banana":{"weight":52,"price":200},"cherry":97,"durian":100}
```

## License

[The MIT License](http://opensource.org/licenses/MIT)
