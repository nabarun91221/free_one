import Image from "next/image";
import styles from "./page.module.css";
import Carousel from "@/component/imgSlider";
import img1 from "@/img/1.jpg";
import img2 from "@/img/2.jpg";
import img3 from "@/img/3.jpg";
import img4 from "@/img/4.jpg";
import img5 from "@/img/5.jpg";
const images = [img1, img2, img3, img4, img5];
import bulbe from "@/img/bulbe.jpg";
import camera from "@/img/camera.jpg";
import mail from "@/img/mail.jpg";
import CardSlider from "@/component/cardSlider";
import EventCarousel from "@/component/eventSlider";
import { News } from "@/component/news";
import NewsSlider from "@/component/newsSlider";

export default function Home() {
  return (
    <main>
      <div style={{ width: "100%", height: "100vh" }}>
        <Carousel images={images} />
      </div>
      {/* --------------------------------------------------------- */}
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundImage: "url(/BG.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ width: "1248px", height: "457px" }}>
          <CardSlider images={images}></CardSlider>
        </div>
      </div>
      {/* --------------------------------------------------------- */}
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundImage: "url(/BG2.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="backdrop">
          <div className="title">Next Event</div>
          <div className="title">Calligraphy Demonstration</div>
          <div className="description">-by Ms. Hiroko Nagahama</div>
          <div className="date">
            <div className="div-number">
              <div className="date-num">14</div>
              <div className="date-text">Days</div>
            </div>
            <div className="div-number">
              <div className="date-num">3</div>
              <div className="date-text">Hours</div>
            </div>
            <div className="div-number">
              <div className="date-num">15</div>
              <div className="date-text">Minutes</div>
            </div>
          </div>
          <div className="notify-btn">Notify Me</div>
        </div>
      </div>
      {/* --------------------------------------------------------- */}
      <div
        style={{
          width: "100%",
          height: "170vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="feature">
          <h1 style={{ fontWeight: 400 }}>NKKS MAIN FEATURE</h1>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <div className="feature-card">
              <Image
                className="feature-img"
                style={{ color: "gray" }}
                placeholder="blur"
                src={bulbe}
                alt="lastest event icon"
              ></Image>
              <div className="feature-text">Lastest Event</div>
            </div>
            <div className="feature-card">
              <Image
                className="feature-img"
                style={{ color: "gray" }}
                placeholder="blur"
                src={mail}
                alt="lastest newsletter icon"
              ></Image>
              <div className="feature-text">Lastest Newsletter</div>
            </div>
            <div className="feature-card">
              <Image
                className="feature-img"
                style={{ color: "gray" }}
                placeholder="blur"
                src={camera}
                alt="lastest moment icon"
              ></Image>
              <div className="feature-text">Lastest Moments</div>
            </div>
          </div>
        </div>
        <div className="feature-galary">
          <div
            style={{
              width: "100%",
              height: "fit-containt",
            }}
          >
            <EventCarousel images={images}></EventCarousel>
          </div>
          <div className="viewAll-btn">View All Event</div>
        </div>
      </div>
      {/* --------------------------------------------------------- */}
      <div style={{ width: "100%", height: "100vh" }}>
        <NewsSlider images={images}></NewsSlider>
      </div>
    </main>
  );
}
