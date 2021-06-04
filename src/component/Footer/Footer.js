import React from 'react'

function Footer() {
  var date = new Date().getFullYear()
    return (
        <div style={{textAlign: "center", color: "white"}}>
         © Copyright {date}, Edirin
        </div>
    )
}

export default Footer
