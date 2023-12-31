import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = ({ todosProps, handleChange, delTodo }) => (
  <ul>
    {todosProps.map((todo) => (
      <TodoItem key={todo.id} itemProp={todo} handleChange={handleChange} delTodo={delTodo} />
    ))}
  </ul>
);

TodosList.propTypes = {
  todosProps: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default TodosList;
