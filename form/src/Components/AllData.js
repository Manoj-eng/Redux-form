import React from "react";

const AllData = ({ Name ,email }) => {
  return (
    <div>
      <div> User's  Name is:<strong>{Name}</strong></div>
      <br />
      
      <div>User's Email id is: <strong>{email} </strong> </div>

    </div>
  );
};

export default AllData;