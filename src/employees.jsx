let sally = "Sally Smith";
let mark = "Mark Martin";
let holly = "Holly Unlikely";
let amol = "Amol Shookup";
let puneet = "Puneet Patil";
let raj = "Raj Shukla";
let rahul = "Rahul Shinde";
let sahil = "Sahil Dubey";
const element = (
  <ul style={{ color: "blue", fontSize: "24px" }}>
    <li>{sally}</li>
    <li>{mark}</li>
    <li>{holly}</li>
    <li>{amol}</li>
    <li>{puneet}</li>
    <li>{raj}</li>
    <li>{rahul}</li>
    <li>{sahil}</li>
  </ul>
);
ReactDOM.render(element, document.getElementById("content"));
