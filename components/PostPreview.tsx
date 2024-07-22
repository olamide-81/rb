import Avatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Omit<Post, '_id'>) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          image={coverImage}
          priority={false}
        />
      </div>
      <Link
        href={`/blogs/${slug}`}
        className="hover:underline font-[500] text-[18px] leading-[34px] font-switzer text-[#262626] capitalize"
      >
        {title}
      </Link>
      <div className="mb-1 text-lg">
        <Date dateString={date} />
      </div>
      {excerpt && (
        <p className="text-[#595959] leading-[25px] text-[15px]">{excerpt}</p>
      )}
      {author && <Avatar name={author.name} picture={author.picture} />}
    </div>
  )
}
