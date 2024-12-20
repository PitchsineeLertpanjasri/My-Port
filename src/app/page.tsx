import Banner from '@/components/banner';
import AboutSection from '@/components/AboutSection';
import Contact from '@/components/contact';
import Projects from '@/components/Projects';

export default function HomePage() {
  return (
    <div>
      <Banner />
      <AboutSection />
      <div className="grid grid-cols-1 md:grid-cols-10 gap-8 my-8">
        <section id="contact" className="col-span-3">
          <Contact />
        </section>
        <section id="projects" className="col-span-7">
          <Projects />
        </section>
      </div>
    </div>
  );
}