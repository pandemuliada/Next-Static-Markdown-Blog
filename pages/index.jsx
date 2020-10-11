import Link from 'next/link'
import dynamic from 'next/dynamic'
import matter from 'gray-matter'
import { importAll } from '../utils'

const Layout = dynamic(() => import('../components/Layout'))
const PostCard = dynamic(() => import('../components/PostCard'))

const styles = {
  title: 'text-2xl font-medium text-gray-700 mb-4',
  code: 'inline-block bg-gray-200 px-1 rounded text-gray-700',
}

const Home = ({ posts }) => {
  return (
    <>
      <Layout useContainer>
        <section>
          <h1 className="text-4xl font-bold text-gray-800">Halo semua ✋</h1>
          <p className="mt-4">
            Selamat datang di blog pribadi saya. Saya <b>Pande Muliada</b>.
            Front End Developer dari Bali, Indonesia. Di blog ini saya akan
            membagikan hal-hal seputar programming dan mungkin curhatan serta
            pengalaman saya hehe ✌️
          </p>
          <p>
            Oiya, tulisan di blog ini juga ada di medium saya,{' '}
            <a
              className="text-blue-400 underline"
              href="https://medium.com/@pandemuliada"
            >
              cekidot
            </a>
          </p>
          <p>
            Blog ini dibuat menggunakan{' '}
            <code className={styles.code}>nextjs</code>{' '}
            <code className={styles.code}>markdown</code> dan{' '}
            <code className={styles.code}>netlify</code>. Bisa di cek
            repositorinya{' '}
            <a
              className="text-blue-400 underline"
              href="https://github.com/pandemuliada/next-static-markdown-blog-starter"
            >
              disini
            </a>
          </p>
        </section>
      </Layout>
    </>
  )
}

Home.getInitialProps = async () => {
  const files = importAll(require.context('../_posts', true, /\.md$/))
  const posts = files.slice(0, 3).map((file) => matter(file.default))

  return {
    posts,
  }
}

export default Home
