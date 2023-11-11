import { data } from '@/data/blogs';
import BlogCard from './BlogCard';
import SectionTitle from './SectionTitle';

const Blogs = () => {
  return (
    <section id='blogs' className='wrapper section-padding'>
      <SectionTitle title='Timeworthy Articles' subtitle='Blogs' />

      <div className='grid gap-10 lg:grid-cols-2 2xl:grid-cols-3'>
        {data.map((blog: any, index: number) => (
          <BlogCard
            key={blog.id}
            index={index}
            image={blog.image}
            title={blog.title}
            author={blog.author}
            authorUrl={blog.authorUrl}
            publishedDate={blog.publishedDate}
            body={blog.body}
            blogUrl={blog.blogUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Blogs;
