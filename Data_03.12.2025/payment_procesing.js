class PaymentProcessing {
    constructor() {
        if (new.target === PaymentProcessing) {
            throw new Error("== abstract class PaymentProcessing Error ==");
        }
    }
    pay(amount) {
        throw new Error("this method pay() implement");
    }
    refend(id) {
        throw new Error("this method refend() implement");
    }
    getStatus(id) {
        throw new Error("this method getStatus() implement");
    }
}
class StripePayment extends PaymentProcessing {
    pay(amount) {
        console.log(`payment of amount: $${amount}`);
    }
    refend(id) {
        console.log(`refund for transaction ID: ${id}`);
    }
    getStatus(id) {
        console.log(`payment status for transaction ID: ${id}`);
    }
}

class PayPalPayment extends PaymentProcessing {
    pay(amount) {
        console.log(`PayPal payment of amount: $${amount}`);
    }
    refend(id) {
        console.log(`PayPal refund for transaction ID: ${id}`);
    }
    getStatus(id) {
        console.log(`PayPal payment status for transaction ID: ${id}`);
    }
}



const stripePayment = new StripePayment();

stripePayment.pay(1000);
stripePayment.refend("STI7845694ghy9f8r4d4r5t9");
stripePayment.getStatus("STI7845694ghy9f8r4d4r5t6r");

const payPalPayment = new PayPalPayment();

payPalPayment.pay(520);
payPalPayment.refend("PP123457454ws8s484d8s4d8sd");
payPalPayment.getStatus("PP123457454ws8s484d8s4d8sd");