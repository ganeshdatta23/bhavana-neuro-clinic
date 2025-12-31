interface GoogleMapEmbedProps {
  address: string;
  className?: string;
}

export function GoogleMapEmbed({ address, className = '' }: GoogleMapEmbedProps) {
  const encodedAddress = encodeURIComponent(address);
  const mapUrl = `https://www.google.com/maps?q=${encodedAddress}&output=embed`;

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
