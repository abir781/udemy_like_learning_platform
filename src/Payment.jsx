// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import React from 'react';
// import Paymentform from './Paymentform';
// import { useLocation } from 'react-router';


// const stripepromise = loadStripe('pk_test_51Rln6fCBT84sLqM8QTYk5FDWkbDO6JSkqc0R5mTtKLT9Kk0BSM7vCdelc8dhtLj8mIQUj7QKjHW3svzAMHhp0Urf00UepNfYHb')

// const Payment = () => {

//   const location = useLocation();
//   const params = new URLSearchParams(location.search);
  
//   const price = params.get('price'); // price from URL query

//   const id = params.get('id');
//   const courseprice = Number(price);
//   console.log(courseprice);
//     return (
//        <Elements stripe={stripepromise}>

//               <Paymentform courseprice={courseprice} id={id} />

//        </Elements>
//     );
// };

// export default Payment;


// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import React from 'react';
// import Paymentform from './Paymentform';
// import { useLocation } from 'react-router';

// const stripePromise = loadStripe(
//   'pk_test_51Rln6fCBT84sLqM8QTYk5FDWkbDO6JSkqc0R5mTtKLT9Kk0BSM7vCdelc8dhtLj8mIQUj7QKjHW3svzAMHhp0Urf00UepNfYHb'
// );

// const Payment = () => {
//   const location = useLocation();
//   const { course } = location.state || {}; // get course from state

//   if (!course) return <p className="text-center mt-10">No course selected.</p>;

//   const courseprice = course.price;
//   const id = course._id;

//   return (
//     <Elements stripe={stripePromise}>
//       <Paymentform courseprice={courseprice} id={id} course={course} />
//     </Elements>
//   );
// };

// export default Payment;


import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import Paymentform from './Paymentform';
import { useLocation } from 'react-router';

const stripePromise = loadStripe(
  'pk_test_51Rln6fCBT84sLqM8QTYk5FDWkbDO6JSkqc0R5mTtKLT9Kk0BSM7vCdelc8dhtLj8mIQUj7QKjHW3svzAMHhp0Urf00UepNfYHb'
);

const Payment = () => {
  const location = useLocation();
  const { course } = location.state || {}; // get course from state

  if (!course) return <p className="text-center mt-10">No course selected.</p>;

  const courseprice = course.price;
  const id = course._id;

  return (
    <Elements stripe={stripePromise}>
      <Paymentform courseprice={courseprice} id={id} course={course} />
    </Elements>
  );
};

export default Payment;

