export default function JsonLd() {
  const businessData = {
    "@context": "https://schema.org",
    "@type": "MakeupBeauty",
    "name": "Royal Touch Beauty Care & Academy",
    "image": "https://media.bizonance.in/api/v1/image/download/.../logo.jpg",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Amravati",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "url": "https://royaltouchacademy.com",
    "description": "Premium makeup artist and beauty academy in Amravati offering bridal makeup and professional courses."
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData) }}
    />
  );
}