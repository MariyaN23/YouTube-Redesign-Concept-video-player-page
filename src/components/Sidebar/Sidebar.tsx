import s from './Sidebar.module.scss'
import {SidebarData} from '../data/sidebar-data.ts'

type SidebarPropsType = {
    data: SidebarData
}

export const Sidebar = ({data}: SidebarPropsType) => {
    return (
        <section className={s.sidebar}>
            <div className={s.sidebarContainer}>
                <div className={s.play}>
                    <h2>Next</h2>
                    <div>
                        <p>Autoplay</p>
                        <label className={s.switch}>
                            <input type={'checkbox'}/>
                            <span></span>
                        </label>
                    </div>
                </div>
                <div className={s.videos}>
                    {data.videos.map((video, index) => (
                        <div className={s.video} key={index}>
                            <img src={video.video} alt={'Video'}/>
                            <span>{video.duration}</span>
                            <h2>{video.title}</h2>
                            <div>
                                <p>{video.views}k views</p>
                                <p>{video.author}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}