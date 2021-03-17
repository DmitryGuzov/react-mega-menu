import React, { Component } from "react";
import { render } from "react-dom";

import "./style.css";

import ReactMegaMenu from "react-mega-menu";

const Item = () => {
  return (
    <ul>
      <li>as</li>
      <li>ff</li>
      <li>asdasd</li>
    </ul>
  );
};
const Item2 = () => {
  return (
    <img
      src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
      alt="image"
      width="300px"
      height="300px"
    />
  );
};

const MOCK_CATEGORIES = [
  {
    label: "Category1",
    key: "Category1",
    items: <Item />,
  },
  {
    label: "Category2",
    key: "Category2",
    items: <Item2 />,
  },
  {
    label: "Category3",
    key: "Category3",
    items: <Item />,
  },
];

const values = ["LEFT", "RIGHT"];

export default class Test extends Component {
  state = {
    direction: values[1],
  };

  clickButton = (direction) => () => {
    this.setState({ direction });
  };
  componentDidMount() {
    let wrapper = document.getElementById("custom");
    let asd: number = wrapper?.children[0].children.length as number;
    console.log(wrapper?.children[0].children.length);
    if (asd >= 2) {
      console.log("active");
      wrapper?.children[0].children[1].classList.add("active");
    }
  }
  render() {
    return (
      <div>
        <h1>react-mega-menu Demo</h1>

        <div
          style={{
            position: "relative",
            width: "100%",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div className="custom_menu" id="custom">
            <ReactMegaMenu
              styleConfig={{
                menuItemSelectedProps: {
                  style: {
                    height: "40px",
                    backgroundColor: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    paddingLeft: "20px",
                    marginLeft: "0",
                  },
                },
              }}
              direction={this.state.direction}
              data={MOCK_CATEGORIES}
            />
          </div>
        </div>
        <div style={{ position: "absolute", top: "50%" }}>
          <h2>Component Outline:</h2>
          <fieldset
            style={{
              width: "30em",
              height: "20em",
              borderColor: "blue",
            }}
          >
            <legend>
              <b>container</b>
            </legend>
            <div
              style={{
                width: "100%",
                height: "95%",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <fieldset style={{ borderColor: "red", width: "20%" }}>
                <legend>
                  <b>menu</b>
                </legend>
                <fieldset style={{ borderColor: "green" }}>
                  <legend>
                    <b>menuItem</b>
                  </legend>
                </fieldset>
                <fieldset style={{ borderColor: "green" }}>
                  <legend>
                    <b>menuItem</b>
                  </legend>
                </fieldset>
                <fieldset style={{ borderColor: "purple" }}>
                  <legend>
                    <b>menuItemSelected</b>
                  </legend>
                </fieldset>
              </fieldset>
              <fieldset style={{ borderColor: "orange", width: "80%" }}>
                <legend>
                  <b>content</b>
                </legend>
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <label>data[selected].items</label>
                </div>
              </fieldset>
            </div>
          </fieldset>
          <h2>Structure</h2>
          <div className="menu">
            <ul className="menu-list">
              <li className="menu-item"></li>
            </ul>
            <div className="showed-div">
              <div>content</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
