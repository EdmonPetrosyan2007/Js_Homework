Function.prototype.myCall = function (context, ...args) {
    context = context || globalThis;

    const uniqueKey = Symbol();

    context[uniqueKey] = this;

    const result = context[uniqueKey](...args);

    delete context[uniqueKey];

    return result;
};

function sum(a, b) {
   return [this.name, a + b];
}

const user = { name: "Edmon" };

console.log(sum.myCall(user, 2, 3));
