interface GoogleMapEmbedProps {
  address?: string;
  url?: string;
  className?: string;
}

export function GoogleMapEmbed({ address, url, className = '' }: GoogleMapEmbedProps) {
  let mapUrl = '';

  if (url && url.includes('place/')) {
    // Attempt to extract coordinates first
    const placeMatch = url.match(/@([0-9.-]+),([0-9.-]+)/);
    if (placeMatch) {
      const [, lat, lng] = placeMatch;
      mapUrl = `https://www.google.com/maps?q=${lat},${lng}&output=embed`;
    } else {
      // Last resort: try to use the place name from URL
      const nameMatch = url.match(/place\/([^/]+)/);
      if (nameMatch) {
        mapUrl = `https://www.google.com/maps?q=${nameMatch[1]}&output=embed`;
      }
    }
  }

  // Fallback to address if mapUrl is still empty
  if (!mapUrl && address) {
    const encodedAddress = encodeURIComponent(address);
    mapUrl = `https://www.google.com/maps?q=${encodedAddress}&output=embed`;
  }

  return (
    <div className={className}>
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Clinic Location Map"
      />
    </div>
  );
}
