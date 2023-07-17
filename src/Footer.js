import React from 'react'

const Footer = (props) => {
  return (
    <footer>
      <p>
        Total Contacts: {props.length}
      </p>
      <p>
        Made by Shubham Sahu
      </p>
    </footer>
  )
}

export default Footer
