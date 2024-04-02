import { Food as FoodModel } from '../models/food';
import { IoRemoveCircle } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import useFoodsContext from '../hooks/useFoodsContext';

interface FoodProps {
  food: FoodModel,
}

const Food = ({ food }: FoodProps) => {
  const { handleUpdate, handleDelete } = useFoodsContext();

  return (
    <div className='bg-white flex justify-between items-center w-[410px] px-4 py-2 
      rounded-lg hover:bg-[#f0f0f0]'>
      <div>
        <h3 className='font-semibold font-Rounded1c'>{food.name}</h3>
        <p className='text-[0.8rem] font-Rounded1c'>
          <span>{food.kCal}</span> cals
        </p>
      </div>
      <div>
        <p className='text-[0.8rem] font-Rounded1c'>
          Carbs: <span>{food.carbs}</span>g
        </p>
        <p className='text-[0.8rem] font-Rounded1c'>
          Protein: <span>{food.protein}</span>g
        </p>
        <p className='text-[0.8rem] font-Rounded1c'>
          Fat: <span>{food.fat}</span>g
        </p>
      </div>
      <div className='flex gap-x-1'>
        <div className='min-w-[30px]'>
          <IoRemoveCircle 
            title='Remove'
            onClick={() => handleUpdate(food)}
            className='text-[#FB7271] hover:text-[#ed6564] cursor-pointer active:w-7' 
            size={30} 
          />
        </div>
        <div className='min-w-[30px]'>
          <MdDelete 
            title='Delete'
            onClick={() => handleDelete(food)}
            className='text-[#FB7271] hover:text-[#ed6564] cursor-pointer active:w-7' 
            size={30} 
          />
        </div>
      </div>
    </div>
  );
}

export default Food;
