import HeroWelcome from './components/HeroWelcome';
import ImageCarousel from './components/ImageCarousel';
import AboutPreview from './components/AboutPreview';
import EventsCalendar from './components/EventsCalendar';
import MusicPlaylist from './components/MusicPlaylist';
import DonationSection from './components/DonationSection';


export default function Home() {
  return (
    <>
      <HeroWelcome />
      <section className="p-4 mx-auto">
        <ImageCarousel />
      </section>
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4"><AboutPreview /></div>
      </section>
      <section className="py-12 container mx-auto px-4"><EventsCalendar /></section>
      <section className="py-12 container mx-auto px-4"><MusicPlaylist /></section>
      <section className="py-12 container mx-auto px-4"><DonationSection /></section>
    </>
  );
}