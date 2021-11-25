import { Steps, Button, message } from "antd";
import { useState } from "react";
import "./checkout.scss";
import Address from "./Address";
import Payment from "./Payment";
import Confirmation from "./Confirmation"

const { Step } = Steps;

const steps = [
  {
    title: "First",
    content: "Address"
  },
  {
    title: "Second",
    content: "Payment"
  },
  {
    title: "Last",
    content: "Confirmation"
  }
];

function Checkout() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">
        {current === 0 && <Address />}
        {current === 1 && <Payment />}
        {current === 2 && <Confirmation />}
      </div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </>
  );
}

export default Checkout;
