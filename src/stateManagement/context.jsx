import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

class ContextProvider extends Component {
  state = {
    color: "",
    isNavbar: false,
    count: 0,
    name: "",
    title: "",
    body: "",
    items: [],
    result: 0,

    isModal: true,
  };
  //Life Cycle Hook triggers function after loading the page
  componentDidMount() {
    //this.handleGetData();
  }
  handleClickNavbar = () => {
    console.log("handle navbar is working");
  };
  //to fetch data you must install the package axios using npm install axios
  handleGetData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    this.setState({ items: res.data }); //default property of axios getting the datas(ex: any.data)
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

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          handleChangeColor: this.handleChangeColor,
          handleDecrement: this.handleDecrement,
          handleIncrement: this.handleIncrement,
          handleReset: this.handleReset,
          handleClickNavbar: this.handleClickNavbar,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
const ContextConsumer = Context.Consumer;
export { ContextProvider, ContextConsumer };
