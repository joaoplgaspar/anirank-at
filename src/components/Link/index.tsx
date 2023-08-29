import styles from './Link.module.scss'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'
import { ReactElement } from 'react'

interface Props {
  children: string | ReactElement,
  to: string
}

export default function Link( { children, to }: Props ) {
  return (
    <NavLink
      to={to}
      className={ ( {isActive} ) => classNames( {
        [styles.link]: true,
        [styles.linkDestacado]: isActive
      } )}
      end
    >
        {children}
        <div className={styles.barra}/>
    </NavLink>
  )
}
