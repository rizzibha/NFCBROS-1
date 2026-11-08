import { CONFIG } from "./config";
import { Card } from "./components/Card";
import { Footer } from "./components/Footer";

export default function App() {
  const {
    businessName,
    tagline,
    description,
    logoUrl,
    googleReviewUrl,
    whatsappNumber,
    whatsappMessage,
    instagramUrl,
    websiteUrl,
    brandName,
  } = CONFIG;

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="page">
      <main className="profile-shell">
        <header className="profile-header">
          <div className="brand-logo">
            <img src={logoUrl} alt={`${businessName} logo`} />
          </div>

          <p className="tagline">{tagline}</p>
          <p className="description">{description}</p>
        </header>

        <section className="links-section" aria-labelledby="links-heading">
          <div className="section-heading">
            <div>
              <p className="section-kicker">THE QUICK WAY IN</p>
              <h2 id="links-heading">Get connected<span>.</span></h2>
            </div>
            <span className="link-count">04 / 04</span>
          </div>

          <div className="link-list">
            <Card
              href={googleReviewUrl}
              brand="google"
              title="Leave a Google review"
              subtitle="Tell us what you think"
            />
            <Card
              href={instagramUrl}
              brand="instagram"
              title="Follow SORT"
              subtitle="@sort.offline"
            />
            <Card
              href={whatsappUrl}
              brand="whatsapp"
              title="Chat on WhatsApp"
              subtitle="We’re just a message away"
            />
            <Card
              href={websiteUrl}
              brand="website"
              title="Shop the collection"
              subtitle="sortofficial.com"
            />
          </div>
        </section>

        <Footer brandName={brandName} />
      </main>
    </div>
  );
}
