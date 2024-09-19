import { useState, useCallback } from 'react';
import { Buttonwidth } from './Buttonwidth';
import { Buttonheight } from './Buttonheight';
import { Grid } from './Grid';
import { Statistics } from './Statistics';
import style from './InteractiveGrid.module.css'





export const InteractiveGrid = () => {
  const [width, setWidth] = useState(1);
  const [height, setHeight] = useState(1);
  const [selectedCells, setSelectedCells] = useState(new Set());

  const handleCellClick = useCallback((index) => {
    setSelectedCells(prevSelected => {
      const newSelected = new Set(prevSelected);
      if (newSelected.has(index)) {
        newSelected.delete(index);
      } else {
        newSelected.add(index);
      }
      return newSelected;
    });
  }, []);

  const totalCells = width * height;
  const totalleft = width;
  const totaldown = height;

  return (
    <div>
      <div className={style.stats}>

        <Statistics totalwidth={totalleft} totalheight={totaldown} total={totalCells} selected={selectedCells.size} />

      </div>
      <div className={style.mainContainer}>
        <div className={style.cellswidth}>
          <img src="/m2.png" alt="m2" />
          <Buttonwidth value={width} onChange={setWidth} label="Plotis" />
        </div>

        <div className={style.container}>

          <div className={style.cellsheight}>
            <Buttonheight value={height} onChange={setHeight} label="Aukštis" />

          </div>


          <div className={style.cells}>
            <Grid
              width={width}
              height={height}
              selectedCells={selectedCells}
              onCellClick={handleCellClick}
            />
          </div>
        </div>
      </div>
    </div>


  );
};

