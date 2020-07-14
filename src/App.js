import React, { Component } from "react";
import "./App.css";

//class base component
class App extends Component {
  //state objects
  state = {
    navbar: true,
    count: 0,
    name: "",
    address: "",
    city: "",
    email: "",
  };

  //Life Cycle Hook triggers function after loading the page
  componentDidMount() {
    this.handleOnScroll();
  }
  //to fetch data you must install the package axios using npm install axios
  handleGetData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  };
  // function that decreases the object state count
  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  // function that increases the object state count
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  // function that reset the object state count to 0
  handleReset = () => {
    this.setState({ count: 0 });
  };

  // on scroll this function must trigger
  handleOnScroll = () => {
    console.log("scroll");
  };
  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // function that submit all required field in the form
  handleSubmit = (e) => {
    //to prevent reloading once submitted
    e.preventDefault();
    //object destructuring
    const { name, address } = this.state;

    //condition where state object name address
    if (name === "" && address === "") {
      console.log("Please input a name and address");
    } else {
      console.log("submitted");
    }
  };
  render() {
    return (
      <div className={`container ${this.state.navbar ? "" : "add"}`}>
        <p>{this.state.count}</p>
        <button
          onClick={() => this.handleDecrement()}
          disabled={this.state.count === 0 ? true : false}
        >
          Decrement
        </button>
        <button
          onClick={() => this.handleIncrement()}
          disabled={this.state.count === 10 ? true : false}
        >
          Increment
        </button>
        <button onClick={() => this.handleReset()}>Reset</button>

        <form onSubmit={this.handleSubmit}>
          <p>name: {this.state.name}</p>
          <input type="text" name="name" onChange={this.handleOnChange} />
          <input type="text" name="address" onChange={this.handleOnChange} />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default App;