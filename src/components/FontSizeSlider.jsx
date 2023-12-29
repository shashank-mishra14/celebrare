import React from 'react';

const FontSizeSlider = ({ value, onChange }) => {
  return (
    <div style={{paddingLeft:'90vmax', marginBottom: '10px',}}>
      <label>
        Font Size:
        <input
          type="range"
          min="12"
          max="36"
          step="1"
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value, 10))}
          style={{ marginLeft: '5px' }}
        />
        {value}px
      </label>
    </div>
  );
};

export default FontSizeSlider;
