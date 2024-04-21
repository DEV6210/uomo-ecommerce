import React from "react";
import "./CollectionBox.css";

import { Link } from "react-router-dom";

const CollectionBox = () => {
  return (
    <div>
      <div className="collection">
        <div className="collectionLeft">
          <p className="col-p">Hot List</p>
          <h3 className="col-h3">
            <span>Women</span> Collection
          </h3>
          <Link to="/shop">
            <h5>Shop Now</h5>
          </Link>
        </div>
        <div className="collectionRight">
          <div className="collectionTop">
            <p className="col-p">Hot List</p>
            <h3 className="col-h3">
              <span>Men</span> Collection
            </h3>
            <Link to="/shop">
              <h5>Shop Now</h5>
            </Link>
          </div>
          <div className="collectionBottom">
            <div className="box1">
              <p className="col-p">Hot List</p>
              <h3 className="col-h3">
                <span>Kids</span> Collection
              </h3>
              <Link to="/shop">
                <h5>Shop Now</h5>
              </Link>
            </div>
            <div className="box2">
              <h3 className="col-h3">
                <span>E-gift</span> Cards
              </h3>
              <p className="col-p">
                Surprise someone with the gift they really want.
              </p>
              <Link to="/shop">
                <h5>Shop Now</h5>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionBox;
