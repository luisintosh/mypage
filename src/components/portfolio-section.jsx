import SectionTitle from './section-title';

function PortfolioItem({ title, description, tags, imageSrc }) {
  return (
    <div className="card bg-base-100 border border-current max-w-[720px] aspect-square">
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
  );
}

function PortfolioSection() {
  return (
    <section>
      <SectionTitle id="portfolio" title="Portfolio">
        <ion-icon name="folder"></ion-icon>
      </SectionTitle>
      <div className="flex flex-col gap-10">
        <PortfolioItem
          title="Ultra Blockchain Wallet"
          description="Safely store private keys, manage Ultra tokens and NFTs, easily sending, receiving, and spending your digital assets."
          tags={['Angular', 'Sass']}
          imageSrc="/portfolio/ultrawallet.png"
        />
        <PortfolioItem
          title="Link in bio tool: Page.digital"
          description="This tool allows users to create visually appealing landing pages that include links to their social media profiles."
          tags={['Ruby on Rails', 'Bootstrap']}
          imageSrc="/portfolio/pagedigital.png"
        />
        <PortfolioItem
          title="Inventory system"
          description="Manage users, clients, providers, purchases and payments."
          tags={['Ruby on Rails', 'Bootstrap']}
          imageSrc="/portfolio/cashflow.png"
        />
        <PortfolioItem
          title="Free movies directory: Pelisflix"
          description="A web-scraper and mobile application that enables users to watch free movies from public internet sources."
          tags={['Nodejs', 'React Native']}
          imageSrc="/portfolio/pelisflix.png"
        />
      </div>
    </section>
  );
}

export default PortfolioSection;
