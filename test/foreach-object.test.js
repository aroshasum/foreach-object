import each from '../src/foreach-object';

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
