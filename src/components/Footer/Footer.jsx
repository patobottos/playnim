import { FooterStyled } from "./Footer.styled";

const Footer = () => {
  return (
    <FooterStyled>
      <p>
        <span className="author">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://patobottos.vercel.app/"
          >
            Pato Bottos
          </a>
          {} for IT Academy |{}
        </span>
        <span className="mentor">
          Mentoring:
          <a
            target="_blank"
            rel="noreferrer"
            href="https://pablomonteserin.com/"
          >
            Pablo Monteserín
          </a>
        </span>
        | <span className="city">Barcelona | 2023 </span>
      </p>
    </FooterStyled>
  );
};

export default Footer;
