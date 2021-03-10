import Posts from '../components/Posts'
import useSwrData from '../components/useSwrData'

export default function Swr() {
  const {swrData, error, stale, update } = useSwrData('https://antuncrnja.com/w/wp-json/ac/v1/posts')
  
  if (error) return <div>failed to load</div>
  if (!swrData) return <div>loading...</div>

  return (
	  <div>
		  { stale && <button onClick={update}>See new Posts</button>}
		 <Posts data={swrData}/>
	</div>
  )
}