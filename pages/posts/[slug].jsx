import dynamic from 'next/dynamic'
import matter from 'gray-matter'
import Layout from '../../components/Layout'
import { readingTime, formatDate } from '../../utils'
import author from '../../settings/author'

const ReactMarkdown = dynamic(() => import('react-markdown'))
const Heading = dynamic(() => import('../../components/Markdown/Heading'))
const Paragraph = dynamic(() => import('../../components/Markdown/Paragraph'))
const Link = dynamic(() => import('../../components/Markdown/Link'))
const InlineCode = dynamic(() => import('../../components/Markdown/InlineCode'))
const BlockCode = dynamic(() => import('../../components/Markdown/BlockCode'))

const styles = {
  title: 'text-4xl md:text-5xl font-medium text-gray-800 mb-0',
}

const PostDetail = (props) => {
  const { 
    content,
    data
  } = props

  const readTime = readingTime(content)

  return (<>
    <Layout 
      title={data.title}
      description={data.description}
      url={`/posts/${data.slug}`}
      type="article"
      ogImage={data.heroImage}
      useContainer>
    
      <section className='mt-5'>
        <h2 className={styles.title}>{data.title}</h2>
        <div className='text-gray-600 italic mb-5'>
          <span>{formatDate(data.createdAt)} - {readTime > 1 ? readTime + ' minutes' : readTime + ' minute' } read</span>
        </div>
        {data.heroImage && <img src={data.heroImage} alt={data.title} className='mb-5'/>}
      </section>

      <article>
        <ReactMarkdown 
          source={content}
          parserOptions={{ commonmark: true }}
          renderers={{
            paragraph: Paragraph,
            heading: Heading,
            code: BlockCode,
            inlineCode: InlineCode,
            link: Link
          }}/>
      </article>

      <div className='mt-12'>
        {data.categories?.map((category, index) => <span key={index} className='bg-gray-200 text-gray-700 py-2 px-3 mr-3 inline-block text-sm capitalize'>{category}</span>)}
      </div>
      
      <div className='mb-8'>
        <hr className='my-6'/>
        <span className='text-gray-600'>Written by</span>
        <h3 className='text-2xl font-bold mb-2 text-gray-700'>{author.name}</h3>
        <p>{author.bio}</p>
      </div>
    </Layout>
  </>)
}

PostDetail.getInitialProps = async (context) => {
  const { slug } = context.query

  const content = await import(`../../posts/${slug}.md`)
  const data = matter(content.default)

  return {
    ...data // it returns { content: "string", data: { title, date, ... } }
  }
}

export default PostDetail