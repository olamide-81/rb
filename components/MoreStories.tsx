import PostPreview from 'components/PostPreview'
import type { Post } from 'lib/sanity.queries'

export default function MoreStories({ posts }: { posts: Post[] }) {
  return (
    <section>
      <h2 className="mb-8 text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
        More Posts
      </h2>
      <div className="mb-10 grid gap-x-5 gap-y-12 xxd:grid-cols-2 w-full max-w-screen-xl grid-cols-3 smm:grid-cols-1 items-start">
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
  )
}
