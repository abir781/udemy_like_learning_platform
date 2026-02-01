import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import Paymentform from './Paymentform';


const stripepromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh')

const Payment = () => {
    return (
       <Elements stripe={stripepromise}>

              <Paymentform />

       </Elements>
    );
};

export default Payment;