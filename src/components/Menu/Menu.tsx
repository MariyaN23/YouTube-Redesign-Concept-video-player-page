import s from './Menu.module.scss'
import {HomeIcon} from "../../assets/icons/Menu/HomeIcon.tsx";
import {LibraryIcon} from "../../assets/icons/Menu/LibraryIcon.tsx";
import {TrendingIcon} from "../../assets/icons/Menu/TrendingIcon.tsx";
import {SubscriptionsIcon} from "../../assets/icons/Menu/SubscriptionsIcon.tsx";

export const Menu = () => {
    return (
        <nav className={s.menu}>
            <a><HomeIcon/>Home</a>
            <a><TrendingIcon/>Trending</a>
            <a><SubscriptionsIcon/>Subscriptions</a>
            <a><LibraryIcon/>Library</a>
        </nav>
    )
}