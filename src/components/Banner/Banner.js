import MailTo from "../MailTo/MailTo";

function Banner(props) {
  let imageUrl = props.backgroundImage;

  return (
    <section className="banner" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="container d-flex justify-content-between">
        <div className="banner__content">
          <h3>{props.title}</h3>
          <p>{props.text}</p>
          <button className="button-primary" aria-label={props.buttonLabel}>
            <MailTo
              email="foo@bar.baz"
              subject="Hello & Welcome"
              body="Hello world!"
            >
              {props.buttonLabel}
            </MailTo>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Banner;
