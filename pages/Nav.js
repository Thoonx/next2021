import  Link  from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Container from '../components/Container'
import Search from '../components/Search'

export default function Nav() {
const router = useRouter()

useEffect( ()=> {
 if(localStorage.getItem('theme')){
  document.body.classList.add(localStorage.getItem('theme'))
 }
},[])

const [ theme, setTheme ] = useState(true)

function handleTheme(e){
  setTheme(!theme)
  localStorage.setItem('theme', !theme ? 'dark-theme' : 'light-theme')

  !theme 
  ? document.body.classList.add('dark-theme')
  : document.body.classList.remove('dark-theme')

  theme
  ? e.target.style.filter = 'invert(0)'
  : e.target.style.filter = 'invert(1)'

}
  return (
    <header>
      <Container>
    <nav>
    
    <Link href='/'><a>Home</a></Link>
	  <Link href='/about-page'><a>About</a></Link>
	  <Link href='/contact'><a>Contact</a></Link>
    <Link href='/Blog'><a>Blog</a></Link>
    <Link href='/Swr'><a>Swr</a></Link>
    <Search />

    <button className="theme" onClick={handleTheme}>{
    theme 
    ? <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 56.7 56.7" style={{fill: 'transparent', stroke: 'black', strokeWidth: 2}}><g><path d="M32,31.9C26.3,40.7,16,44.5,6.4,42.4c1.7,2.3,3.8,4.3,6.3,6C24,55.7,39,52.5,46.3,41.3C53.6,30,50.4,15,39.2,7.7 c-2.5-1.6-5.3-2.7-8-3.4C37,12.3,37.6,23.2,32,31.9z"/></g></svg>
 
    : <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 56.7 56.7" style={{}}><g><path d="M32,31.9C26.3,40.7,16,44.5,6.4,42.4c1.7,2.3,3.8,4.3,6.3,6C24,55.7,39,52.5,46.3,41.3C53.6,30,50.4,15,39.2,7.7 c-2.5-1.6-5.3-2.7-8-3.4C37,12.3,37.6,23.2,32,31.9z"/></g></svg>}</button>

    </nav>
    </Container>
    </header>
    
  )
}
