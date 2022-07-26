import React, { FC, useState, useRef } from 'react';

export const EventsExample: FC = () => {
  const [value, setValue] = useState<string>('');
  const [isDrag, setIsDrag] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);
  
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    alert(`неуправляемый инпут-->${inputRef.current?.value},  управляемый инпут-->${value}`);
  };

  const dragHandler = (event: React.DragEvent<HTMLDivElement>) => {
    console.log('DRAG');
  };

  const dragWithPreventHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDrag(true);
  };

  const leaveHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDrag(false);
  };

  const dropHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDrag(false);
    console.log('DROP');
  };


  return (
    <div>
      <input type="text" ref={inputRef} style={{display: "block"}} placeholder="Неуправляемый инпут(useRef)"/>

      <input type="text" value={value} onChange={changeHandler} placeholder="Управляемый инпут"/>

      <button onClick={clickHandler}>Alert</button>

      <div
        draggable
        onDrag={dragHandler}
        style={{width: "200px", height: "200px", background: "blue"}}
      >
        1st div DragEvent
      </div>

      <div
        onDrop={dropHandler}
        onDragLeave={leaveHandler}
        onDragOver={dragWithPreventHandler}
        style={{
          width: "200px", 
          height: "200px", 
          background: isDrag ? "yellowgreen" : "yellow", 
          marginTop: 15
        }}
      >
        2nd div DropEvent
      </div>
    </div>
  )
}
