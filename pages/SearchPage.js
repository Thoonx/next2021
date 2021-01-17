import { useRouter } from 'next/router'
import { useState } from 'react'
import Posts from '../components/Posts'
import {usePagination, Pagination} from '../components/usePagination'

const SearchPage = ({posts}) => {
    
	const router = useRouter()
	let query = router.query.search + '';
	const [searchData] = useState( posts.filter( item => item.title.toLowerCase().includes(query.toLowerCase()) ) )

	const {currentPage, postsPerPage, currentPosts, paginate} = usePagination({perPage: 2, data: searchData})

	return ( 
		<>
		  <h1>SearchPage</h1>

		{searchData.length === 0 && <p>There is no data for: {query}</p>}

		<Posts data={currentPosts}/> 
        <Pagination 
          postsPerPage={postsPerPage} 
          totalPosts={searchData.length} 
          currentPage={currentPage} 
          paginate={paginate} 
        />
	
		</>
	 );
}

export async function getStaticProps() {
	const res = await fetch(`https://antuncrnja.com/w/wp-json/ac/v1/posts`)
	const posts = await res.json()
	
	return {
	  props: {
		posts,
	  },revalidate: 1
	}
  }
 
export default SearchPage;