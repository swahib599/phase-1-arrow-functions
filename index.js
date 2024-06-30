const divide = (parameter1, parameter2) => parameter1 / parameter2;
console.log(divide(2000, 100));

const square = (parameter) => parameter * parameter;
console.log(square(4));

const add = (parameter1, parameter2) => {
    console.log(`add ${parameter1}`);
    console.log(`add ${parameter2}`);
    return parameter1 + parameter2;
}
console.log(add(1, 2));
