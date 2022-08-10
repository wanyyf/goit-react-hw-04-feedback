import propTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <>
      <ul>
        {options.map(el => {
          return (
            <li key={el.id}>
              <button type={el.type} name={el.id} onClick={onLeaveFeedback}>
                {el.title}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
FeedbackOptions.propTypes = {
  onLeaveFeedback: propTypes.func.isRequired,
};
export default FeedbackOptions;
