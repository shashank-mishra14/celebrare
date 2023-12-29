import React from 'react';

const ColorBox = ({ colorOptions, onColorChange }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row-reverse', marginRight:'87vmax' }}>
      {colorOptions.map((color, index) => (
        <div
          key={index}
          style={{
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            background: color,
            margin: '0 5px',
            cursor: 'pointer',
          }}
          onClick={() => onColorChange(color)}
        />
      ))}
    </div>
  );
};

export default ColorBox;
