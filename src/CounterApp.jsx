import { useState } from "react"
import PropTypes from "prop-types"

export const CounterApp = ({ value }) => {
  const [counterValue, setCounterValue] = useState(value);

  const handleIncrement = () => {
    setCounterValue(counterValue + 1);
  }

  const handleDecrement = () => {
    setCounterValue(counterValue - 1);
  }

  const handelReset = () => {
    setCounterValue(value);
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2> { counterValue } </h2>

      <button type="button" onClick={ handleIncrement }> +1 </button>
      <button type="button" onClick={ handleDecrement }> -1 </button>
      <button type="button" onClick={ handelReset }> reset </button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
}
