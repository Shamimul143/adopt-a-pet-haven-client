import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutFrom from "./CheckoutFrom";



const stripePromise = loadStripe(import.meta.env.VITE_PAMENT_PK)
const Payment = () => {
    return (
        <div>
            <Elements stripe={stripePromise}>
                <CheckoutFrom></CheckoutFrom>
            </Elements>
        </div>
    );
};

export default Payment;