import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./store";

function Counter(props) {
  return (
    <div>
      <p>Счет: {props.count}</p>
      <button onClick={props.increment}>Увеличить</button>
      <button onClick={props.decrement}>Уменьшить</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
