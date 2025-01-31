import { Metadata } from "next";
import './style.css';


export const metadata: Metadata = {
    title: "Humanify",
    description: "Humanify - Blender Addon",
  };


export default function Home() {
  return (
    <div className="container-wrapper">
      {/* <!-- hero container start --> */}
      <div className="hero-container bg-light">
        <div className="hero-logo">
          <img src="include/images/logo.gif" alt=""/>
        </div>
        <p>
          Create photorealistic <br/>
          humans with one-click.
        </p>
        <div className="hero-content">
          <div className="hero-box-1 radius-default">
            <div className="hb-1-card">
              <div className="hb-1-card-bg" style={{
                backgroundImage: "url(include/images/hero/hb-1-card-bg.png)"
              }}></div>
              <div className="hb-1-card-inner">
                <p>
                  Humanify is built on Daz3D Genesis 9 mesh and works with any
                  wrap or model.
                </p>
                <div className="hb-1-card-logo">
                  <img src="include/images/hero/daz-genesis9-logo.png" alt=""/>
                  <img src="include/images/hero/zwrap-logo.png" alt=""/>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-box-2">
            <div className="hero-box-2-left radius-default">
              <div className="hero-box-2-card">
                <div className="hb-2-card-bg" style={{
                backgroundImage: "url(include/images/hero/hb-2-card-bg1.png)"
              }}></div>
                <div className="hb-2-card-inner">
                  <p>WORKS AUTOMATICALLY WITH GENESIS 9 MESHES</p>
                  <div className="hb-2-card-logo">
                    <img src="include/images/hero/daz-genesis9-logo.svg" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-box-2-right radius-default">
              <div className="hero-box-2-card">
                <div className="hb-2-card-bg" style={{
                backgroundImage: "url(include/images/hero/hb-2-card-bg2.png)"
              }}></div>
                <div className="hb-2-card-inner">
                  <p>WITH ZWRAP HUMANIFY CAN WORK WITH ANY MESH</p>
                  <div className="hb-2-card-logo">
                    <img src="include/images/hero/zwrap-logo.png" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- hero container end --> */}
      {/* <!-- Features container start --> */}
      <div className="content-container pb-0 features-container">
        <div className="heading">
          <h3>Features</h3>
        </div>
        <div className="features-body">
          <div className="feature-box-1">
            <div className="feature-box-1-left">
              <div className="fb1-left-a radius-default">
                <div className="fb1-left-card">
                  <div className="fb-left-card-upper">
                    <a href="#!" className="btn-default">Apply Material</a>
                  </div>
                  <div className="fb-left-card-lower">
                    <div className="feature-box-text">
                      <h5>One Click</h5>
                      <p>
                        Achieve photorealism in Blender with just one click.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fb1-left-b radius-default">
                <div className="fb1-left-card">
                  <div className="fb-left-card-upper">
                    <img src="include/images/feature/fb1-left-b.png" alt=""/>
                  </div>
                  <div className="fb-left-card-lower">
                    <div className="feature-box-text">
                      <h5>Total Control</h5>
                      <p>
                        Adjust the settings, and watch your model transform in
                        real time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="feature-box-1-right">
              <div className="fb-1-right-card">
                <div className="fb-1-right-image">
                  <img src="include/images/feature/fb-1-right.gif" alt=""/>
                </div>
                <div className="fb-1-right-content">
                  <div className="feature-box-text">
                    <h5>Details First</h5>
                    <p>We've obsessed over the details so you don't have to.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="feature-box-2 radius-default">
            <div className="feature-box-2-card" style={{
                backgroundImage: "url(include/images/hero/hb-3-card-bg.png)",
            }}>
                <div className="feature-box-text [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
                    <h5>Currently more than 10 different skins available!</h5>
                </div>
            </div>
          </div>
          <div className="feature-box-3">
            <div className="feature-box-3-left radius-default">
              <div className="feature-box-3-card">
                <div className="fb-3-card-image">
                  <img src="include/images/feature/fb-3-left.png" alt=""/>
                </div>
                <div className="fb-3-card-inner">
                  <div className="feature-box-text">
                    <h5>For all experiences</h5>
                    <p>
                      Whether you're a beginner or a pro, Humanify makes it
                      easy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="feature-box-3-right radius-default">
              <div className="feature-box-3-card">
                <div className="fb-3-card-image">
                  <img src="include/images/feature/fb-3-right.gif" alt=""/>
                </div>
                <div className="fb-3-card-inner">
                  <div className="feature-box-text">
                    <h5>Perfect for client work</h5>
                    <p>
                      Everything created by you is owned by you. We're just here
                      to help.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="feature-box-4 radius-default">
            <div className="feature-box-4-card">
              <div className="fb-4-card-inner">
                <div className="feature-box-text">
                  <h5>Ready to use presets</h5>
                  <p>
                    Save time with five carefully curated skin tones that come
                    with the add-on, or build your own library.
                  </p>
                </div>
              </div>
              <div className="fb-4-card-image">
                <img src="include/images/feature/fb-4-right.png" alt=""/>
              </div>
            </div>
          </div>
          <div className="feature-box-5 radius-default">
            <div className="feature-box-5-card" style={{
                backgroundImage: "url(include/images/feature/feature-box-5.png)"
              }}>
              <div className="feature-box-text">
                <h5>Elevate your renders</h5>
                <p>
                  Say goodbye to endless tweaking. Humanify delivers pro-level
                  results instantly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Features container end --> */}
      {/* <!-- Testimonial container start --> */}
      <div className="content-container pb-0 testimonial-container">
        <div className="heading">
          <h3>Used by the best</h3>
        </div>
        <div className="testimonial-body">
          <div className="testimonial-box-1">
            <div className="testimonial-box-content" style={{
                backgroundImage: "url(include/images/testimonial/testimonial-img1.jpg)"
              }}>
              <div className="testimonial-icon">“</div>
              <h3>Feels like magic every time I use it</h3>
              <div className="testimonial-quote">
                <p>
                  The results are stunningly realistic, and I couldn't be
                  happier with the quality of the human models it produces.
                  Highly recommend!
                </p>
                <h6>Gabrielo Alex</h6>
              </div>
            </div>
            <div className="testimonial-box-content" style={{
                backgroundImage: "url(include/images/testimonial/testimonial-img2.jpg)"
              }}>
              <div className="testimonial-icon">“</div>
              <h3>A must-have for 3D artists</h3>
              <div className="testimonial-quote">
                <p>
                  Humanify has completely transformed my workflow. As a
                  freelance 3D artist, time is of the essence, and this add-on
                  has already saved me countless hours of tedious work.
                </p>
                <h6>Archfiendco</h6>
              </div>
            </div>
          </div>
          <div className="testimonial-box-2">
            <div className="testimonial-box-content" style={{
                backgroundImage: "url(include/images/testimonial/testimonial-img3.jpg)"
              }}>
              <div className="testimonial-icon">“</div>
              <h3>Game Changer!</h3>
              <div className="testimonial-quote">
                <p>
                  I've always struggled with achieving photorealism in my
                  Blender renders, especially when it came to human models.
                  Humanify has changed the game for me.
                </p>
                <h6>Jonathan Plesel</h6>
              </div>
            </div>
            <div className="testimonial-box-content" style={{
                backgroundImage: "url(include/images/testimonial/testimonial-img4.jpg)"
              }}>
              <div className="testimonial-icon">“</div>
              <h3>I’m blown away by Humanify</h3>
              <div className="testimonial-quote">
                <p>
                  The ease of use is incredible – no more endless tweaking or
                  frustration. I've been using Humanify for a few weeks now, and
                  I'm blown away by the results.
                </p>
                <h6>Kurzick</h6>
              </div>
            </div>
          </div>
          <div className="testimonial-box-3">
            <div className="testimonial-box-content" style={{
                backgroundImage: "url(include/images/testimonial/testimonial-img5.jpg)"
              }}>
              <div className="testimonial-icon">“</div>
              <h3>So powerful and so simple</h3>
              <div className="testimonial-quote">
                <p>
                  From skin textures to facial features, Humanify nails every
                  aspect with precision. It's such a powerful tool that was so
                  simple to pick up and master.
                </p>
                <h6>Slade Dsgn</h6>
              </div>
            </div>
            <div className="testimonial-box-content" style={{
                backgroundImage: "url(include/images/testimonial/testimonial-img6.jpg)"
              }}>
              <div className="testimonial-icon">“</div>
              <h3>My favourite Blender add-on</h3>
              <div className="testimonial-quote">
                <p>
                  Whether I'm working on personal projects or client
                  commissions, Humanify consistently delivers outstanding
                  results that exceed expectations.
                </p>
                <h6>Soze</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Testimonial container end --> */}
      {/* <!-- Addons container start --> */}
      <div className="content-container addons-container">
        <div className="heading">
          <div className="sub-head">Addon Controls</div>
          <h3>
            Photorealism at <br/>
            your fingertips
          </h3>
          <p>
            We're always working to improve our addons, so take this as a
            non-exhaustive (changing) list of Humanify’s current capabilities.
          </p>
        </div>
        <div className="addon-list">
          <div className="addon-item">
            <div className="addon-box">
              <div className="addon-icon">
                <img src="include/images/addon/addon-icon1.png" alt="Presets"/>
              </div>
              <h4>Presets</h4>
              <p>
                Instantly access tailored settings, simplifying your workflow
                with Humanify's ready-made options.
              </p>
            </div>
          </div>
          <div className="addon-item">
            <div className="addon-box">
              <div className="addon-icon">
                <img src="include/images/addon/addon-icon2.png" alt="Materials"/>
              </div>
              <h4>Materials</h4>
              <p>
                Craft lifelike textures, bringing depth to your creations with
                Humanify's versatile material options.
              </p>
            </div>
          </div>
          <div className="addon-item">
            <div className="addon-box">
              <div className="addon-icon">
                <img src="include/images/addon/addon-icon3.png" alt="Materials"/>
              </div>
              <h4>Skin Tones</h4>
              <p>
                Achieve authentic complexion variations, ensuring realism with
                Humanify's precise tones control.
              </p>
            </div>
          </div>
          <div className="addon-item">
            <div className="addon-box">
              <div className="addon-icon">
                <img src="include/images/addon/addon-icon4.png" alt="Materials"/>
              </div>
              <h4>Scattering</h4>
              <p>
                Master light diffusion, enhancing realism with Humanify's
                advanced scattering techniques.
              </p>
            </div>
          </div>
          <div className="addon-item">
            <div className="addon-box">
              <div className="addon-icon">
                <img src="include/images/addon/addon-icon5.png" alt="Materials"/>
              </div>
              <h4>Details</h4>
              <p>
                Perfect every feature, ensuring lifelike characters with
                Humanify's attention to intricate details.
              </p>
            </div>
          </div>
          <div className="addon-item">
            <div className="addon-box">
              <div className="addon-icon">
                <img src="include/images/addon/addon-icon6.png" alt="Materials"/>
              </div>
              <h4>Roughness</h4>
              <p>
                Refine surface textures, adding character to your 3D creations
                with Humanify's roughness adjustments.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Addons container end --> */}
      {/* <!-- Video container start --> */}
      <div className="content-container video-container">
        <div className="heading">
          <h3>Learn more</h3>
        </div>
        <div className="video-list">
          <div className="video-box">
            <iframe src="https://www.youtube.com/embed/56owjVYvtTc"></iframe>
          </div>
          <div className="video-box">
            <iframe src="https://www.youtube.com/embed/2z1OtL4JS_o"></iframe>
          </div>
        </div>
      </div>
      {/* <!-- Video container end --> */}
      {/* <!-- footer start --> */}
      <footer>
        <a href="#" className="footer-logo"><img src="include/images/footer/footer-logo.png" alt="Humanify"/></a>
        <div className="social-links">
          <a href="https://www.tiktok.com/@blender.humanify" target="_blank"><img src="include/images/footer/tiktok.svg" alt="Tiktok"/></a>
          <a href="https://www.instagram.com/blender.humanify" target="_blank"><img src="include/images/footer/instagram.svg" alt="Instagram"/></a>
          <a href="https://twitter.com/blender.humanify" target="_blank"><img src="include/images/footer/twitter.svg" alt="Twitter"/></a>
          <a href="https://discord.gg/y3TK7e5s8S" target="_blank"><img src="include/images/footer/discord.svg" alt="Discord"/></a>
        </div>
      </footer>
      {/* <!-- footer end   --> */}
    </div>
  );
}
