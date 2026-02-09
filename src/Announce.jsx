import React, { useState } from 'react';

const Announce = () => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You entered: ${text}`);
    setText("");
  };

  return (
    <div style={{
      maxWidth: '600px',
      margin: '40px auto',
      padding: '30px',
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    }}>
      <h2 style={{
        marginBottom: '20px',
        color: '#1f2937',
        fontSize: '24px',
        fontWeight: '600',
      }}>Make an Announcement</h2>
      
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your text here..."
          rows={6}
          cols={50}
          style={{
            width: '100%',
            padding: '12px 16px',
            fontSize: '16px',
            lineHeight: '1.5',
            border: '2px solid #e5e7eb',
            borderRadius: '8px',
            resize: 'vertical',
            fontFamily: 'inherit',
            outline: 'none',
            transition: 'border-color 0.2s ease',
            boxSizing: 'border-box',
          }}
          onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
          onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
        />
        <br />
        <button 
          type="submit"
          style={{
            marginTop: '16px',
            padding: '12px 24px',
            fontSize: '16px',
            fontWeight: '600',
            color: '#ffffff',
            backgroundColor: '#3b82f6',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease',
            width: '100%',
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#2563eb'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#3b82f6'}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Announce;