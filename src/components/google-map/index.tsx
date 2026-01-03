interface GoogleMapEmbedProps {
  address?: string;
  url?: string;
  className?: string;
}

export function GoogleMapEmbed({ address, url, className = '' }: GoogleMapEmbedProps) {
  let mapUrl: string;

  if (url) {
    // If a direct URL is provided, extract the place ID or use embed format
    if (url.includes('place/')) {
      // Extract place name and coordinates from the URL
      const placeMatch = url.match(/place\/([^/]+)\/@([0-9.-]+),([0-9.-]+)/);
      if (placeMatch) {
        const [, placeName, lat, lng] = placeMatch;
        mapUrl = `https://www.google.com/maps?q=${lat},${lng}&output=embed`;
      } else {
        // Fallback to converting the normal URL to embed
        mapUrl = url.replace('/maps/place/', '/maps/embed/v1/place?key=').replace(/\?.*$/, '');
      }
    } else {
      mapUrl = url;
    }
  } else if (address) {
    const encodedAddress = encodeURIComponent(address);
    mapUrl = `https://www.google.com/maps?q=${encodedAddress}&output=embed`;
  } else {
    mapUrl = '';
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
