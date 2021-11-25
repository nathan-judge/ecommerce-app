function Confirmation(props) {
  return (
    <div className="App">
     Confirmed order {props.match.params.orderId}
    </div>
  );
}

export default Confirmation;