import Link from 'next/link'

const Posts = ({data, title}) => {
	return(
		<>
			<h1>{title}</h1>
			{data.map( post => (
			<Link href={`/?slug=${post.slug}`} as={`/posts/${post.slug}`} key={post.id} scroll={false}>
				<a>
					{post.featured_image.thumbnail && <img src={post.featured_image.thumbnail} style={{width: 200, height: 200}}/>}
					<small>Published: {post.date}</small>
					<h4>{post.title}</h4>
				</a>
			</Link>
			))}
		</>
	)
}

export default Posts


