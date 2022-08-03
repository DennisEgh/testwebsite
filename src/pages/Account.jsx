import React from "react";
import { auth } from "../firebase/init";

import { signOut } from "firebase/auth";
import Nav from "../components/nav";

const Account = ({user, setUser}) => {
 function logOut(){
signOut(auth);
setUser({});
console.log(user)
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
