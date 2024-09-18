import PropTypes from 'prop-types';


export const Grid = ({ width, height, selectedCells, onCellClick }) => {
    return (
      <div style={{ display: 'inline-grid', gridTemplateColumns: `repeat(${width}, 20px)` }}>
        {[...Array(width * height)].map((_, index) => (
          <div
            key={index}
            style={{
              width: '20px',
              height: '20px',
              border: '1px solid black',
              boxSizing: 'border-box',
              backgroundColor: selectedCells.has(index) ? 'blue' : 'white',
              cursor: 'pointer'
            }}
            onClick={() => onCellClick(index)}
          />
        ))}
      </div>
    );
  };
  
  Grid.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    selectedCells: PropTypes.instanceOf(Set).isRequired,
    onCellClick: PropTypes.func.isRequired
  };