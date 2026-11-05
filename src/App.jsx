import { CONFIG } from "./config";
import { Card } from "./components/Card";
import { Footer } from "./components/Footer";

export default function App() {
  const {
    businessName,
    tagline,
    description,
    googleReviewUrl,
    whatsappNumber,
    whatsappMessage,
    instagramUrl,
    websiteUrl,
    logoUrl,
    avatarInitials,
    brandName,
  } = CONFIG;

  const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center px-4 py-10 sm:py-16 relative overflow-x-hidden"
      style={{ background: "var(--color-ink)" }}
    >
      {/* Grain texture overlay */}
      <div className="bg-grain" aria-hidden="true" />

      {/* Subtle thread accent glow */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full blur-[120px] animate-floatSlow"
        style={{ background: "var(--color-thread-dim)", opacity: 0.15 }}
        aria-hidden="true"
      />

      {/* Header / Brand */}
      <header className="relative flex flex-col items-center text-center mb-12 w-full max-w-md z-10">
        {/* Logo */}
        <div className="mb-6 animate-fadeUp">
          {logoUrl ? (
            <div className="logo-wrap inline-block">
              <img
                src={logoUrl}
                alt={businessName}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-[12px] object-cover"
              />
            </div>
          ) : (
            <div
              className="logo-wrap inline-block"
              style={{ background: "var(--color-paper)" }}
            >
              <div
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-[12px] grid place-items-center font-black text-[22px] sm:text-[28px] tracking-tight"
                style={{ color: "var(--color-ink)" }}
              >
                {avatarInitials}
              </div>
            </div>
          )}
        </div>

        {/* Brand name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-[-0.02em] animate-fadeUp delay-100" style={{ color: "var(--color-paper)" }}>
          {businessName}
        </h1>

        {/* Thread accent line */}
        <div className="thread-line w-16 mx-auto mt-4 animate-fadeUp delay-200" aria-hidden="true" />

        {/* Tagline */}
        <p className="mt-5 text-base sm:text-lg font-medium tracking-wide uppercase animate-fadeUp delay-300" style={{ color: "var(--color-thread)" }}>
          {tagline}
        </p>

        {/* Description */}
        <p className="mt-4 max-w-xs text-sm sm:text-base leading-relaxed animate-fadeUp delay-400" style={{ color: "var(--color-paper-2)" }}>
          {description}
        </p>
      </header>

      {/* Action Cards */}
      <main className="relative w-full max-w-md grid gap-3 z-10">
        {/* 1. Google Review */}
        <Card
          href={googleReviewUrl}
          brand="google"
          title="GOOGLE REVIEW"
          subtitle="Rate your experience"
        />

        {/* 2. Instagram */}
        <Card
          href={instagramUrl}
          brand="instagram"
          title="INSTAGRAM"
          subtitle="@sort.offline"
        />

        {/* 3. WhatsApp */}
        <Card
          href={waUrl}
          brand="whatsapp"
          title="WHATSAPP"
          subtitle="Chat with us"
        />

        {/* 4. Website */}
        <Card
          href={websiteUrl}
          brand="website"
          title="VISIT WEBSITE"
          subtitle="sortofficial.com"
        />
      </main>

      {/* Footer */}
      <Footer brandName={brandName} config={CONFIG} />
    </div>
  );
}