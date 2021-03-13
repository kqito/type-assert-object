# type-assert-object

**Type-assert-object** is a type assert friendly object utils.

![build status](https://github.com/kqito/type-assert-object/workflows/Node.js%20CI/badge.svg)
[![npm version](https://badge.fury.io/js/type-assert-object.svg)](https://badge.fury.io/js/type-assert-object)
![license](https://img.shields.io/github/license/kqito/type-assert-object)

## Features
- Static methods of `Object` to generate mapped type
  - e.g. `entries`, `fromEntries` and `keys`
- Simple design
- Light weight


## Installation
You can install the package from npm.
```
npm install type-assert-object
```

or using yarn.
```
yarn add type-assert-object
```


## Usage
### General
**type-assert-object's API**
```typescript
import { entries, fromEntries, keys } from 'type-assert-object';

const animals = {
  dog: { cry: 'bowwow' },
  cat: { cry: 'meow' },
  chick: { cry: 'peep' },
} as const;

const animalsArray = entries(animals);
//  => (
//      ["dog",   {readonly cry: "bowwow"; }] |
//      ["cat",   {readonly cry: "meow"  ; }] |
//      ["chick", {readonly cry: "peep"  ; }] |
//     )[]

const animalsObj = fromEntries(animalsArray);
// => {
//      dog: {
//         readonly cry: "bowwow";
//      };
//      cat: {
//         readonly cry: "meow";
//      };
//      chick: {
//         readonly cry: "peep";
//      };
//    }

const animalsKey = keys(animals);
// => "dog" | "cat" | "chick"
```

**Static method of `Object`**
```typescript
import { entries, fromEntries, keys } from './index';

const animals = {
  dog: { cry: 'bowwow' },
  cat: { cry: 'meow' },
  chick: { cry: 'peep' },
} as const;

const animalsArray = Object.entries(animals);
// => [string, {readonly cry: "bowwow"; } |
//             {readonly cry: "meow"  ; } |
//             {readonly cry: "peep"  ; }
//    ][]

const animalsObj = Object.fromEntries(animalsArray);
// => {[k: string], {readonly cry: "bowwow"; } |
//                  {readonly cry: "meow"  ; } |
//                  {readonly cry: "peep"  ; }
//    ]

const animalsKey = Object.keys(animals);
// => string[]
```


## License
[MIT © kqito](./LICENSE)
