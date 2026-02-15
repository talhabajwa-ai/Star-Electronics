import { blogData } from '../data/blogData';

const Blog = () => {
  return (
    <main className="pt-20">
      {/* Page Header */}
      <section className="bg-black py-16">
        <div className="container-custom">
          <h1 className="heading-primary text-white">Blog</h1>
          <p className="text-gray-400 mt-4 max-w-2xl">
            Latest news, tips, and insights about electrical safety and technology.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogData.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-xl overflow-hidden card-shadow hover-lift"
              >
                {/* Blog Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <span className="text-6xl">📰</span>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  {/* Category & Date */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.date}</span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="heading-tertiary mb-3 hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  
                  {/* Excerpt */}
                  <p className="text-dark-gray mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-sm text-gray-500">{post.author}</span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  
                  <button className="btn-primary w-full mt-4">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-black">
        <div className="container-custom text-center">
          <h2 className="heading-secondary text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest electrical safety tips and industry news.
          </p>
          
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-dark-gray text-white border border-gray-600 focus:border-primary outline-none"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Blog;
