import ScrollToTop from 'components/ScrollToTop'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

export default function DefaultPage() {
  return (
    <>
        <ScrollToTop />
        <Header />

        <Outlet />

        <Footer />
    </>
  )
}
