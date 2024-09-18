import PropTypes from 'prop-types';
import style from './Grid.module.css'

export const Grid = ({ width, height, selectedCells, onCellClick }) => {
  return (
    <div className={style.container} style={{ gridTemplateColumns: `repeat(${width}, 3rem)` }}>
      {[...Array(width * height)].map((_, index) => (
        <div className={style.cell}
          key={index}
          style={{
            backgroundColor: selectedCells.has(index) ? 'blue' : 'white',
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