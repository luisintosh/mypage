import SectionTitle from './section-title';

function ResumeSection() {
  return (
    <section className="flex flex-col gap-8 text-balance">
      <SectionTitle id="resume" title="Resume" iconName="briefcase" />
      <h3>
        Education & <span className="text-primary">Experience</span>
      </h3>
      <div className="timeline ps-5 flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <span className="text-gray-400">2020 - Present</span>
          <span className="text-2xl">
            Certification: Google Cloud Developer
          </span>
          <span className="text-2xl">Certification: AWS Cloud Developer</span>
          <span className="text-2xl">
            Senior Frontend Developer at Ultra.io
          </span>
          <span className="ps-3">
            Ultra is a game store bringing the blockchain revolution to the
            gaming industry to create a fair ecosystem for the future of game
            distribution. <br />
            Working as squad Frontend lead, leading the Wallet browser extension
            project, and building the payment flow, being both important
            features in the ecosystem. I also participate in the Store,
            Marketplace, and desktop app development.
          </span>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-gray-400">2018 - 2019</span>
          <span className="text-2xl">Full-Stack developer at QMarketing</span>
          <span className="ps-3">
            Worked with different clients from different industries,
            implementing the best practices to deliver the best quality
            software, using automated tests and code revision before deploying
            it to production. For some time, I was in charge of planning all the
            projects carrying out the follow-up of them to achieve the goals and
            objectives agreed upon.
          </span>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-gray-400">2014 - 2017</span>
          <span className="text-2xl">Full-Stack developer Freelance</span>
          <span className="ps-3">
            Worked as a Software Developer Freelance since I was studying
            college. Throughout this time I discovered some new languages, tools
            and software architecture patterns. Also, I had to learn how to
            interact with customers to offer the best experience and problems
            solutions.
          </span>
          <span className="text-2xl">
            University: Instituto Tecnológico Superior de Rioverde
          </span>
          <span className="ps-3">Computer Systems Engineering</span>
        </div>
      </div>
    </section>
  );
}

export default ResumeSection;
