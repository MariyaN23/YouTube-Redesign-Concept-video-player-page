import s from './Main.module.scss'
import like from '../../assets/images/Main/Like.svg'
import dislike from '../../assets/images/Main/Dislike.svg'
import share from '../../assets/images/Main/Share.svg'
import more from '../../assets/images/Main/More.svg'
import arrow from '../../assets/images/Main/ArrowDown.svg'
import {MainVideoData} from "../data/main-data.ts";

type MainPropsType = {
    data: MainVideoData
}

export const Main = ({data}: MainPropsType) => {
    return (
        <section className={s.main}>
            <div className={s.mainContainer}>
                <img src={data.video} alt={'Main video'} className={s.mainVideo}/>
                <img src={data.videoMobile} alt={'Main video'} className={s.mainVideo}/>
                <div className={s.videoTitle}>
                    <h1>{data.title}</h1>
                    <button><img src={arrow} alt={'More info'}/></button>
                </div>
                <div className={s.videoStatsContainer}>
                <div className={s.videoStats}>
                        <p>{data.views}k views</p>
                        <div>
                            <button><img src={like} alt={'Likes count'}/>{data.likes}k</button>
                            <button><img src={dislike} alt={'Dislikes count'}/>{data.dislikes}k</button>
                            <button><img src={share} alt={'Share'}/>Share</button>
                            <button><img src={more} alt={'More info'}/></button>
                        </div>
                    </div>
                </div>
                <div className={s.videoDescription}>
                    <img src={data.channelLogo} alt={'Logo of channel'}/>
                    <div className={s.description}>
                        <h2>{data.channelTitle}</h2>
                        <span>{data.subscribers}K subscribed</span>
                        <p>Published on {data.publishDate}</p>
                        <p>{data.description}</p>
                        <button>Show more</button>
                    </div>
                    <div className={s.subscribe}>
                        <button>Subscribe 2.3m</button>
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
        </section>
    )
}