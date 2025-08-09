import { useDispatch } from 'react-redux';
import Button from '../../UI/Button';
import { deleteItem } from './cartSlice';

const DeleteItems = ({ pizzaId }) => {
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(deleteItem(pizzaId))} type="small">
      Remove From Cart
    </Button>
  );
};

export default DeleteItems;
