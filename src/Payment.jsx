import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import Paymentform from './Paymentform';
import { useLocation } from 'react-router';


const stripepromise = loadStripe('pk_test_51Rln6fCBT84sLqM8QTYk5FDWkbDO6JSkqc0R5mTtKLT9Kk0BSM7vCdelc8dhtLj8mIQUj7QKjHW3svzAMHhp0Urf00UepNfYHb')

const Payment = () => {

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const price = params.get('price'); // price from URL query
  const courseprice = Number(price);
  console.log(courseprice);
    return (
       <Elements stripe={stripepromise}>

              <Paymentform courseprice={courseprice} />

       </Elements>
    );
};

export default Payment;