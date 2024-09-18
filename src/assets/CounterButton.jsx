import PropTypes from 'prop-types';


export const CounterButton = ({ value, onChange, label }) => {
    return (
      <div>
        <button onClick={() => onChange(Math.max(0, value - 1))}>-</button>
        <span>{label}: {value}</span>
        <button onClick={() => onChange(value + 1)}>+</button>
      </div>
    );
  };
  
  CounterButton.propTypes = {
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
  };