import SectionTitle from './section-title';

function AboutSection() {
  return (
    <section className="flex flex-col gap-8 text-balance">
      <SectionTitle id="about" title="About">
        <ion-icon name="person"></ion-icon>
      </SectionTitle>
      <h3>
        Every great app begin with an even{' '}
        <span className="text-primary">better story</span>
      </h3>
      <p>
        I am a passionate Full Stack Developer with over 10 years of experience.
        As a Senior Front-end Developer at Ultra.io, I have led successful
        projects in Payment Systems and Blockchain Wallet extensions. I am
        certified in AWS and Google Cloud Platform as a Developer Associate and
        specialize in cutting-edge cloud solutions. I have experience in
        Frontend, Backend, Desktop, and Mobile applications, and I have worked
        with people from diverse countries across the world.
      </p>
    </section>
  );
}

export default AboutSection;
