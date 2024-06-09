import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutFrom = () => {
    const { user } = useAuth();
    const [error, setError] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosPablic = useAxiosPublic();
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransaction] = useState();
const navigate =useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const donationAmountTaka = e.target.donationAmountTaka.value

        const petRes = await axiosPablic.post('/create-payment-intent', { price: donationAmountTaka });
        setClientSecret(petRes.data.clientSecret);
        console.log(petRes);
        console.log(clientSecret);

        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('payment error', error);
            setError(error.message)
        } else {
            console.log('paymet method', paymentMethod);
            setError('')
        }

        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || "anomymous",
                    name: user?.displayName || 'anomymous'
                }
            }

        });

        if (confirmError) {
            console.log('confirmError');
        } else {
            console.log('payment Intent', paymentIntent);
            if (paymentIntent.status === "succeeded") {
                navigate('/dashboard/patmentHistory')
                console.log('transaction id', paymentIntent.id);
                setTransaction(paymentIntent.id);
                const payment = {
                    email: user.email,
                    price: donationAmountTaka,
                    transactionId: paymentIntent.id,
                    date: new Date(),

                }
                const res = axiosPablic.post('/payment', payment);
                console.log('pament save', res);

                if(res.data?.paymentResult?.insertedId){
                    
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: 'payment success',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        }


    }
    // useEffect(() => {
    //     axiosSecure.post('/create-payment-intent', { price: donationAmountTaka })
    //         .then(res => {
    //             console.log(res.data.clientSecrte);
    //             setClientSecrte(res.data.clientSecrte)
    //         })

    // }, [axiosSecure])





    return (
        <form onSubmit={handleSubmit}>
            <p>please pay : <span className="text-2xl font-bold">Mastercard (debit)</span>  <span className="text-2xl font-bold">and 6 digite amount</span></p>
            <input type="text" name="donationAmountTaka" placeholder="amount" id="" />
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="bg-green-400 py-2 px-4" type="submit" disabled={!stripe}>
                Pay
            </button>
            <p className="text-red-400">{error}</p>
            {transactionId && <p>your transaction Id : {transactionId}</p>}
        </form>
    );
};

export default CheckoutFrom;