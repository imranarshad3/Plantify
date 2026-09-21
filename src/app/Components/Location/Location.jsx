import { Navigation } from "lucide-react";
import "./Location.css";

const Location = () => {
  const address =
    "Gekikara Street 16, Atlanta 1327 Block M Maridal, Sigurre T2G 0T2";

  return (
    <section className="location">
      <div className="location-map">
        <iframe
          title="Our Location"
          src="https://www.google.com/maps?q=Gekikara%20Street%2016%2C%20Atlanta&output=embed"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>

      <div className="location-info">
        <div className="location-details">
          <h2>Visit us</h2>

          <p className="address">
            Gekikara Street 16, Atlanta
            <br />
            1327 Block M
            <br />
            Maridal, Sigurre
            <br />
            T2G 0T2
          </p>

          <p className="open-day">
            <span>Open day</span> : 11am–5:30pm everyday
          </p>
        </div>

        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            address
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="directions-btn"
        >
          <Navigation size={16} />
          GET DIRECTIONS
        </a>
      </div>
    </section>
  );
};

export default Location;
