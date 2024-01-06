import HookExample from "./hook";
import ProviderExample from "./provider";
import RenderPropExample from "./render-prop";
import HOCExample from "./higher-order-component";
import PrestationalAndContainerExample from "./presentational-and-container-component";

const App = () => {
  return (
    <div>
      <HOCExample />
      <HookExample />
      <ProviderExample />
      <RenderPropExample />
      <PrestationalAndContainerExample />
    </div>
  );
};

export default App;
