import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className="list1">
        <ul>
          <li className="name1">Subscribtion</li>
          <li className="name2">
            <a href="/" target="_blank">
              Prices and offers
            </a>
          </li>
          <li className="name2">
            <a href="/" target="_blank">
              Subscribe now
            </a>
          </li>
        </ul>
      </div>
      <div class="list2">
        <ul>
          <li className="name1">Helps</li>
          <li className="name2">
            <a href="/" target="_blank">
              Send and e-mail 📧
            </a>
          </li>
          <li className="name2">
            <a href="/" target="_blank">
              Chat with us! 📱
            </a>
          </li>
        </ul>
      </div>

      <div className="newsletterBox">
        <p class="newsletter">Newsletter</p>
        <p class="newsletterParagraph">
          Do you want to receive news about the latest series and films?
          Subscribe now to the newsletter!
        </p>
        <input
          type="text"
          id="footerEmail"
          name="email"
          placeholder="Your email"
        ></input>
      </div>
    </section>
  );
};

export default Footer;
