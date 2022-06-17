import Hero from "../components/Hero";
import MeditationsSection from "../components/MeditationsSection";
import PlaylistSection from "../components/PlaylistSection";
import VideoSection from "../components/VideoSection";

const Home = ({ data }) => {
  return (
    <>
      <Hero data={data}/>
      <VideoSection data={data} />
      <MeditationsSection data={data}/>
      <PlaylistSection data={data} />
    </>
  )
}

export default Home