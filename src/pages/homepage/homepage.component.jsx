import './homepage.style.scss';

import MenuItem from '../../components/menu-item/menu-item.component';

const HomePage = () => (
    <div className='homepage'>
        <div className= 'directory-menu'>
            <MenuItem className='menu-item' title='HATS' />
            <MenuItem className='menu-item' title='JACKETS' />
            <MenuItem className='menu-item' title='SHOES' />
            <MenuItem className='menu-item' title='MEN' />
            <MenuItem className='menu-item' title='WOMEN' />     
        </div>    
    </div>
)

export default HomePage;