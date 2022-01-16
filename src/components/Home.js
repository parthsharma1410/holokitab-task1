import React from "react";
import Book1 from "../img/book1.jfif";
import Book2 from "../img/book2.jfif";
import Book3 from "../img/book3.jpg";

const Home = ({ signOut, user }) => {
  console.log(user);
  return (
    <div className="wrapper">
      <h2 className="main-heading">Welcome to Holokitab 👋, {user.phoneNumber}</h2>
      <button className="main-button" id="signOut" onClick={signOut}>
        Sign Out
      </button>
      <div className="flexbox">
        <div className="image-padd">
            <img src={Book1} width="125%" alt="img1" />
            <h4>Book1</h4>
        </div>
        <div className="image-padd">
            <img src={Book2} width="135%" alt="img2" />
            <h4>Book2</h4>
        </div>
        <div className="image-padd">
            <img src={Book3} width="90%" alt="img3" />
            <h4>Book3</h4>
        </div>
      </div>
    </div>
  );
};

export default Home;