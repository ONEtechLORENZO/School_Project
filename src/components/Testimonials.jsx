export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testi-header">
        <h2>Start your journey With Us</h2>
        <p>
          Education is a dynamic and evolving field that plays a crucial role
          in shaping individuals and societies. While significant challenges,
        </p>
      </div>

      <div className="testi-body">
        <div className="testi-collage">
          <div className="testi-main-img img-placeholder"></div>
          <div className="testi-sm-img img-placeholder"></div>
          <div className="testi-ring"></div>
          <div className="testi-dot"></div>
        </div>

        <div className="testi-card">
          <div className="testi-author">
            <div className="testi-avatar img-placeholder"></div>
            <div className="testi-author-info">
              <h4>Marvin McKinney</h4>
              <span>15th Batch Students</span>
            </div>
            <div className="testi-quote">"</div>
          </div>
          <p className="testi-text">
            The pandemic has accelerated the shift to online and hybrid learning
            models. Platforms like Coursera, edX, and university-specific online
            programs offer flexibility and accessibility to a wider audience.
          </p>
          <div className="stars">★★★☆☆</div>
        </div>
      </div>
    </section>
  )
}
