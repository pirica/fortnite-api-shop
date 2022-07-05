import { Link } from 'react-router-dom';
import { AiOutlineShopping } from 'react-icons/ai';

const Header = () => {
	return (
		<header className='bg-blue-600'>
			<div className='container text-white py-5 grid grid-cols-3 items-center'>
				<ul>
					<li>
						<Link to='/all-skins'>Все скины</Link>
					</li>
				</ul>
				<div className='font-bold text-3xl uppercase text-center'>
					<Link to='/'>fortnite.api</Link>
				</div>
				<div className='justify-self-end'>
					<Link to='/cart'>
						<div className='relative flex items-center'>
							<AiOutlineShopping className='w-12 h-12' />
							<span className='absolute top-1/3 right-1/2 translate-x-1/2  w-6 h-6 text-white font-bold flex justify-center items-center select-none'>
								3
							</span>
						</div>
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;
