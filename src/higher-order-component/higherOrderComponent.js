const higherOrderComponent = (WrappedComponent) => {
  const user = {
    firstName: "John",
    lastName: "Doe",
    birthDate: "00.00.0000",
    email: "john.doe@icloud.com",
  };

  return (props) => <WrappedComponent user={user} {...props} />;
};

export default higherOrderComponent;
