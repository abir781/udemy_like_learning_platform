import React, { useState } from 'react';

const Courseinfoform = ({ onnext }) => {
  const [data, setData] = useState({
    title: "",
    description: "",
    price: "",
    image: ""
  });

  const submit = () => {
    onnext(data);
  };

  return (
    <div>
      <h2>Course Info</h2>
      <input
        placeholder='Title'
        value={data.title}
        onChange={e => setData({ ...data, title: e.target.value })}
      />
      <input
        placeholder="Description"
        value={data.description}
        onChange={e => setData({ ...data, description: e.target.value })}
      />
      <input
        type="number"
        placeholder="Price"
        value={data.price}
        onChange={e => setData({ ...data, price: e.target.value })}
      />
      <input
        placeholder='Image URL'
        value={data.image}
        onChange={e => setData({ ...data, image: e.target.value })}
      />
      <button onClick={submit}>Next</button>
    </div>
  );
};

export default Courseinfoform;
