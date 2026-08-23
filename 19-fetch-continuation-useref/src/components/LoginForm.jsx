import { useRef } from 'react';

const LoginForm = () => {
  const inputRef = useRef(null);

  const focusOnInput = () => {
    inputRef.current.focus();
  };

  return (
    <form>
      <label htmlFor="username">UserName</label>
      <input type="text" id="username" ref={inputRef} />
      <button type="button" onClick={focusOnInput}>Focus Input</button>
    </form>
  );
};

export default LoginForm;