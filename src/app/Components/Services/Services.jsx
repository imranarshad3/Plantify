import { Phone, Mail } from "lucide-react";
import "./Services.css";
import background from "./Images/background.png";

const FreeShipping = () => {
  return (
    <section className="free-shipping">
      <img
        className="free-shipping-background"
        src={background}
        alt=""
      />

      <div className="free-shipping-content">
        <h2>Free Shipping Services</h2>

        <p className="shipping-note">
          *only for the same region
        </p>

        <div className="contact-info">
          <div className="contact-item">
            <Phone size={18} strokeWidth={1.5} />
            <span>+62 1189-2719-00</span>
          </div>

          <div className="contact-item">
            <Mail size={18} strokeWidth={1.5} />
            <span>order@platify.co</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeShipping;
