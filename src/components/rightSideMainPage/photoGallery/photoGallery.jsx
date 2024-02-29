import './photoGallery.scss';

export const PhotoGallery = () => {
	return (
		<section className='gallery'>
			<div className='gallery_into'>
				<div className='gallery_into_tabs'>
					<ul className='gallery_into_tabs_list'>
						<li className='gallery_into_tabs_list-item'>Photos</li>
						<li className='gallery_into_tabs_list-item'>Music</li>
						<li className='gallery_into_tabs_list-item'>Albums</li>
						<li className='gallery_into_tabs_list-item'>Clips</li>
						<li className='gallery_into_tabs_list-item'>Stories</li>
					</ul>
				</div>
				<div className='gallery_into_photos'>
					<div className='gallery_into_photos-item'>
						<img
							width='230px'
							height='250px'
							src='https://sun9-1.userapi.com/impg/_xUCqVjhLabqXolbBMOS9Q3MVbpLJCWgYy8Dag/jJL8lr2nItY.jpg?size=1156x1583&quality=95&sign=df8002f55f4b3fbac043c337358b3f77&type=album'
							alt=''
						/>
					</div>
					<div className='gallery_into_photos-item'>
						<img
							width='230px'
							height='250px'
							src='https://sun9-56.userapi.com/impg/MitNwTQ-CfxjdBgGB4SY-1Z_AdB_fSZuXDZGUg/gIpHGZRMMgk.jpg?size=1200x1200&quality=95&sign=4050a0cf6c016808e0a34f70f95869e1&type=album'
							alt=''
						/>
					</div>
					<div className='gallery_into_photos-item'>
						<img
							width='230px'
							height='250px'
							src='https://sun9-23.userapi.com/impg/IeMder_0JzGBMmsFU8jSkOISV3n-k3WPNV2Hrg/t10ttgY9YHA.jpg?size=714x638&quality=95&sign=877138d1b2e007fed7b5b62d0d9b0185&type=album'
							alt=''
						/>
					</div>
					<div className='gallery_into_photos-item'>
						<img
							width='230px'
							height='250px'
							src='https://sun9-59.userapi.com/impg/wEAWxiHSluUiOgrNw4MBG-FK2giCUkaJDOBYMw/uA71ja9hpIM.jpg?size=1080x918&quality=95&sign=91661d436091d320da76727e327a3586&type=album'
							alt=''
						/>
					</div>
					<div className='gallery_into_photos-item'>
						<img
							width='230px'
							height='250px'
							src='https://sun9-41.userapi.com/impg/OBBIPtOPpbJi7I4AnYJHaK9HY0ChAfC0uOYZ8w/Qpkl0KiOOnY.jpg?size=795x795&quality=95&sign=b33262b0273866b5ade0b6235be0d82c&type=album'
							alt=''
						/>
					</div>
					<div className='gallery_into_photos-item'>
						<img
							width='230px'
							height='250px'
							src='https://sun9-80.userapi.com/impg/DRlyR5WcsYwbZc4QVmpWsfwEkA6WvCP2dayVQA/rX8tjo3yd_g.jpg?size=1534x1600&quality=95&sign=1759da733c15030100c95cfc47c4ee8b&type=album'
							alt=''
						/>
					</div>
					<div className='gallery_into_photos-item'>
						<img
							width='230px'
							height='250px'
							src='https://sun9-45.userapi.com/impg/gc5fAUczorthIwDH-nD97qHHjR5Rlh83V-Mfdg/lA8xU950qGE.jpg?size=2000x1413&quality=96&sign=7d3be7707517dc26c6e605dd4df4e92c&type=album'
							alt=''
						/>
					</div>
				</div>
				<div className='gallery_into_btns'></div>
			</div>
		</section>
	);
};
