import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price *100;
    const publishableKey = 'pk_test_51JmLg3KGWbRqmXeLiH1fDV1NpeTiKzM6mQWqYnXAWK4bHz6ihd1JjGqtp4z5stV0OVWq7gSUPko4DZylydbFPpTb00WBCwxzPc';

    const onToken=token=>{
        console.log(token);
        alert('Payment succesful')
    }

    return (
        <StripeCheckout
        label = 'Pay Now'
        name =' Clothing Company Ltd.'
        billingAddress
        shippingAddress
        description = {`Your total is $${price}`}
        amount = {priceForStripe}
        panelLabel='Pay Now'
        token = {onToken}
        stripeKey= {publishableKey}
        />
    );
};
export default StripeCheckoutButton;