import Posts from '../components/Posts'
import {usePagination, Pagination} from '../components/usePagination'

export default function Blog({data}) {
 
	const {currentPage, postsPerPage, paginate, currentPosts} = usePagination({perPage: 2, data})

  return (
    <div>
        <Posts data={currentPosts}/> 

        <Pagination 
          postsPerPage={postsPerPage} 
          totalPosts={data.length} 
          currentPage={currentPage} 
          paginate={paginate} 
        />
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(`https://antuncrnja.com/w/wp-json/ac/v1/posts`)
  const data = await res.json()
  
  return {
    props: {
      data,
    },revalidate: 1
  }
}
