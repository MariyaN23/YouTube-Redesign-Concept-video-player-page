import video1 from '../../assets/images/Sidebar/Video1.png'
import video2 from '../../assets/images/Sidebar/Video2.png'
import video3 from '../../assets/images/Sidebar/Video3.png'

type Video = {
    video: string
    duration: string
    title: string
    views: number
    author: string
}

export type SidebarData = {
    videos: Video[]
}

export const sidebarData: SidebarData = {
    videos: [
        {
            video: video1,
            duration: '8:00',
            title: 'Baby Monitor Technology',
            views: 123,
            author: 'Dollie Blair'
        },
        {
            video: video2,
            duration: '8:00',
            title: 'A Good Autoresponder',
            views: 123,
            author: 'Dollie Blair'
        },
        {
            video: video3,
            duration: '8:00',
            title: 'Selecting The Right Hotel',
            views: 123,
            author: 'Dollie Blair'
        }
    ]
}