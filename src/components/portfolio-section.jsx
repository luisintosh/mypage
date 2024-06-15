import SectionTitle from './section-title';

function PortfolioItem({ title, description, tags, imageSrc, href }) {
  return (
    <a href={href}>
      <div className="card bg-base-100 border border-neutral-700">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            {tags?.map((tag, index) => (
              <div key={index} className="badge badge-outline">
                {tag}
              </div>
            ))}
          </div>
        </div>
        <figure>
          <img src={imageSrc} alt={title} />
        </figure>
      </div>
    </a>
  );
}

function PortfolioSection() {
  return (
    <section id="portfolio">
      <SectionTitle title="Portfolio" iconName="folder" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <PortfolioItem
          title="Ultra Blockchain Wallet"
          description="Safely store private keys, manage Ultra tokens and NFTs, easily sending, receiving, and spending your digital assets."
          tags={['Angular', 'Sass']}
          imageSrc="/portfolio/ultrawallet.webp"
          href="https://developers.ultra.io/products/ultra-wallet/"
        />
        <PortfolioItem
          title="Link in bio tool: Page.digital"
          description="This tool allows users to create visually appealing landing pages that include links to their social media profiles."
          tags={['Ruby on Rails', 'Bootstrap']}
          imageSrc="/portfolio/pagedigital.webp"
          href="https://github.com/luisintosh/pagedigital"
        />
        <PortfolioItem
          title="Inventory system"
          description="Manage users, clients, providers, purchases and payments."
          tags={['Ruby on Rails', 'Bootstrap']}
          imageSrc="/portfolio/cashflow.webp"
          href="https://github.com/luisintosh/cashflow-rails"
        />
        <PortfolioItem
          title="Free movies directory: Pelisflix"
          description="A web-scraper and mobile application that enables users to watch free movies from public internet sources."
          tags={['Nodejs', 'React Native']}
          imageSrc="/portfolio/pelisflix.webp"
          href="https://github.com/luisintosh/pelisflix-reactnative"
        />
        <PortfolioItem
          title="Japan travel tips"
          description="Things to know before traveling to Japan from my perspective."
          tags={['Wordpress', 'CSS']}
          imageSrc="/portfolio/viajejapon.webp"
          href="https://viaje-japon.luis.best/"
        />
      </div>
    </section>
  );
}

export default PortfolioSection;
