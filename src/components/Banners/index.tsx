import { IBanners } from 'pages/Home'
import React from 'react'
import Banner from './Banner'
import styles from './Banner.module.scss'


interface Props {
  imageBanners: IBanners[]
}

export default function Banners( { imageBanners }: Props) {

  return (
    <div className={styles.banners}>
      {imageBanners.map(banner => (
        <Banner 
          key={banner.id}
          {...banner}
        />
      ))}
    </div>
  )
}
