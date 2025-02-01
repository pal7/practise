import React from 'react'

export default function Input({label, isTextarea=false, ...props}) {
  return (
    <p>
      <label htmlFor="">{label}</label>
      {isTextarea ? <textarea {...props} /> : <input {...props} />}
      <input type="text" />
    </p>
  )
}
