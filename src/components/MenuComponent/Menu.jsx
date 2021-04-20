import React,{useRef,useEffect} from 'react'
import './Menu.css'
import menuData from './data.js'
import SingleMenu from './SingleMenu'
import ClearIcon from '@material-ui/icons/Clear';

const MenuCard = ({closetoggleMenu}) => {
    const menuRef = useRef()

    useEffect(()=>{
        const handler = (e) => {
            if (!menuRef?.current?.contains(e.target)) {
              closetoggleMenu();
            }
          };
          document.addEventListener("click", handler);
          return () => document.removeEventListener("click", handler);
    })

    console.log(menuData)
    return (
        <div className='menu-div' >
            <div className='menu-card' ref={menuRef}>
            <div className="menu-header">
            <h4>Our Menu</h4>
            <button className='menu-close-btn' onClick={closetoggleMenu}><ClearIcon/></button>
            </div>
            {menuData?.map((menu,idx)=>(
                <SingleMenu key={idx} name={menu?.name} image={menu?.image} description={menu?.description} price={menu?.price} />
            ))}
            
            </div>
            
        </div>
    )
}

export default MenuCard
