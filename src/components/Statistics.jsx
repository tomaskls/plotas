import PropTypes from 'prop-types';

export const Statistics = ({ total, selected }) => {
    return (
      <div>
        <p>Plotas: {total} m²   iš kurių: { selected} m² užimta </p>
      </div>
    );
  };
  
  Statistics.propTypes = {
    total: PropTypes.number.isRequired,
    selected: PropTypes.number.isRequired
  };