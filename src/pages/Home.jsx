import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ArrowDownRight, ArrowRight } from 'lucide-react';
import { products } from '../data';
import ProductCard from '../components/ProductCard';
import './Home.css';
import heroImage from '../assets/image.png';
import storyImage from '../assets/model.png';
export default function Home() {
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    setHeroLoaded(true);
  }, []);

  return (
    <main className="home-page">
      {/* Heritage Hero */}
      <section
        className={`heritage-hero ${heroLoaded ? 'hero-loaded' : ''}`}
        aria-label="Sangam Designs — Indian handloom heritage"
      >
        <div className="heritage-hero__image">
          <img
            src={heroImage}
            alt="Sangam Designs showcasing handcrafted Indian textile products"
            fetchPriority="high"
            onLoad={() => setHeroLoaded(true)}
          />
        </div>

        <div className="heritage-hero__overlay" />

        <div className="heritage-hero__content">
          {/* <span className="heritage-hero__eyebrow">
          <span className="heritage-hero__line" />
            Sangam Designs · Handlooms with Heart
          </span> */}

          <h1 className="heritage-hero__title">
            From India's Looms
            <span>to the World.</span>
          </h1>

          <p className="heritage-hero__description">
            Rooted in tradition. Crafted by hand.
            <br />
            Made to be treasured for generations.
          </p>

          <div className="heritage-hero__actions">
            <Link to="/shop" className="heritage-button">
              Explore the Collection
              <ArrowRight size={17} strokeWidth={1.6} />
            </Link>

            <Link to="/about" className="heritage-story-link">
              Discover our story
              <ArrowDownRight size={16} strokeWidth={1.5} />
            </Link>
          </div>

          <div className="heritage-hero__signature">
            <span className="heritage-hero__signature-line" />
            <span>Indian heritage. Crafted with purpose.</span>
          </div>
        </div>

        {/* <div className="heritage-hero__scroll" aria-hidden="true">
          <span className="heritage-hero__scroll-line" />
          <span>Scroll to discover</span>
        </div> */}

        {/* <span className="heritage-hero__ornament" aria-hidden="true">
          ✳
        </span> */}
      </section>

         {/* Brand Story */}
      <section className="editorial-section container">
        <div className="editorial-image-wrapper">
          <div className="editorial-image">
            {/* Replace this URL with your actual import, e.g., {storyImage} */}
            <img
              src={storyImage}
              alt="Traditional Indian textile craftsmanship"
              loading="lazy"
            />
            <span className="editorial-image__caption">
              A legacy woven by hand
            </span>
          </div>
        </div>

        <div className="editorial-text">
          <span className="section-label">
            — From India's Looms to the World
          </span>

          <h2>
            Some journeys begin with <br />
            a <span>single thread.</span>
          </h2>

          {/* New Decorative Divider */}
          <div className="editorial-divider">
            <span className="divider-line"></span>
            <span className="divider-icon">❖</span>
            <span className="divider-line"></span>
          </div>

          <p>
            Sangam Designs celebrates India's rich handloom heritage
            through thoughtfully crafted pieces, traditional artistry,
            and a deep respect for the hands behind every creation.
          </p>

          <p>
            Every weave carries a story. Every handcrafted detail
            celebrates the beauty of slow, meaningful design.
          </p>

          <Link to="/about" className="text-link">
            READ OUR STORY <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Made with meaning</span>
            <h2>Handlooms With Heart</h2>
            <p>
              Thoughtfully crafted pieces, inspired by tradition
              and made for everyday beauty.
            </p>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="featured-section__footer">
            <Link to="/shop" className="heritage-button heritage-button--outline">
              Discover All Collections
              <ArrowRight size={17} strokeWidth={1.6} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}