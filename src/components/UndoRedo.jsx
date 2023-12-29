import React, { useState } from 'react';
import ColorBox from './ColorBox';
import FontSizeSlider from './FontSizeSlider';

const UndoRedo = () => {
  const [text, setText] = useState('');
  const [history, setHistory] = useState([]);
  const [future, setFuture] = useState([]);
  const [fontColor, setFontColor] = useState('#000000');
  const [fontSize, setFontSize] = useState(16);

  const handleChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    setHistory([...history, { text, fontColor, fontSize }]);
    setFuture([]);
  };

  const handleUndo = () => {
    if (history.length > 0) {
      const previousState = history.pop();
      setFuture([{ text, fontColor, fontSize }, ...future]);
      setText(previousState.text);
      setFontColor(previousState.fontColor);
      setFontSize(previousState.fontSize);
      setHistory([...history]);
    }
  };

  const handleRedo = () => {
    if (future.length > 0) {
      const nextState = future.shift();
      setHistory([...history, { text, fontColor, fontSize }]);
      setText(nextState.text);
      setFontColor(nextState.fontColor);
      setFontSize(nextState.fontSize);
      setFuture([...future]);
    }
  };

  const handleColorChange = (color) => {
    setFontColor(color);
  };

  const handleFontSizeChange = (value) => {
    setFontSize(value);
  };

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column',width:'100%' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '10px',position:'sticky' }}>
        <button onClick={handleUndo}>Undo</button>
        <button onClick={handleRedo}>Redo</button>
        <input
          type="color"
          value={fontColor}
          onChange={(e) => handleColorChange(e.target.value)}
          style={{ marginLeft: '10px' }}
        />
      </div>
      <ColorBox colorOptions={['#000000', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF']} onColorChange={handleColorChange} />
      <FontSizeSlider value={fontSize} onChange={handleFontSizeChange} />
      <textarea
        value={text}
        onChange={handleChange}
        style={{
          width: '100%',
          height: '100vh',
          fontSize: `${fontSize}px`,
          border: 'none',
          outline: 'none',
          color: fontColor,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
    </div>
  );
};

export default UndoRedo;
