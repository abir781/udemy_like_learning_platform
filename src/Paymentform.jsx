


import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { use, useContext, useState } from 'react';
import { Authcontext } from './Authcontext';

const Paymentform = ({courseprice,id}) => {
  console.log(courseprice);
  const {useremail} = useContext(Authcontext);

  console.log(useremail);
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  // Define course price here (in dollars)
 // $10 course

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);

    const card = elements.getElement(CardElement);
    if (!card) return;

    try {
      // Call backend to create PaymentIntent
      const { clientSecret } = await fetch('http://localhost:5000/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: courseprice * 100 }), // Stripe wants cents
      }).then(r => r.json());

      // Confirm payment
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, { payment_method: { card } });

      if (error) alert(error.message);
      else if (paymentIntent?.status === 'succeeded'){
          await fetch('http://localhost:5000/payment-success', {
                 method: 'POST',
                 headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                 course_id: id,
                 amount: courseprice,
                paymentId: paymentIntent.id,
                useremail: useremail,
    }),
  })
        alert('Payment succeeded!');

      } 
    } catch (err) {
      console.error(err);
      alert('Something went wrong.');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handlesubmit}
        className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 space-y-6"
      >
        <h2 className="text-xl font-semibold text-gray-800 text-center">
          Payment Details
        </h2>

        {/* Card Element */}
        <div className="border border-gray-300 rounded-lg p-3 focus-within:border-indigo-500">
          <CardElement
            options={{
              style: {
                base: { fontSize: '16px', color: '#1f2937', '::placeholder': { color: '#9ca3af' } },
                invalid: { color: '#dc2626' },
              },
            }}
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={!stripe || loading}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium
                     hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Processing...' : `Pay $${courseprice}`}
        </button>
      </form>
    </div>
  );
};

export default Paymentform;


