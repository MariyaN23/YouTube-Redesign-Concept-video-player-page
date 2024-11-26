import menu from '../../assets/images/Header/Menu.svg'
import logo from '../../assets/images/Header/Logo.svg'
import search from '../../assets/images/Header/Search.svg'
import video from '../../assets/images/Header/Video.svg'
import shape from '../../assets/images/Header/CombinedShape.svg'
import bell from '../../assets/images/Header/Bell.svg'
import userImg from '../../assets/images/Header/Userpic.jpg'
import more from '../../assets/images/Header/More.svg'
import s from './Header.module.scss'

export const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <button>
                    <img src={menu} alt="Menu"/>
                </button>
                <button>
                    <img src={logo} alt="Logo"/></button>
                <div className={s.search}>
                    <input type="text" placeholder="Search" aria-label="Search"/>
                    <button><img src={search} alt="Search"/></button>
                </div>
            </div>
            <div className={s.user}>
                <button><img src={video} alt="Video"/></button>
                <button><img src={shape} alt="Combined Shape"/></button>
                <button className={s.bell}>
                    <img src={bell} alt="Bell"/>
                    <span className={s.count}>3</span>
                </button>
                <button><img src={userImg} alt="User image"/></button>
                <button><img src={more} alt="More info"/></button>
            </div>
        </header>
    )
}