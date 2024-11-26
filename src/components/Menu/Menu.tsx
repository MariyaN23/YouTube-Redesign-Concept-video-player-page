import s from './Menu.module.scss'
import home from '../../assets/images/Menu/Home.svg'
import trending from '../../assets/images/Menu/Trending.svg'
import subscriptions from '../../assets/images/Menu/Subscriptions.svg'
import library from '../../assets/images/Menu/Library.svg'

export const Menu = () => {
    return (
        <nav className={s.menu}>
            <a><img src={home} alt="Home"/>Home</a>
            <a><img src={trending} alt="Trending"/>Trending</a>
            <a><img src={subscriptions} alt="Subscriptions"/>Subscriptions</a>
            <a><img src={library} alt="Library"/>Library</a>
        </nav>
    )
}