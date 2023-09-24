import PropTypes from 'prop-types'
const ToDo = ({toDo}) => {
  return (
    <li>{toDo}</li>
  )
}

ToDo.propTypes = {
    toDo: PropTypes.string.isRequired,
  };

export default ToDo