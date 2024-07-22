import Container from 'components/BlogContainer'
import Layout from 'components/BlogLayout'
import IndexPageHead from 'components/IndexPageHead'
import type { Post, Settings } from 'lib/sanity.queries';
import NavBar from './NavBar';
import PostPreview from './PostPreview';
import Image from 'next/image';
import blog1 from '@/assets/blogImg.webp';
import Footer from './Footer';

export interface IndexPageProps {
  preview?: boolean
  loading?: boolean
  posts: Post[]
  settings: Settings
}

export default function IndexPage(props: IndexPageProps) {
  const { preview, loading, posts, settings } = props

  return (
    <>
      <IndexPageHead settings={settings} />

      <NavBar
        style={{
          color: '#262626',
          paddingLeft: '40px',
          paddingRight: '40px',
        }}
      />

      <Layout preview={preview} loading={loading}>
        <Container>
          <div className="rounded-[40px] px-10 max-w-screen-xl mx-auto bg-[#F0F2F5] flex items-start justify-between mt-10 py-8 smm:px-7 smm:py-6 w-full mmd:w-fit mmd:flex-col-reverse mb-12">
            <div className="mt-10 mmd:w-full w-1/2 mr-10 mmd:mr-0">
              <h2 className="font-[500] mb-4 text-[18px] lg:text-[28px] leading-[34px] font-switzer text-[#262626] capitalize ">
                Ready to turn your financial <br className="hidden lg:block" />{' '}
                goals into reality?
              </h2>
              <span className="text-[#595959] leading-[25px] font-[400] text-[15px] ">
                Sign up now and choose your first RAF Plan. Your future self
                will <br className="hidden lg:block" />
                Thank you!"
              </span>
            </div>

            <div className="overflow-hidden min-w-[200px] w-[400px] mmd:w-full rounded-[30px]">
              <Image src={blog1} alt="blog1" />
            </div>
          </div>

          <section className="max-w-screen-xl mx-auto">
            <div className="grid gap-x-5 gap-y-12 xxd:grid-cols-2 w-full max-w-screen-xl grid-cols-3 smm:grid-cols-1 items-start">
              {posts.map((post) => (
                <PostPreview
                  key={post._id}
                  title={post.title}
                  coverImage={post.coverImage}
                  date={post.date}
                  author={post.author}
                  slug={post.slug}
                  excerpt={post.excerpt}
                />
              ))}
            </div>
          </section>
        </Container>
      </Layout>

      <div className="flex justify-center">
        <Footer />
      </div>
    </>
  )
}
