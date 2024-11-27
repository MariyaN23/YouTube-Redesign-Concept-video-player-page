import mainVideo from '../../assets/images/Main/Video.png'
import mainVideoMobile from '../../assets/images/Main/MainVideoMobile.png'
import logo from '../../assets/images/Main/ChannelLogo.png'

export type MainVideoData = {
    video: string
    videoMobile: string
    title: string
    views: number
    likes: number
    dislikes: number
    channelLogo: string,
    channelTitle: string
    subscribers: number
    publishDate: string
    description: string
}

export const mainData: MainVideoData = {
    video: mainVideo,
    videoMobile: mainVideoMobile,
    title: 'Dude You Re Getting A Telescope',
    views: 123,
    likes: 123,
    dislikes: 435,
    channelLogo: logo,
    channelTitle: 'Food & Drink',
    subscribers: 245,
    publishDate: '14 Jun 2019',
    description: 'A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad.'
}