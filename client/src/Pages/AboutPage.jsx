const videoFile = "/assets/video1.mp4";
import "../Styles/aboutpage.css";

export default function AboutPage() {
  return (
    <div className="about">
      {/* Background Video */}
      <video className="video-bg" src={videoFile} autoPlay loop muted />
      
      {/* Content Overlay */}
      <div className="content-overlay">
        <h1 className="title">🌌 About Cosmos</h1>
        <p className="description">
          Welcome to <span className="highlight">Cosmos</span>, your gateway to the wonders of the universe.
          We bring the mysteries of space closer, making the infinite feel reachable.
        </p>

        <h2 className="subtitle">🚀 Explore the Universe</h2>
        <ul className="list">
          <li>🌍 <span className="highlight">Planets & Moons</span> – Journey through our solar system.</li>
          <li>🌠 <span className="highlight">Stars & Galaxies</span> – Unravel the beauty of the cosmos.</li>
          <li>🛰️ <span className="highlight">Space Missions</span> – Stay updated on NASA & SpaceX.</li>
        </ul>

        <p className="footer-text">✨ Look up. Explore. Discover. The universe is waiting! ✨</p>
      </div>
    </div>
  );
}
