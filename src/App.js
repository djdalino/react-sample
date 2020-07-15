import React, { Component } from "react";
import axios from "axios";
import "./App.css";

//class base component
class App extends Component {
  //state objects
  state = {
    color: "",
    isNavbar: false,
    count: 0,
    name: "",
    title: "",
    body: "",
    items: [],
    result: 0,
  };

  //Life Cycle Hook triggers function after loading the page
  componentDidMount() {
    //this.handleGetData();
  }
  //to fetch data you must install the package axios using npm install axios
  handleGetData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    this.setState({ items: res.data }); //default property of axios getting the datas(ex: any.data)
  };

  getValue = (value) => {
    console.log(value);
  };
  handleChangeColor = (value) => {
    if (value === "red") {
      this.setState({ color: "red" });
    } else if (value === "blue") {
      this.setState({ color: "blue" });
    } else if (value === "green") {
      this.setState({ color: "green" });
    }
  };
  //adding data using axios.post
  handlePostData = async () => {
    const data = {
      userId: 3,
      id: 3,
      title: this.state.title,
      body: this.state.body,
    };
    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      data
    );
    if (res) {
      console.log("okay");
    }
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
    //kinukuha ung value sa tinarget na name
    this.setState({ [e.target.name]: e.target.value });
  };
  // function that submit all required field in the form
  handleSubmit = (event) => {
    //to prevent reloading once submitted
    event.preventDefault();
    //object destructuring
    const { name, address } = this.state;

    //condition where state object name address
    if (name === "" && address === "") {
      console.log("Please input a name and address");
    } else {
      console.log("submitted");
    }
  };

  handleNavbarScroll = () => {
    window.addEventListener("scroll", () => {
      let windowHeight = window.scrollY;
      if (windowHeight > 200) {
        this.setState({ isNavbar: true });
      }
    });
  };
  handleAddButton = (num1, num2) => {
    this.setState({ result: num1 + num2 });
  };
  render() {
    //tinetesting kung may laman na ang state na items:[]
    console.log(this.state.items);
    return (
      <div className={`container ${this.state.isNavbar ? "" : "add"}`}>
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
          <input
            type="text"
            name="title"
            onChange={this.handleOnChange}
            value={this.state.title}
          />
          <input
            type="text"
            name="body"
            onChange={this.handleOnChange}
            value={this.state.body}
          />
          <input type="submit" value="submit" />
        </form>
        <div className={`box ${this.state.color}`}></div>
        <button onClick={() => this.handleChangeColor("red")}>red</button>
        <button onClick={() => this.handleChangeColor("blue")}>blue</button>
        <button onClick={() => this.handleChangeColor("green")}>green</button>

        <div>{this.state.result}</div>
        <button onClick={() => this.handleAddButton(5, 9)}>Add</button>
        {/*Dito kinukuha natin lahat ng data na nakastore sa state natin na items:[] */}
        {this.state.items.map((item) => {
          return (
            <div key={item.id}>
              {item.title}
              <button onClick={() => this.getValue(item.id)}>click</button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
