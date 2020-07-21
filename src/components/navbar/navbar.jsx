import React from "react";
import { ContextConsumer } from "../../stateManagement/context";
const Navbar = () => {
  return (
    <div>
      <ContextConsumer>
        {(value) => {
          const { handleClickNavbar } = value;
          return (
            <div>
              <p>Navbar</p>
              <button onClick={handleClickNavbar}>Click</button>
            </div>
          );
        }}
      </ContextConsumer>
    </div>
  );
};

export default Navbar;
