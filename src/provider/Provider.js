import React from "react";

const ListingsContext = React.createContext(null);

export function useListingsContext() {
  return React.useContext(ListingsContext);
}

const Provider = (props) => {
  const listings = [
    { id: 1, name: "Listing 1" },
    { id: 2, name: "Listing 2" },
  ];

  if (!listings) return null;

  return (
    <ListingsContext.Provider value={listings}>
      {props.children}
    </ListingsContext.Provider>
  );
};

export default Provider;
