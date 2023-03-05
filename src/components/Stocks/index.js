import { Redirect, useHistory } from "react-router-dom";

function Stocks() {
  let loggedIn = true;
  let history = useHistory();

  const handleClick = () => {
    window.alert("Sending info to the DB!");
    history.push("/home");
  };

  if (loggedIn === false) {
    return <Redirect to="/not-in-logged-in" />;
  } else {
    return (
      <div className="comp orange">
        <h1>Stocks Component</h1>
        <button onClick={handleClick}>Home</button>
      </div>
    );
  }
}

export default Stocks;
