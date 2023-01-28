import { Logo } from "../../components/Logo";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section id="about">
      <h1>About us</h1>
      <Logo className={styles.logo} />
      <p>
        Our company is a leading provider of digital services. We specialize in
        developing innovative solutions that help businesses streamline their
        operations and improve their bottom line. Our team of experts has years
        of experience in the technology industry, and we are dedicated to
        staying on the cutting edge of new developments and trends.
      </p>
      <p>
        Our flagship product is a digital service that offers a range of
        features such as automation, analytics and security. It has been
        designed to make it easy for businesses of any size to access the
        benefits of digitalization. Our service can be customized to meet the
        specific needs of any organization, and we offer comprehensive support
        and training to ensure that our customers can make the most of the
        service.
      </p>
      <p>
        At our company, we believe that technology should be accessible to
        everyone, and we are committed to providing our customers with the best
        possible service and support. If you're interested in learning more
        about our digital services and how we can help your business, please
        don't hesitate to contact us.
      </p>
    </section>
  );
};
