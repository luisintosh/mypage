function ProfileCard() {
  return (
    <div className="card card-bordered border-current sm:w-96">
      <div className="card-body gap-10 flex flex-col items-center">
        <h1 className="card-title text-4xl">Luis Mendieta</h1>
        <img
          src="/avatar.jpg"
          alt="Luis Mendieta picture"
          className="rounded-lg"
          width={250}
        />
        <p className="text-xl text-center">
          Sr. Full-Stack Software Engineer
          <br />
          Based in Mexico 🇲🇽
        </p>
        <div className="flex gap-5">
          <a
            href="https://github.com/luisintosh"
            className="btn btn-circle btn-outline"
          >
            <ion-icon name="logo-github" size="large"></ion-icon>
          </a>
          <a
            href="https://www.linkedin.com/in/luismendieta/"
            className="btn btn-circle btn-outline"
          >
            <ion-icon name="logo-linkedin" size="large"></ion-icon>
          </a>
          <a
            href="https://dev.to/luisintosh"
            className="btn btn-circle btn-outline"
          >
            <ion-icon name="newspaper" size="large"></ion-icon>
          </a>
        </div>
        <a href="#contact" className="btn btn-block btn-primary">
          Contact me!
        </a>
      </div>
    </div>
  );
}

export default ProfileCard;
