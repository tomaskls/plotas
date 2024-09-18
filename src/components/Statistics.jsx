import PropTypes from 'prop-types';

export const Statistics = ({ total, selected }) => {
    return (
      <div>
        <p>Viso langelių: {total}</p>
        <p>Laisvų langelių: {total - selected}</p>
        <p>Pažymėtų langelių: {selected}</p>
      </div>
    );
  };
  
  Statistics.propTypes = {
    total: PropTypes.number.isRequired,
    selected: PropTypes.number.isRequired
  };