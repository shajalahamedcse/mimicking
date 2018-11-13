'use strict';

const defineProperty = Object.defineProperty;
const propertyDescriptor = Object.getOwnPropertyDescriptor;

const mimic= (to, from) => {
    //  Array of properties 
    const properties = Reflect.ownKeys(from);

    // Scanning all the property
    properties.forEach(property =>{
        defineProperty(to, property, propertyDescriptor(from, property));
    });

    return  to;

}

module.exports = mimic;