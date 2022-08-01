import css from './feedback.module.css';
import PropTypes from 'prop-types';

const Feedback = ({ options, onHandleIncrement }) => {
  return (
    <>
      {options.map(option => {
        return (
          <button
            className={css.button}
            key={option}
            onClick={() => onHandleIncrement(option)}
          >
            {option}
          </button>
        );
      })}
    </>
  );
};
Feedback.propTypes = {
  options: PropTypes.array.isRequired,
  onHandleIncrement: PropTypes.func.isRequired,
};
export default Feedback;
