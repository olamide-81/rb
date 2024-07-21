import Image from "next/image";

const BlogItems = ({ title, img, content }: { title: string, content: string, img: string }) => {
    return (
      <div className="w-full">
        <div className="overflow-hidden bg-[#e3e3e3] rounded-[16px] mb-4 relative w-full xxd:min-w-[250px] min-w-[300px] aspect-[1.17]">
          <Image src={img} alt={title} fill={true} objectFit="cover" />
        </div>

        <h2 className="font-[500] text-[18px] leading-[34px] font-switzer text-[#262626] capitalize ">
          {title}
        </h2>
        <p className="text-[#595959] leading-[25px] text-[15px] ">{content}</p>
      </div>
    );
}

export default BlogItems;