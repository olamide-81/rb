import { urlForImage } from 'lib/sanity.image'
import type { Author } from 'lib/sanity.queries'
import Image from 'next/image'

export default function AuthorAvatar(props: Author) {
  const { name, picture } = props
  return (
    <div className="flex items-center mt-4">
      <div className="relative mr-4 h-12 w-12">
        <Image
          src={
            picture?.asset?._ref
              ? urlForImage(picture).height(66).width(66).fit('crop').url()
              : 'https://source.unsplash.com/96x96/?face'
          }
          className="rounded-full"
          height={66}
          width={66}
          alt={picture?.alt ?? name}
        />
      </div>
      <div className="text-[16px] font-switzer font-[500] text-balance">{name}</div>
    </div>
  )
}
