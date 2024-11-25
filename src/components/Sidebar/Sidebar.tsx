import s from './Sidebar.module.scss'
import video1 from '../../assets/images/Sidebar/Video1.png'
import video2 from '../../assets/images/Sidebar/Video2.png'
import video3 from '../../assets/images/Sidebar/Video3.png'

export const Sidebar = () => {
    return (
        <section className={s.sidebar}>
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
                <div>
                    <img src={video1} alt={'Video'}/>
                    <h2>Baby Monitor Technology</h2>
                    <div>
                        <p>123k views</p>
                        <p>Dollie Blair</p>
                    </div>
                </div>
                <div>
                    <img src={video2} alt={'Video'}/>
                    <h2>A Good Autoresponder</h2>
                    <div>
                        <p>123k views</p>
                        <p>Dollie Blair</p>
                    </div>
                </div>
                <div>
                    <img src={video3} alt={'Video'}/>
                    <h2>Selecting The Right Hotel</h2>
                    <div>
                        <p>123k views</p>
                        <p>Dollie Blair</p>
                    </div>
                </div>
            </div>
        </section>
    )
}