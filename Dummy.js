import React from 'react'

function Dummy(props) {
    let {title, imageUrl} = props;
  return (
    <div className='my-5'>
      <div  className="card" style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    position: "absolute",
                    right: "0"
                    
                }}>
  <img src={imageUrl}  className="card-img-top" alt="..."/>
  <div  className="card-body">
    <h5  className="card-title">{title}</h5>
    <p  className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/"  className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  )
}


export default Dummy
