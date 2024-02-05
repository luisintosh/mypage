import { Link } from 'react-scroll';

function MenuItem({ sectionId, sectionName, iconName }) {
  return (
    <li>
      <Link
        activeClass="active"
        to={sectionId}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="tooltip tooltip-bottom xl:tooltip-left"
        data-tip={sectionName}
      >
        <ion-icon name={iconName}></ion-icon>
      </Link>
    </li>
  );
}

function Menu() {
  return (
    <ul className="menu menu-horizontal xl:menu-vertical bg-base-200 rounded-box border border-neutral-700">
      <MenuItem sectionId="introduce" sectionName="Introduce" iconName="home" />
      <MenuItem sectionId="about" sectionName="About" iconName="person" />
      <MenuItem sectionId="resume" sectionName="Resume" iconName="briefcase" />
      <MenuItem sectionId="skills" sectionName="My Skills" iconName="barbell" />
      <MenuItem
        sectionId="portfolio"
        sectionName="Portfolio"
        iconName="folder"
      />
      <MenuItem sectionId="contact" sectionName="Contact" iconName="mail" />
    </ul>
  );
}

export default Menu;
