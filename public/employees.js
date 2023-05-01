let sally = "Sally Smith";
let mark = "Mark Martin";
let holly = "Holly Unlikely";
let amol = "Amol Shookup";
let puneet = "Puneet Patil";
let raj = "Raj Shukla";
let rahul = "Rahul Shinde";
let sahil = "Sahil Dubey";
const element = /*#__PURE__*/React.createElement("ul", {
  style: {
    color: "blue",
    fontSize: "24px"
  }
}, /*#__PURE__*/React.createElement("li", null, sally), /*#__PURE__*/React.createElement("li", null, mark), /*#__PURE__*/React.createElement("li", null, holly), /*#__PURE__*/React.createElement("li", null, amol), /*#__PURE__*/React.createElement("li", null, puneet), /*#__PURE__*/React.createElement("li", null, raj), /*#__PURE__*/React.createElement("li", null, rahul), /*#__PURE__*/React.createElement("li", null, sahil));
ReactDOM.render(element, document.getElementById("content"));