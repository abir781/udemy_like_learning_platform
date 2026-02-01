import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';

const Paymentform = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handlesubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    if (!card) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('error', error);
    } else {
      console.log('payment method', paymentMethod);
    }
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
                base: {
                  fontSize: '16px',
                  color: '#1f2937',
                  '::placeholder': {
                    color: '#9ca3af',
                  },
                },
                invalid: {
                  color: '#dc2626',
                },
              },
            }}
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={!stripe}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium
                     hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Pay for Your Desired Course
        </button>
      </form>
    </div>
  );
};

export default Paymentform;
