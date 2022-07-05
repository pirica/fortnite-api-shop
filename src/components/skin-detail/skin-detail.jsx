import { useEffect } from 'react';
import { API_KEY } from '../../config';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const SkinDetail = () => {
	const { skinId } = useParams();
	const [skin, setSkin] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch(`https://fortniteapi.io/v2/items/get?id=${skinId}&lang=ru`, {
			headers: {
				Authorization: API_KEY,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				setSkin(data.item);
				setIsLoading(false);
			});
	}, [skinId]);

	console.log(skin);

	return (
		<div className='container my-auto py-5'>
			{isLoading ? (
				<h2>Loading...</h2>
			) : (
				<div>
					<h2 className='text-center py-5 font-bold text-2xl uppercase'>
						{skin.name}
					</h2>

					<div className='flex max-w-4xl border mx-auto shadow-md items-center'>
						<div className='select-none w-80 h-80'>
							<img
								src={skin.images.background}
								alt={skin.name}
								className='object-cover w-full h-full'
							/>
						</div>
						<div className='space-y-2 p-5'>
							<div>
								<span className='font-bold'>Добавлено: </span>
								<span>{skin.added.date}</span>
							</div>

							<div>
								<span className='font-bold'>Популярность: </span>
								<span>{skin.interest}</span>
							</div>

							<div>
								<span className='font-bold'>Цена: </span>
								<span>{skin.price} руб.</span>
							</div>

							<div>
								<span className='font-bold'>Редкость: </span>
								<span>{skin.rarity.name}</span>
							</div>

							<div>
								<span className='font-bold'>Тип: </span>
								<span>{skin.type.name}</span>
							</div>

							<div>
								<span className='font-bold'>Описание: </span>
								<span>{skin.description || 'Нет описании'}</span>
							</div>

							<div>
								<button className='bg-blue-600 text-white border border-transparent px-7 py-2 select-none hover:bg-transparent hover:text-blue-600 hover:border-blue-600'>
									купить
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default SkinDetail;