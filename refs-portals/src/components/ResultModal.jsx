import React, { useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function ResultModal({ref, remainingTime, targetTime, onReset}) {

  const dialog = useRef();

  const score = ((1 - ((remainingTime / 1000) / targetTime)) * 100).toFixed(2);

  useImperativeHandle(ref, () => {
  return {
    open() {
      dialog.current.showModal();
    }
  }
  })

  return createPortal(
    <dialog ref={dialog} className='result-modal' onClose={onReset}>
      <h2>You {remainingTime > 0 ? "won" : "lost"}</h2>
      {remainingTime > 0 ? <h2>Your score: {score}%</h2> : null}
      <p>
        The target time was <strong>{targetTime} seconds</strong>.
      </p>
      <p>
        You stopped the timer with <strong> {(remainingTime / 1000).toFixed(2)} seconds left</strong>.
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
};
