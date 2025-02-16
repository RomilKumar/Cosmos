const videoFile = "/asset/9341428-uhd_3840_2160_24fps.mp4"
import "../Styles/home.css"

export default function HomePage() {
  return (
    <div class="Support">
         <video width="640" height="360" autoPlay loop muted>
        <source src={videoFile}  />
      </video>
      
    </div>

  );
}

