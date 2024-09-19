import PropTypes from 'prop-types';

export const Statistics = ({ totalwidth,totalheight,total, selected }) => {
    return (
      <div>
        <p>Plotas: {totalwidth} x {totalheight} = {total} m² iš kurių: {selected} m² užimta </p>
      </div>
    );
  };
  
  Statistics.propTypes = {
    selected: PropTypes.number.isRequired,
    totalheight: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    totalwidth: PropTypes.number.isRequired,
  };