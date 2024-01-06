import { useListingsContext } from "./Provider";

const ChildComponent = () => {
  const listings = useListingsContext();
  return (
    <ul>
      {listings.map((listing) => (
        <li key={listing.id}>{listing.name}</li>
      ))}
    </ul>
  );
};

export default ChildComponent;
