/* eslint-disable react/prop-types */
import './Input.css';

const Inputs = ({ text, type, name, value, isDisabled, handler, functionError }) => {
  const handleBlur = (e) => {
    try {
      // Llama a la función proporcionada por functionError y maneja cualquier error
      if (functionError) {
        functionError(e);
      }
    } catch (error) {
      console.error('Error in Inputs onBlur:', error);
    }
  };

  return (
    <div className="custom-input-wrapper">
      <input
        type={type}
        name={name}
        placeholder={text}
        value={value}
        onChange={(e) => handler(e)}
        maxLength={50}
        onBlur={handleBlur}
        disabled={isDisabled}
        className={`custom-input ${isDisabled ? 'disabled' : ''}`}
      />
    </div>
  );
};

export default Inputs;
