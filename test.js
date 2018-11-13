'use strict';
const assert = require('assert');
const mimic = require('./index');

const say = ()=>{};
const wrapper = () => {};

say.hello = "Hello";
say.hi = "Hi";


it("Function name have to be equal.",()=>{
    assert(say.name, "say");
});

it("Both function should be same.", ()=>{
    assert(mimic(wrapper, say), wrapper);
});



