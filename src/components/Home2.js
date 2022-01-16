import React from "react";
import Book1 from "../img/book1.jfif";
import Book2 from "../img/book2.jfif";
import Book3 from "../img/book3.jpg";

const Home = ({ signOut, user }) => {
  console.log(user);
  return (
    <div className="wrapper">
      <h1 className="main-heading">Welcome 👋, {user.phoneNumber}</h1>
      <button className="main-button" id="signOut" onClick={signOut}>
        Sign Out
      </button>
      <div>
          Enter authentication code
      </div>
    </div>
  );
};

export default Home;