import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === '' || number.trim() === '') {
      alert('Error: Both Name and Number are required'); 
    } else {
      alert('Form submitted successfully!\nName: ' + name + '\nNumber: ' + number); 
      setName(''); 
      setNumber('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <center>
          <label>Enter Your Name</label>
          <br />
          <input 
            type='text' 
            name='name' 
            value={name}
            onChange={handleChange}
          />
          <br /><br />
          <label>Enter Your Number</label>
          <br />
          <input 
            type='number' 
            name='number' 
            value={number}
            onChange={handleChange}
          />
          <br /><br />
          <button type='submit'>Submit</button>
        </center>
      </form>
    </div>
  );
}

export default Form;
