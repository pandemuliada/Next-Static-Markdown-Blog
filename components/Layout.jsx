import Head from './Head'
import Footer from './Footer'

const Layout = ({ children, container, ...rest }) => {
  return (
    <>
      <Head
        title={rest.title || ''}
        ogTitle={rest.ogTitle || ''}
        description={rest.description || process.env.SITE_SHORT_DESCRIPTION}
        {...rest}
      />
      <div className={container && 'container mx-auto md:w-800'}>
        {children}
      </div>
    </>
  )
}

export default Layout
