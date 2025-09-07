import React from "react";


export const DogPhotoCard = ({image}) => {
   
   
    return (
        <div className="fluid-container">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
              <div className="card" style={{width: "18rem"}}>
                <img src={image} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Random dog Card</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>

            </div>
            <div className="col-2"></div>

          </div>
        </div>
    )
}