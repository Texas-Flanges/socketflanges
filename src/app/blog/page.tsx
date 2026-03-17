import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Socket Flanges",
  description: "Latest articles and technical resources about socket weld flanges and industrial piping applications.",
  alternates: {
    canonical: "https://socketflanges.com/blog",
  },
};

export default function BlogPage() {
  const posts = [
    {
      slug: "the-evolution-of-socket-flanges-from-design-to-application",
      title: "The Evolution of Socket Flanges: From Design to Application",
      date: "July 9, 2024",
      description: "Explore the journey of socket flanges from their initial design concepts to their current applications, highlighting the innovations and improvements that have shaped their development.",
      image: "/evolution-article.png",
    },
    {
      slug: "choose-the-right-socket-flange",
      title: "How to Choose the Right Socket Flange for Your Project",
      date: "July 9, 2024",
      description: "Selecting the right socket flange is crucial for ensuring the efficiency and reliability of your piping system. This guide covers key factors to consider when making your choice.",
      image: "/choose-article.png",
    },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        body > header.border-gray-200, header.border-gray-200 { display: none !important; }
        .rv { opacity: 1; transform: none; }
      `}} />

      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur-md border-b" style={{background:'#1a3a5cee'}}>
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <a href="/" className="text-xl font-bold text-white no-underline">Socket Flanges</a>
          <nav className="hidden md:flex items-center gap-6">
            <a href="/" className="text-white/80 hover:text-white text-sm no-underline">Home</a>
            <a href="/about" className="text-white/80 hover:text-white text-sm no-underline">About Us</a>
            <a href="/contact" className="text-white/80 hover:text-white text-sm no-underline">Contact Us</a>
            <a href="/blog" className="text-white text-sm font-semibold no-underline">Blog</a>
            <a href="https://texasflange.com?ref=socketflanges" className="px-4 py-2 rounded-lg text-sm font-semibold no-underline" style={{background:'#3B82F6', color:'white'}}>Get a Quote</a>
          </nav>
        </div>
      </header>

      <section className="py-12 text-white" style={{background:'#1a3a5c'}}>
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold">Blog</h1>
          <p className="text-lg mt-2" style={{opacity:0.85}}>Technical insights and industry news on socket weld flanges</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="rounded-xl overflow-hidden shadow-md border border-gray-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full object-cover"
                  style={{height:'220px'}}
                />
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <h2 className="text-xl font-bold mb-3" style={{color:'#1a3a5c'}}>
                    <a href={`/blog/${post.slug}`} className="no-underline hover:underline" style={{color:'#1a3a5c'}}>
                      {post.title}
                    </a>
                  </h2>
                  <p className="text-gray-600 text-sm mb-4">{post.description}</p>
                  <a
                    href={`/blog/${post.slug}`}
                    className="inline-block px-5 py-2 rounded-lg text-sm font-semibold no-underline"
                    style={{background:'#1a3a5c', color:'white'}}
                  >
                    Read More
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-sm" style={{background:'#0f2236', color:'#aaa'}}>
        <p>Copyright &copy; 2026 Socket Flanges &nbsp;|&nbsp;
          <a href="https://texasflange.com?ref=socketflanges" className="hover:text-white no-underline" style={{color:'#aaa'}}>Texas Flange</a> &nbsp;|&nbsp;
          <a href="/contact" className="hover:text-white no-underline" style={{color:'#aaa'}}>Contact</a>
        </p>
      </footer>
    </>
  );
}
