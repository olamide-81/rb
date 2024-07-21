import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import blog1 from '@/assets/blogImg.webp';
import BlogItems from "@/components/blog/Items";
import blog2 from '@/assets/blogItemImg.webp'

const Blog = () => {
    return (
      <div className="h-screen text-[#262626] max-w-screen-xl mx-auto px-10 w-full">
        <NavBar
          style={{
            color: "#262626",
          }}
        />

        <div className="rounded-[40px] bg-[#F0F2F5] flex items-start justify-between mt-10 py-8 px-10 smm:px-7 smm:py-6 w-full mmd:w-fit mmd:flex-col-reverse mb-10">
          <div className="mt-10 mmd:w-full w-1/2 mr-10 mmd:mr-0">
            <h2 className="font-[500] mb-4 text-[18px] lg:text-[28px] leading-[34px] font-switzer text-[#262626] capitalize ">
              Ready to turn your financial <br className="hidden lg:block" />{" "}
              goals into reality?
            </h2>
            <span className="text-[#595959] leading-[25px] font-[400] text-[15px] ">
              Sign up now and choose your first RAF Plan. Your future self will{" "}
              <br className="hidden lg:block" />
              Thank you!"
            </span>
          </div>

          <div className="overflow-hidden min-w-[200px] w-[400px] mmd:w-full rounded-[30px]">
            <Image src={blog1} alt="blog1" />
          </div>
        </div>

        <div className="grid gap-x-5 gap-y-12 xxd:grid-cols-2 w-full max-w-screen-xl grid-cols-3 smm:grid-cols-1 items-start">
          <BlogItems
            title={"Hello there, this is a title"}
            content={"this is a minor content"}
            img={blog2.src}
          />

          <BlogItems
            title={"Hello there, this is a title"}
            content={"this is a minor content"}
            img={blog2.src}
          />

          <BlogItems
            title={"Hello there, this is a title"}
            content={"this is a minor content"}
            img={blog2.src}
          />

          <BlogItems
            title={"Hello there, this is a title"}
            content={"this is a minor content"}
            img={blog2.src}
          />

          <BlogItems
            title={"Hello there, this is a title"}
            content={"this is a minor content"}
            img={blog2.src}
          />

          <BlogItems
            title={"Hello there, this is a title"}
            content={"this is a minor content"}
            img={blog2.src}
          />
        </div>

        <Footer />
      </div>
    );
}

export default Blog;