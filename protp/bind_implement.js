Function.prototype.my_Bind = function (context, ...bindArgs) {
    const key = this;

    return function (...callArgs) {
        return key.apply(context, [...bindArgs, ...callArgs]);
    };
};

function user(city, country) {
    console.log(`Hello, I'm ${this.name} from ${city}, ${country}`);
}

const user_name = { name: "Edmon" };
    
const return_res = user.my_Bind(user_name, "Yerevan");

return_res("Armenia");
