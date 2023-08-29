import { ReactElement } from 'react'
import styles from './Title.module.scss'

export default function Title( {children}:{children: string | ReactElement} ) {
  return (
    <div className={styles.title}>{children}</div>
  )
}
