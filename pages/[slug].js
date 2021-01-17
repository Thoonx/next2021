import Head from 'next/head'

export default function Page({page}) {

  return (
    <div>
      <Head>
        <title>Page</title>
      </Head>
	  <h1>{page[0].title.rendered}</h1>
	  {page[0].better_featured_image &&
	  <img src={page[0].better_featured_image.media_details.sizes.medium.source_url} />
	  }
		
		<div dangerouslySetInnerHTML={{__html: page[0].content.rendered}} />
    </div>
  )
}
  export async function getStaticPaths() {
	const res = await fetch(`https://antuncrnja.com/w/wp-json/wp/v2/pages/`)
	const pages = await res.json();

	const paths = pages.map((page) => ({
	  params: { slug: page.slug },
	}))

	return { paths, fallback: false }
  }
  
  export async function getStaticProps({ params }) {

	const res = await fetch(`https://antuncrnja.com/w/wp-json/wp/v2/pages?slug=${params.slug}`)
	const page = await res.json()

	return { 
		props: { 
		page,
	 },
	 revalidate: 1
	}
  }