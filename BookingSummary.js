import React from "react";

function BookingSummary(props) {
  
  return (
    <div 
      style={{
        color: "white",
        backgroundColor: "black",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="card text-center"style={{
        color: "white",
        backgroundColor: "black",
        width: "100vw",
        height: "100vh",
      }}>
  <div className="card-header">
    Featured
  </div>
  <div className="card-body">
    <h3 className="card-title">Booking Summary</h3>
    <p className="card-text my-5">
      Movie Name : 
      <br/>Theatre Name :
      <br/>Time Slot :
      <br/>Seat No. :
      <br/>Total Price Of All Seats :
      <br/>Convenience fees :
      <br/>Total Amount Payable :
    </p>
    <a href="/bookingSummary" className="d-grid gap-2 col-6 mx-auto btn btn-primary my-5">Proceed</a>
  </div>
  <div className="card-footer text-muted">
    
  </div>
</div>
      </div>
   
  );
}

export default BookingSummary;
