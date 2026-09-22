import { Navigation } from "lucide-react";
import "./Location.css";

const Location = () => {
  const address =
    "69-C, Block C3, Gulberg III, Lahore, Punjab, Pakistan";

  return (
    <section className="location">
      <div className="location-map">
        <iframe
          title="Our Location"
          src={`https://www.google.com/maps?q=${encodeURIComponent(
            address
          )}&output=embed`}
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>

      <div className="location-info">
        <div className="location-details">
          <h2>Visit us</h2>

          <p className="address">
            69-C, Block C3
            <br />
            Gulberg III
            <br />
            Lahore, Punjab
            <br />
            Pakistan
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
