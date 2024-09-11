
function Location() {
  return (
    <div className="topbottom-padding">
      <div className="container">
        {/* <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12"> */}
            <iframe
              id="gmap_canvas"
              width="100%"
              height="600"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              title="SETM Location"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Rue%20de%20Parme%2026+(SETM)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps devices</a>
            </iframe>
          </div>
        </div>
    //   </div>
    // </div>
  );
}

export default Location;
