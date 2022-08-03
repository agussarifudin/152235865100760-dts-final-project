import React, { useState } from "react";

const Home = () => {
  const [user] = useState(localStorage.email);
  const [login] = useState(localStorage.login);
  return login === "true" ? (
    
    <div>Welcome {user}</div>
  ) : (
    <div>Welcome To Agus Sarifudin Movie Site</div>
  );
};

export default Home;
