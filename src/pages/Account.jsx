import React from "react";
import { auth } from "../firebase/init";

import { signOut } from "firebase/auth";
import Nav from "../components/nav";

const Account = ({user, setUser, setUserExists}) => {
 function logOut(){
signOut(auth);
setUser({});
setUserExists(false);

 }


  return (
    <div>
      <Nav  />
      <button onClick={logOut} className="signout">
        signout
      </button>
    </div>
  );
};

export default Account;
