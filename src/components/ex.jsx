import React from 'react';
import UndoRedo from './UndoRedo'; 

const Apps = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#ffffff' }}>
      <div style={{ width: '100%', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <UndoRedo />
      </div>
    </div>
  );
};

export default Apps;
