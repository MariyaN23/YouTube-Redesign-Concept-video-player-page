import s from './Main.module.scss'
import {MainVideoData} from "../data/main-data.ts";
import {LikeIcon} from "../../assets/icons/Main/LikeIcon.tsx";
import {DislikeIcon} from "../../assets/icons/Main/DislikeIcon.tsx";
import {ShareIcon} from "../../assets/icons/Main/ShareIcon.tsx";
import {MoreInfoIcon} from "../../assets/icons/Main/MoreInfoIcon.tsx";
import {ArrowDownIcon} from "../../assets/icons/Main/ArrowDownIcon.tsx";

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
                    <button><ArrowDownIcon/></button>
                </div>
                <div className={s.videoStatsContainer}>
                <div className={s.videoStats}>
                        <p>{data.views}k views</p>
                        <div>
                            <button><LikeIcon/> {data.likes}k</button>
                            <button><DislikeIcon/> {data.dislikes}k</button>
                            <button><ShareIcon/> Share</button>
                            <button><MoreInfoIcon/></button>
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