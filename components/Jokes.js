import PropTypes from 'prop-types';

export default function ShowJokes({ setup }) {
  return (
    <h1>{setup}</h1>
  );
}

ShowJokes.propTypes = {
  setup: PropTypes.string,
};

ShowJokes.defaultProps = {
  setup: 'No Joke Found',
};
