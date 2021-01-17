import Head from 'next/head'
import Accordion from '../components/Accordion/Accordion'
import Component from '../components/Component'
import Posts from '../components/Posts'
import Tab from '../components/Tabs/Tab'
import TabContainer from '../components/Tabs/TabContainer'
import AccordionWrapper from '../components/Accordion/AccordionWrapper'

export default function Home({data}) {

  return (
    <div>
      <Head>
        <title>Posts</title>
      </Head>

      <Component 
        bg="https://unsplash.it/400" 
        bgColor="red" 
        title="Next.js New Component" 
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
      />
      <Component 
        bg="https://unsplash.it/500" 
        bgColor="#00b8ff" 
        title="Reusable Component" 
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
      />


      <AccordionWrapper>
        <Accordion title="Title 1" content="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.

You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"/>
        <Accordion title="Title 2" content="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR7.99 to EUR11.99 a month. No extra costs, no contracts."/>
        <Accordion title="Title 3" content="Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."/>
        
      </AccordionWrapper>



      <TabContainer>
        <Tab title="Tab 1" content="Lorem ipsum dolor sit amet 1"/>
        <Tab title="Tab 2" content="Lorem ipsum dolor sit amet 2"/>
        <Tab title="Tab 3" content="Lorem ipsum dolor sit amet 3"/>
        <Tab title="Tab 4" content="Lorem ipsum dolor sit amet 4"/>
      </TabContainer>

      {data.data &&
        data.data.status === 404 ? <h1>No data</h1>
        :
        <>
          <Posts data={data.slice(0,4)} title='All Posts'/> 
          <Posts data={data.slice(0,2)} title='Last two posts'/> 
        </>
      }

      
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
