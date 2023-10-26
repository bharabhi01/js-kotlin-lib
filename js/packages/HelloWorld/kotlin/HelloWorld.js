(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'HelloWorld'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'HelloWorld'.");
    }
    root.HelloWorld = factory(typeof HelloWorld === 'undefined' ? {} : HelloWorld, this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var println = kotlin_kotlin.$_$.a;
  //endregion
  //region block: pre-declaration
  //endregion
  function main(args) {
    println('Hello World!');
  }
  main([]);
  return _;
}));

//# sourceMappingURL=HelloWorld.js.map
