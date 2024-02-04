function MenuItem({ sectionId, sectionName, iconName }) {
  return (
    <li>
      <a
        href={`#${sectionId}`}
        className="tooltip tooltip-bottom xl:tooltip-left"
        data-tip={sectionName}
      >
        <ion-icon name={iconName}></ion-icon>
      </a>
    </li>
  );
}

function Menu() {
  return (
    <ul className="menu menu-horizontal xl:menu-vertical bg-base-200 rounded-box border border-current">
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
