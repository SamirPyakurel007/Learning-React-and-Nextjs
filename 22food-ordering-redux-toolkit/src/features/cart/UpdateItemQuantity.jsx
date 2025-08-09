import { useDispatch } from 'react-redux';
import Button from '../../UI/Button';
import { decreaseQuantity, increaseQuantity } from './cartSlice';

const UpdateItemQuantity = ({ pizzaId, currentQuantity }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button onClick={() => dispatch(decreaseQuantity(pizzaId))} type="round">
        -
      </Button>
      <p>{currentQuantity}</p>
      <Button onClick={() => dispatch(increaseQuantity(pizzaId))} type="round">
        +
      </Button>
    </div>
  );
};

export default UpdateItemQuantity;
