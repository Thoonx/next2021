import Head from 'next/head'		
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Post({post}) {
	const router = useRouter()
  return (
    <div>
      <Head>
        <title></title>
      </Head>
	  {router.isFallback && <h1>LOADING</h1>}
       <h1>{post.title}</h1>
	   <div className="imageLoader">
	     <Image src={post.featured_image.large} alt="" layout="fill"/>
	   </div>
		
		<div dangerouslySetInnerHTML={{ __html:post.content }} />
    </div>
	
  )
  
}
export async function getStaticPaths() {
	const res = await fetch(`https://antuncrnja.com/w/wp-json/ac/v1/posts/`)
	const posts = await res.json();

	const paths = posts.map((post) => ({
	  params: { slug: post.slug },
	}))

	return { paths, fallback: false }
  }
  
  export async function getStaticProps({ params }) {

	const res = await fetch(`https://antuncrnja.com/w/wp-json/ac/v1/posts/${params.slug}`)
	const post = await res.json()

	return { 
		props: { 
		post,
	 },
	 revalidate: 1
	}
  }
  
  