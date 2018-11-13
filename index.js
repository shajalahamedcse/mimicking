'use strict';

defineProperty = Object.defineProperty;
propertyDescriptor = Object.getOwnPropertyDescriptor;

const mimic = (to, from) => {
    //  Array of properties 
    const properties = Reflect.ownKeys(from);

    properties.forEach(property =>{
        defineProperty(to, property, propertyDescriptor(from, property));
    });

    return  to;

}

module.exports = mimic;