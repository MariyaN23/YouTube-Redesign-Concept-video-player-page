import {Header} from './Header/Header.tsx'
import s from './VideoPlayerPage.module.scss'
import {Main} from './Main/Main.tsx'
import {Sidebar} from './Sidebar/Sidebar.tsx'
import {Menu} from "./Menu/Menu.tsx";
import {mainData} from "./data/main-data.ts";
import {sidebarData} from "./data/sidebar-data.ts";
import {headerData} from "./data/header-data.ts";

export const VideoPlayerPage = () => {
    return (
        <div className={s.videoPlayerPage}>
            <Header data={headerData}/>
            <Main data={mainData}/>
            <Sidebar data={sidebarData}/>
            <Menu/>
        </div>
    )
}