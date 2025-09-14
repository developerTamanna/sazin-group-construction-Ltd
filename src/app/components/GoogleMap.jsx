'use client';

const GoogleMap = ({
  address = 'House: 432 Road:30, DOHS Mohakhali, Dhaka',
  width = '100%',
  height = '400',
  zoom = '15',
}) => {
  const encodedAddress = encodeURIComponent(address);

  const mapSrc = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=${zoom}&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="map-container ">
      <iframe
        src={mapSrc}
        width={width}
        height={height}
        style={{ border: 0 }}
        allowFullScreen
        strategy="lazyOnload"
        loading="lazy" // Lazy load to improve initial page speed
        referrerPolicy="no-referrer-when-downgrade"
        title={`Google Map of ${address}`} // SEO-friendly title
      />
    </div>
  );
};

export default GoogleMap;
