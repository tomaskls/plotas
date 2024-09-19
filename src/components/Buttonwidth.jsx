import PropTypes from 'prop-types';
import style from './Buttonwidth.module.css'

export const Buttonwidth = ({ value, onChange, label }) => {
  return (
    <div className={style.buttonBlock}>
      <button className={style.button} onClick={() => onChange(Math.max(0, value - 1))}>-</button>
      <span>{label}: {value}</span>
      <button className={style.button} onClick={() => onChange(value + 1)}>+</button>
    </div>
  );
};

Buttonwidth.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};