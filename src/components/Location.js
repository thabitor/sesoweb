
function Location() {
  return (
    <div className="contact-map-panel">
      <iframe
        id="gmap_canvas"
        width="100%"
        height="430"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        title="Adresse SESO"
        src="https://maps.google.com/maps?width=100%25&amp;height=430&amp;hl=fr&amp;q=Rue%20de%20Parme%2026+(SESO)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      >
        <a href="https://www.gps.ie/">gps devices</a>
      </iframe>
    </div>
  );
}

export default Location;
