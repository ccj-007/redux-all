import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

const Dialog = (props) => {
  const node = document.createElement('div');
  document.body.appendChild(node);
  useEffect(() => {
    return () => {
      document.body.removeChild(node);
    };
  }, []);
  return createPortal(
    <div className="com-dialog">
      <div className="com-dialog-inner" style={{ width: props.dialogWidth }}>
        <div className="dialog-title">{props.title}asdsa</div>
        <div className="content">{props.children}asdasd</div>
        <div className="btn">
          asasdasdasdasdasdasdsa
        </div>
      </div>
    </div>,
    node
  )
}

export default Dialog;
