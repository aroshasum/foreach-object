/**
 * Provides a simple interface to iterate through given object securely.
 * Similar interface to Array.prototype.forEach
 *
 * @param object - target object which will be subjected to iteration.
 * @param callbackFn - Function provided to be executed for each iteration.
 * @returns object - provided object.
 */

const foreachObject = (object, callbackFn) => {
    "use strict";
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            callbackFn(object[key], key, object);
        }
    }

    return object;
};

export default foreachObject;
