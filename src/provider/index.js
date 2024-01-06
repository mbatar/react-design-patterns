import Provider from "./Provider";
import ChildComponent from "./ChildComponent";

const index = () => {
  return (
    <Provider>
      <ChildComponent />
    </Provider>
  );
};

export default index;
