import s from './Main.module.scss'
import mainVideo from '../../assets/images/Main/Video.png'
import like from '../../assets/images/Main/Like.svg'
import dislike from '../../assets/images/Main/Dislike.svg'
import share from '../../assets/images/Main/Share.svg'
import more from '../../assets/images/Main/More.svg'
import logo from '../../assets/images/Main/ChannelLogo.png'

export const Main = () => {
    return (
        <section className={s.main}>
            <img src={mainVideo} alt={'Main video'} className={s.mainVideo}/>
            <h2>Dude You Re Getting A Telescope</h2>
            <div className={s.videoStats}>
                <p>123k views</p>
                <div>
                    <button><img src={like} alt={'Likes count'}/>123k</button>
                    <button><img src={dislike} alt={'Dislikes count'}/>435k</button>
                    <button><img src={share} alt={'Share'}/>Share</button>
                    <button><img src={more} alt={'More info'}/></button>
                </div>
            </div>
            <div className={s.videoDescription}>
                <img src={logo} alt={'Logo of channel'}/>
                <div className={s.description}>
                    <h2>Food & Drink</h2>
                    <p>Published on 14 Jun 2019</p>
                    <p>
                        A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing
                        result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to
                        take action. There is no magic formula to write perfect ad copy; it is based on a number of
                        factors, including ad placement, demographic, even the consumer’s mood when they see your ad.
                    </p>
                    <button>Show more</button>
                </div>
                <div className={s.subscribe}>
                    <button>Subscribe 2.3m</button>
                </div>
            </div>
        </section>
    )
}