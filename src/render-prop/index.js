import Input from "./Input";

const RenderPropBase = () => {
  return (
    <Input
      renderKelvin={({ value }) => <div className="temp">{value}K</div>}
      renderFahrenheit={({ value }) => <div className="temp">{value}°F</div>}
    />
  );
};

export default RenderPropBase;
