import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';
import { v4 as uuidv4 } from 'uuid';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {Object.keys(options).map(el => (
        <button
          type="button"
          key={uuidv4()}
          onClick={onLeaveFeedback}
          className={s.btn}
          name={el}
        >
          {el}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propType = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
