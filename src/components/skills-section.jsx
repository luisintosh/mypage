import SectionTitle from './section-title';

function SkillItem({ imageSrc, title }) {
  return (
    <div className="flex flex-col justify-center items-center gap-3 p-5 border rounded-3xl w-52 aspect-square hover:border-primary">
      <img src={imageSrc} alt={title} width={72} />
      <div>{title}</div>
    </div>
  );
}

function SkillsSection() {
  return (
    <section className="flex flex-col">
      <SectionTitle id="skills" title="My Skills">
        <ion-icon name="barbell"></ion-icon>
      </SectionTitle>
      <div className="flex flex-wrap gap-5 text-center">
        <SkillItem imageSrc="/logos/angular.png" title="Angular" />
        <SkillItem imageSrc="/logos/react.png" title="React" />
        <SkillItem imageSrc="/logos/nodejs.png" title="Node JS" />
        <SkillItem imageSrc="/logos/chromium.png" title="Browser Extensions" />
        <SkillItem imageSrc="/logos/electronjs.png" title="Electron JS" />
        <SkillItem imageSrc="/logos/ruby.png" title="Ruby on Rails" />
      </div>
    </section>
  );
}

export default SkillsSection;
