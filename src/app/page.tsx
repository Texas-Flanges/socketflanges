import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Socket Weld Pipe Flanges | Socket Weld Flanges",
  description: "Socket weld flanges for small-bore, high-pressure piping systems. The pipe inserts into a recessed socket and is fillet welded for a strong, leak-resistant joint.",
  keywords: "socket weld flanges, socket flanges, SW flanges, small bore flanges, high pressure small flanges",
  openGraph: {
    title: "Socket Weld Pipe Flanges | Socket Weld Flanges",
    description: "Socket weld flanges for small-bore, high-pressure piping systems. The pipe inserts into a recessed socket and is fillet welded for a strong, leak-resistant joint.",
    url: "https://socketflanges.com",
    siteName: "Socket Flanges",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Socket Weld Pipe Flanges | Socket Weld Flanges",
    description: "Socket weld flanges for small-bore, high-pressure piping systems.",
  },
  alternates: {
    canonical: "https://socketflanges.com",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Socket Flanges",
            "url": "https://socketflanges.com",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-281-484-8325",
              "contactType": "sales",
              "email": "sales@texasflange.com"
            },
            "parentOrganization": {
              "@type": "Organization",
              "name": "Texas Flange & Fitting Supply",
              "url": "https://texasflange.com"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is a socket weld flange?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A socket weld flange has a recessed bore (socket) that the pipe inserts into. A fillet weld around the hub secures the joint. This design provides excellent strength for small-bore piping up to NPS 4."
                }
              },
              {
                "@type": "Question",
                "name": "What is the gap requirement for socket weld flanges?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Per ASME B16.11, a 1/16 inch (1.6mm) gap must be maintained between the pipe end and the bottom of the socket to allow for thermal expansion and prevent cracking during welding."
                }
              },
              {
                "@type": "Question",
                "name": "What sizes are socket weld flanges available in?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Socket weld flanges are standard in NPS 1/2 through NPS 4 per ASME B16.5. They are available in Class 150 through 2500, though Class 150 through 600 are most common."
                }
              }
            ]
          }
        ])}}
      />
      <style dangerouslySetInnerHTML={{__html: `
        body > header.border-gray-200, header.border-gray-200 { display: none !important; }
        .rv { opacity: 1; transform: none; }
      `}} />

      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur-md border-b" style={{background:'#1a3a5cee'}}>
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div>
            <a href="/" className="text-xl font-bold text-white no-underline">Socket Flanges</a>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="/" className="text-white/80 hover:text-white text-sm no-underline">Home</a>
            <a href="/blog/the-evolution-of-socket-flanges-from-design-to-application" className="text-white/80 hover:text-white text-sm no-underline">The Evolution of Socket Flanges</a>
            <a href="/blog/choose-the-right-socket-flange" className="text-white/80 hover:text-white text-sm no-underline">Choose the Right Socket Flange</a>
            <a href="/about" className="text-white/80 hover:text-white text-sm no-underline">About Us</a>
            <a href="/contact" className="text-white/80 hover:text-white text-sm no-underline">Contact Us</a>
            <a href="/blog" className="text-white/80 hover:text-white text-sm no-underline">Blog</a>
            <a href="https://texasflange.com?ref=socketflanges" className="px-4 py-2 rounded-lg text-sm font-semibold no-underline" style={{background:'#3B82F6', color:'white'}}>Get a Quote</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section
        className="relative min-h-[70vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: "linear-gradient(rgba(26,58,92,0.72), rgba(26,58,92,0.72)), url(/hero.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center px-6 max-w-4xl">
          <p className="text-sm font-bold tracking-[0.3em] mb-4" style={{opacity:0.8}}>SINCE 1993</p>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Socket Flanges</h1>
          <p className="text-xl md:text-2xl mb-4 font-medium">
            Carbon Steel / Stainless / Alloy Flanges per ASME / ANSI
          </p>
          <p className="text-lg mb-2" style={{opacity:0.9}}>
            Manufacturing and Supplying a complete line of Industrial Pipe Flanges with Multiple materials available.
          </p>
          <p className="text-lg mb-8 font-semibold" style={{opacity:0.95}}>
            Custom socket flanges per your request!
          </p>
          <a
            href="https://www.texasflange.com/lp12/?ref=socketflanges"
            className="inline-block px-8 py-4 rounded-lg text-lg font-bold no-underline"
            style={{background:'#3B82F6', color:'white'}}
          >
            Get Started
          </a>
        </div>
      </section>

      {/* SINCE 1993 INTRO */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rv grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                <strong>Since 1993</strong>, Texas Flange provides ASME Socket Weld, Counter Bore, and Non code Industrial pipe flanges
                for the Petrochemical, Process, and Waterworks industries in Stainless Steel Industrial Flanges,
                Alloy Steel Industrial Flanges and Carbon Steel Industrial Flanges.
              </p>
              <p className="text-gray-700 text-base leading-relaxed font-bold mb-1" style={{color:'#1a3a5c'}}>
                We also provide
              </p>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                ANSI, API, AWWA pipe flanges in carbon steel, stainless steel, alloys and chrome steel.
                Our steel flanges can be Weld Neck, Slip on, Blind, Threaded, Socket Weld, Lap Joint,
                Orifice Flanges, Ring, and custom steel flanges in sizes 1/2&quot; to 203&quot;.
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                Pressure classes - 75, 125, 150, 175, 250, 300, 350, 400, 600, 900, 1500, 2500, 5K, 10K, 15K, 20K.
                High Yield - Low Temp.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/ansi-sw.jpg"
                alt="ANSI Socket Weld Flange"
                className="rounded-lg shadow-lg max-w-full"
                style={{maxHeight:'320px', objectFit:'cover'}}
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY US / PRODUCT LIST */}
      <section className="py-16" style={{background:'#f0f4f8'}}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="rv text-center mb-10">
            <h2 className="text-3xl font-bold" style={{color:'#1a3a5c'}}>WHY US?</h2>
            <p className="text-lg text-gray-600 mt-2">1/2&quot; - 202&quot; INDUSTRIAL FLANGES</p>
          </div>
          <div className="rv grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-bold mb-4" style={{color:'#1a3a5c'}}>We provide:</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>ANSI / ASME FORGED FLANGES</li>
                <li>MSS-SP-44 FLANGES / ANSI B 16.47 SERIES A</li>
                <li>API TYPE 6A - RTJ Face Flanges</li>
                <li>API-605 FLANGES / ANSI B 16.47 SERIES B</li>
                <li>A.G.A. ORIFICE UNIONS - Furnished with or without Hardware.</li>
                <li>ASME BOILER CODE FLANGES</li>
                <li>CL. 125 LIGHTWEIGHT FLANGES - For low pressure applications.</li>
                <li>PLATE FLANGES - From 1/4&quot; thru 8&quot; Thick, Including AWWA C-207, and all other special designs.</li>
                <li>ANSI LONG WELDNECKS &amp; SPECIAL BODY CONNECTORS, HB, E, I1, I2, I3 and CUSTOM</li>
                <li>STUDDING OUTLETS (pad flanges) - flat bottom or radiused to fit</li>
                <li>SPECTACLE BLINDS - (line blinds, paddle spacers/blinds)</li>
                <li>DIN FLANGES</li>
                <li>JIS FLANGES</li>
                <li>Special Ring Flanges</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4" style={{color:'#1a3a5c'}}>Materials Used:</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>CARBON STEEL - ASTM/ASME SA-105, A-350 LF-2, LF-3, A694, SA-516-70, A36</li>
                <li>CHROME ALLOYS - A-182-F-1, F-5, F-6, F-9, F-91, F-11, F-12, F-22</li>
                <li>STAINLESS STEEL - A-182 - F-304, Dual Grade 304/304L, Dual Grade 316/316L, 316, 304H, Dual Grade 304/304H, Dual Grade 316/316H, 316H, 309, 310, 317L, 321, 347, 347H, 904L, Alloy 20, many other H grades</li>
                <li>ALUMINUM - 3003, 6061, 5083 and other grades upon request.</li>
                <li>HASTALLOY - B-2, C-276, G, X, C-22</li>
                <li>INCONEL - 600, 601, 625, 718</li>
                <li>INCOLLOY - 800, 825, 800H, 800HT</li>
                <li>MONEL - 400</li>
                <li>COPPER - 90/10 (C70600), 70/30 (C71500)</li>
                <li>Duplex - F51/2205, F53/2507</li>
                <li>TITANIUM - Gr2, Gr12</li>
              </ul>
              <p className="text-gray-700 text-sm mt-4">
                We also offer a full line of Stainless and Alloy Plate Flame Cutting and Galvanized Carbon Steel Flanges.
              </p>
              <p className="text-gray-700 text-sm mt-2">
                There are some grades of steel that no flange producers stock but on occasion are required.
                We source them and make them per your requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW DO SOCKET WELD FLANGES WORK */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6" style={{color:'#1a3a5c'}}>How Do Socket Weld Flanges Work?</h2>
          <div className="text-gray-700 text-base leading-relaxed space-y-4">
            <p>
              Think of a socket weld flange like a cupholder: the pipe slides down into a recessed socket in the center of the flange, and then gets welded in place. It's a clean, compact connection that works well when you don't have a lot of room to work with. These flanges are most common in smaller pipe sizes and can be a practical alternative to weld necks or slip-ons when space is tight. Just keep in mind they're better suited for lower-pressure service and shouldn't be used with corrosive fluids or in extreme heat applications (they aren't available in 2500# class, for example).
            </p>
            <p>
              The pipe sits nearly flush against the bottom of the socket, with just a small gap left intentionally, and that gap gives the welder a little room to position the pipe before making the fillet weld at the hub. One thing worth noting: you'll want to use square-cut pipe for this connection. A beveled pipe end (the kind used for butt weld connections like weld necks) isn't the best fit here when a square end is an option.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-white text-center" style={{background:'#1a3a5c'}}>
        <div className="max-w-3xl mx-auto px-6 rv">
          <h2 className="text-3xl font-bold mb-4">Socket Flanges</h2>
          <p className="text-lg mb-2">Have questions? <a href="/contact" className="text-blue-300 no-underline hover:underline">Contact Socket Flanges.</a></p>
          <p className="text-lg mb-2">Get the latest version of our Socket Flanges Catalog.</p>
          <p className="text-lg mb-6">Texas Flange wants your industrial flange inquiry and will give you your quote quickly!</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://texasflange.com?ref=socketflanges"
              className="inline-block px-8 py-3 rounded-lg font-bold no-underline"
              style={{background:'#3B82F6', color:'white'}}
            >
              More Info
            </a>
            <a
              href="tel:+12814848325"
              className="inline-block px-8 py-3 rounded-lg font-bold no-underline"
              style={{background:'white', color:'#1a3a5c'}}
            >
              281-484-8325
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12" style={{background:'#0f2236', color:'#ccc'}}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-3">Socket Flanges</h3>
              <p className="text-sm">Carbon Steel / Stainless / Alloy Flanges per ASME / ANSI / AWWA / API</p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-3">Navigation</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="hover:text-white no-underline" style={{color:'#aaa'}}>Home</a></li>
                <li><a href="/blog/the-evolution-of-socket-flanges-from-design-to-application" className="hover:text-white no-underline" style={{color:'#aaa'}}>The Evolution of Socket Flanges</a></li>
                <li><a href="/blog/choose-the-right-socket-flange" className="hover:text-white no-underline" style={{color:'#aaa'}}>Choose the Right Socket Flange</a></li>
                <li><a href="/privacy-policy" className="hover:text-white no-underline" style={{color:'#aaa'}}>Privacy Policy</a></li>
                <li><a href="/contact" className="hover:text-white no-underline" style={{color:'#aaa'}}>Contact Us</a></li>
                <li><a href="/about" className="hover:text-white no-underline" style={{color:'#aaa'}}>About Us</a></li>
                <li><a href="/blog" className="hover:text-white no-underline" style={{color:'#aaa'}}>Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-3">Contact</h3>
              <p className="text-sm mb-1">Phone: <a href="tel:+12814848325" className="hover:text-white no-underline" style={{color:'#aaa'}}>281-484-8325</a></p>
              <p className="text-sm mb-1">Fax: 281-484-8730</p>
              <p className="text-sm mb-1">Email: <a href="mailto:sales@texasflange.com" className="hover:text-white no-underline" style={{color:'#aaa'}}>sales@texasflange.com</a></p>
              <p className="text-sm">Business Hours: Mon-Fri, 8 AM - 5 PM CST</p>
            </div>
          </div>
          <div className="border-t pt-6 text-center text-sm" style={{borderColor:'#1e3a56'}}>
            <p>Copyright &copy; 2026 Socket Flanges</p>
          </div>
        </div>
      </footer>
    </>
  );
}
