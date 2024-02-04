import SectionTitle from './section-title';

function IntroduceSection() {
  return (
    <section className="flex flex-col gap-8 text-balance">
      <SectionTitle id="introduce" title="Introduce">
        <ion-icon name="home"></ion-icon>
      </SectionTitle>
      <h3>
        Hello there! I'm <span className="text-primary">Luis</span>, a
        Full-Stack Developer.
      </h3>
      <p>
        My passion lies in crafting elegantly simple designs and writing clean
        code. I truly love what I do, it's just as straightforward as that!
      </p>
      <div className="flex gap-5 uppercase text-sm text-center">
        <p>
          <span className="text-primary text-6xl">10+</span>
          <br />
          <span>Years of experience</span>
        </p>
        <p>
          <span className="text-primary text-6xl">2</span>
          <br />
          <span>Cloud developer certifications</span>
        </p>
        <p>
          <span className="text-primary text-6xl">6+</span>
          <br />
          <span>Secure development certifications</span>
        </p>
      </div>
    </section>
  );
}

export default IntroduceSection;
