import PropTypes from 'prop-types';

const TodoItem = ({ itemProp, handleChange, delTodo }) => (
  <li>
    <input type="checkbox" checked={itemProp.completed} onChange={() => handleChange(itemProp.id)} />
    <button type="submit" onClick={() => delTodo(itemProp.id)}>Delete</button>
    {itemProp.title}
  </li>
);

TodoItem.propTypes = {
  itemProp: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default TodoItem;
