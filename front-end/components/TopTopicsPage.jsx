import TopTopics from './TopTopics'

const TopTopicsPage = () => {
  return (
    <div className='flex gap-4 justify-center my-7 '>
      <TopTopics topic="Web dev"/>
      <TopTopics topic="Bard"/>
      <TopTopics topic="Software Engineer"/>
      <TopTopics topic="Google"/>
      <TopTopics topic="Apple"/>
      <TopTopics topic="Programming"/>
      {/* <TopTopics topic="Coding"/>
      <TopTopics topic="Data science"/>
      <TopTopics topic="ChatGPT"/> */}

    </div>
  )
}

export default TopTopicsPage
