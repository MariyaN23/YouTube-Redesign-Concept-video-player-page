import userImg from '../../assets/images/Header/Userpic.jpg'

export type HeaderData = {
    notifications: number
    image: string
}

export const headerData: HeaderData = {
    notifications: 3,
    image: userImg
}