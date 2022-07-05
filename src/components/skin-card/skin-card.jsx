import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cartSlice';

const SkinCard = ({ skin }) => {
	const dispatch = useDispatch();
	const { displayName, mainId } = skin;
	const id = mainId.toLowerCase();
	const name = displayName.toLowerCase();

	const { finalPrice } = skin.price;
	const { background } = skin.displayAssets[0];

	const navigate = useNavigate();

	const handleAddToCart = () => {
		dispatch(addToCart(skin));
	};

	const onNavigateHandler = () => {
		navigate(`/${id}`);
	};

	return (
		<div className='w-full shadow'>
			<div className='select-none cursor-pointer'>
				<img src={background} alt={name} onClick={onNavigateHandler} />
			</div>
			<div className='space-y-2 py-3 px-2'>
				<h2 className='line-clamp-1 capitalize'>{name}</h2>
				<div className='flex justify-between items-center'>
					<span>Цена:</span>
					<span>{finalPrice} руб.</span>
				</div>
				<div className='flex justify-center'>
					<button
						className='bg-blue-600 text-white border border-transparent px-7 py-2 select-none hover:bg-transparent hover:text-blue-600 hover:border-blue-600'
						onClick={handleAddToCart}>
						купить
					</button>
				</div>
			</div>
		</div>
	);
};

export default SkinCard;
