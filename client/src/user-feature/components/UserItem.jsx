import React from "react";
// import { DUMMY_PLACES } from "../../data";

const UserItem = (props) => {

  return (
    <div className="card white darken-1 hoverable collection">
      <div className="card-content black-text collection-item avatar">
        <img src={`http://localhost:5000/${props.image}`} alt="" className="circle" />
        <span className="card-title">{props.username}</span>
        <p className="card-places">{props.places.length} {props.places.length <= 1 ? 'Place':'Places'}</p>
      </div>
    </div>
  );
};

export default UserItem;
