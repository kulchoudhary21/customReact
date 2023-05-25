const element = React.createElement(
  "div",
  { className: "student", style: { color: "red", backgroundColor: "blue" } },
  "a",
  React.createElement("div", {}, "Hiii"),
  React.createElement("h3", {}, "hello"),
  "HIi How are you ?"
);
console.log(element);
 let h2 = {
  $$typeof: Symbol.for('react.element'),
  type: "div",
  key: null,
  ref: null,
  props: {
    className: "student",
    style: {
      color: "red",
      backgroundColor: "blue",
    },
    children:"Hello"
  },
  _owner: null,
  _store: {},
};

// React.crea
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(h2);
root.render(h2);
