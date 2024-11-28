import React from "react";
import "./main.css";

function Main() {
  return (
    <section className="main">
      <nav className="filter">
        <ul>
          <li>All Project</li>
          <li>HTML & CSS</li>
          <li>JavaScript</li>
          <li>React With Vite</li>
          <li>Node & Express</li>
        </ul>
      </nav>
      <div className="content">
        <div className="card">
          <img src="/public/p1.png" style={{ width: "100%" }} />

          <div className="details">
            <h2>Landscape WebSite</h2>
            <p>Transforming outdoor spaces into breathtaking landscapes, we bring your vision to life with creativity, precision, and care. Whether it’s lush gardens, serene pathways, or vibrant outdoor living areas, our team is dedicated to crafting environments that inspire and thrive.</p>
          </div>
          <div className="link">
            <div className="left">
            <i className="bx bx-link socialItem"/>
            <i class='bx bxl-github'/>

            </div>
            <div className="right">
                <a href="">See More</a>
                <i className='bx bx-right-arrow-alt'/>
            </div>
          </div>
        </div>

        <div className="card">
          <img src="/public/p2.png" style={{ width: "100%" }} />

          <div className="details">
          <h2>Doctors WebApp</h2>
          <p>Simplifying healthcare for patients and professionals, our web app streamlines appointments, medical records, and communication. Designed with doctors in mind, it ensures seamless patient management, accurate documentation, and enhanced collaboration.</p>
          </div>
          <div className="link">
            <div className="left">
            <i className="bx bx-link socialItem"/>
            <i class='bx bxl-github'/>

            </div>
            <div className="right">
                <a href="">See More</a>
                <i className='bx bx-right-arrow-alt'/>
            </div>
          </div>
        </div>

        <div className="card">
          <img src="/public/p3.jpg" style={{ width: "100%" }} />

          <div className="details">
          <h2>Blogs WebSite</h2>
          <p>Welcome to a world of ideas, stories, and inspiration! Our blog platform is your gateway to diverse topics, insightful articles, and engaging discussions. Whether you're here to learn, share, or simply explore, you'll find content that resonates and sparks curiosity. </p>
          </div>
          <div className="link">
            <div className="left">
            <i className="bx bx-link socialItem"/>
            <i class='bx bxl-github'/>

            </div>
            <div className="right">
                <a href="">See More</a>
                <i className='bx bx-right-arrow-alt'/>
            </div>
          </div>
        </div>

        <div className="card">
          <img src="/public/p4.png" style={{ width: "100%" }} />

          <div className="details">
          <h2>Perfume Store</h2>
          <p>Discover the art of fragrance at Perfume Store, where every scent tells a story. From timeless classics to modern masterpieces, our curated collection captures the essence of elegance and individuality.</p>
          </div>
          <div className="link">
            <div className="left">
            <i className="bx bx-link socialItem"/>
            <i class='bx bxl-github'/>

            </div>
            <div className="right">
                <a href="">See More</a>
                <i className='bx bx-right-arrow-alt'/>
            </div>
          </div>
        </div>

        <div className="card">
          <img src="/public/p5.jpg" style={{ width: "100%" }} />

          <div className="details">
          <h2>Magazine WebSite</h2>
          <p>Step into a world of stories, insights, and inspiration with [Magazine Name]. From the latest trends and thought-provoking articles to in-depth features and expert opinions, we bring you the best of lifestyle, culture, and beyond.</p>
          </div>
          <div className="link">
            <div className="left">
            <i className="bx bx-link socialItem"/>
            <i class='bx bxl-github'/>

            </div>
            <div className="right">
                <a href="">See More</a>
                <i className='bx bx-right-arrow-alt'/>
            </div>
          </div>
        </div>

        <div className="card">
          <img src="/public/p6.jpg" style={{ width: "100%" }} />

          <div className="details">
          <h2>Social Media App</h2>
          <p>Connect, share, and discover like never before with Twasol. Designed to bring people closer, our platform empowers you to express yourself, build meaningful connections, and explore a world of ideas and stories.</p>
          </div>
          <div className="link">
            <div className="left">
            <i className="bx bx-link socialItem"/>
            <i class='bx bxl-github'/>

            </div>
            <div className="right">
                <a href="">See More</a>
                <i className='bx bx-right-arrow-alt'/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
