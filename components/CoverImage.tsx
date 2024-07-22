import cn from 'classnames'
import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'
import Link from 'next/link'

interface CoverImageProps {
  title: string
  slug?: string
  image: any
  priority?: boolean
}

export default function CoverImage(props: CoverImageProps) {

  const { title, slug, image: source, priority } = props
  const image = source?.asset?._ref ? (
    <div
      className={cn('shadow-small', {
        'transition-shadow duration-200 overflow-hidden bg-[#e3e3e3] rounded-[16px] mb-4 relative w-full xxd:min-w-[250px] min-w-[300px] aspect-[1.17] hover:shadow-medium':
          slug,
      })}
    >
      <Image
        className="h-auto w-full"
        width={2000}
        height={1000}
        alt=""
        src={urlForImage(source).height(1000).width(2000).url()}
        sizes="100vw"
        priority={priority}
      />
    </div>
  ) : (
    <div
      className="overflow-hidden bg-[#e3e3e3] rounded-[16px] mb-4 relative w-full xxd:min-w-[250px] min-w-[300px] aspect-[1.17]"
    />
  )

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/blogs/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
