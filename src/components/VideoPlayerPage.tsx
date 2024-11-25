import {Header} from './Header/Header.tsx'
import s from './VideoPlayerPage.module.scss'
import {Main} from './Main/Main.tsx'
import {Sidebar} from './Sidebar/Sidebar.tsx'

export const VideoPlayerPage = () => {
    return (
        <div className={s.videoPlayerPage}>
            <Header/>
            <Main/>
            <Sidebar/>
        </div>
    )
}