import styles from './PopupRank.module.scss'
import Popup from 'reactjs-popup'
import backgroundSVG from 'assets/images/background.svg'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import Title from 'components/Title'

interface Props {
    setPopupAberto: React.Dispatch<React.SetStateAction<boolean>>
    title: string
    coverImage: string
    averageScore: number
}

export default function PopupRank( {setPopupAberto, coverImage, title, averageScore}: Props) {
    return (
        <Popup
            defaultOpen={true}
            position="center center"
            closeOnDocumentClick
            closeOnEscape
            onClose={() => setPopupAberto(false)}
        >
            <div className={styles.popup} style={{backgroundImage: `url(${backgroundSVG})`}}>
                <AiOutlineCloseCircle onClick={() => setPopupAberto(false)} className={styles.close}/>
                <div className={styles.popup__head}>
                    <img src={coverImage} alt="" />
                    <div className={styles.info}>
                        <Title><h2>{title}</h2></Title>
                        <span>Nota média: {averageScore}</span>
                    </div>
                </div>
                
            </div>
        </Popup>
    )
}
