import React from 'react';

function Input({ type, placeholder, value, onChange }) {
  return (
    <input
      required
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default Input;