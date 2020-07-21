import React from "react";
import { ContextConsumer } from "../../../stateManagement/context";
const Home = () => {
  return (
    <div>
      <ContextConsumer>
        {(value) => {
          const {
            count,
            handleIncrement,
            handleDecrement,
            handleReset,
            handleClickNavbar,
          } = value;
          return (
            <div>
              <h1>Home Page Component</h1>{" "}
              <button onClick={handleClickNavbar}>Home Click</button>
              <div>
                <h1>Count: {count}</h1>

                <button
                  onClick={handleIncrement}
                  disabled={count === 10 ? true : false}
                >
                  Increment
                </button>
                <button
                  onClick={handleDecrement}
                  disabled={count === 0 ? true : false}
                >
                  Decrement
                </button>
                <button onClick={handleReset}>Reset</button>
              </div>
            </div>
          );
        }}
      </ContextConsumer>
    </div>
  );
};

export default Home;
