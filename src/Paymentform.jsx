import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';

const Paymentform = () => {
    const stripe = useStripe();
    const elements = useElements();
    const handlesubmit = e =>{
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handlesubmit}>
                <CardElement>
                    <button>
                        Pay for Your desired course
                    </button>
                </CardElement>

            </form>
            
        </div>
    );
};

export default Paymentform;