import PropTypes from 'prop-types';

export const Statistics = ({ total, selected }) => {
    return (
      <div>
        <p>Plotas: {total} m2 iš kurių { selected} m2 užimta </p>
      </div>
    );
  };
  
  Statistics.propTypes = {
    total: PropTypes.number.isRequired,
    selected: PropTypes.number.isRequired
  };