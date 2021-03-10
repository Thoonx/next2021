import '../styles/globals.css'
import { AnimatePresence, motion, AnimateSharedLayout } from 'framer-motion'
import Nav from './Nav'

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';

/*GIT
    git init

    git config --global user.name 'Thoonx'
    git config --global user.email 'ggold.zg@gmail.com'

    sudo git remote add origin https://github.com/Thoonx/test1.git

        sudo git add .
        sudo git commit -m 'update'
        sudo git push -u origin main -f

    git push -u origin master
    git checkout dev
    git pull 
*/

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      {/*
    <AnimatePresence exitBeforeEnter>
      <motion.div 
        key={Math.floor(Math.random() * 1000000)} 
        initial={{ 
          opacity: 0
        }} 
        animate={{ 
          opacity: 1, 
        }} 
        exit={{
          opacity: 0
        }}
        transition={{
          default: {duration: .2}, 
          ease: 'easeInOut'
        }}
      >*/}
          <AnimateSharedLayout> <Component {...pageProps}/></AnimateSharedLayout>
    {/*</motion.div>
  </AnimatePresence>
*/}
  </>
  
  )
}

export default MyApp

