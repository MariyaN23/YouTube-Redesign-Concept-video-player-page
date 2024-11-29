import s from './Header.module.scss'
import {HeaderData} from "../data/header-data.ts";
import {MenuIcon} from "../../assets/icons/Header/MenuIcon.tsx";
import {LogoIcon} from "../../assets/icons/Header/LogoIcon.tsx";
import {SearchIcon} from "../../assets/icons/Header/SearchIcon.tsx";
import {VideoIcon} from "../../assets/icons/Header/VideoIcon.tsx";
import {ApplicationsIcon} from "../../assets/icons/Header/ApplicationsIcon.tsx";
import {BellIcon} from "../../assets/icons/Header/BellIcon.tsx";
import {MoreIcon} from "../../assets/icons/Header/MoreIcon.tsx";

type HeaderPropsType = {
    data: HeaderData
}

export const Header = ({data}: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <button>
                    <MenuIcon/>
                </button>
                <button><LogoIcon/></button>
                <div className={s.search}>
                    <input type="text" placeholder="Search" aria-label="Search"/>
                    <button><SearchIcon/></button>
                </div>
            </div>
            <div className={s.user}>
                <button><VideoIcon/></button>
                <button><ApplicationsIcon/></button>
                <button className={s.bell}>
                    <BellIcon/>
                    <span className={s.count}>{data.notifications}</span>
                </button>
                <button><img src={data.image} alt="User image"/></button>
                <button><MoreIcon/></button>
            </div>
        </header>
    )
}