const GoogleMap = ({
  address = 'House 42, Road 7, Section 10, Mirpur, Dhaka 1216, Bangladesh',
  width = '100%',
  height = '400',
  zoom = '15',
}) => {
  // Encode the address for URL
  const encodedAddress = encodeURIComponent(address);

  const mapSrc = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=${zoom}&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="map-container">
      <iframe
        src={mapSrc}
        width={width}
        height={height}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps"
      />
    </div>
  );
};

export default GoogleMap;
