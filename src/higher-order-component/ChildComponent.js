import higherOrderComponent from "./higherOrderComponent";

const ChildComponent = (props) => {
  return <div>{props.user.firstName}</div>;
};

export default higherOrderComponent(ChildComponent);
