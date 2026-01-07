import React from "react";
import { Typography } from "../components/atoms/Typography/Typography";

const linkStyle: React.CSSProperties = {
  color: "#1976d2",
  textDecoration: "none",
  fontWeight: 500,
  transition: "color 0.2s",
};

const listStyle: React.CSSProperties = {
  marginBottom: 20,
  marginTop: 0,
  paddingLeft: 24,
  display: "flex",
  flexDirection: "column",
  gap: "8px",
};

const sectionStyle: React.CSSProperties = {
  marginTop: 28,
  marginBottom: 12,
};

const PrivacyPolicy: React.FC = () => {
  const textColor = "#fff";
  const bgColor = "#181818";

  return (
    <div
      style={{
        maxWidth: 700,
        margin: "40px auto",
        padding: "32px 20px",
        background: bgColor,
        borderRadius: 12,
        boxShadow: "0 2px 12px 0 rgba(0,0,0,0.07)",
        color: textColor,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h1" style={{ marginBottom: 28, color: textColor }}>
        Polityka prywatności
      </Typography>
      <Typography variant="body" style={{ marginBottom: 18, color: textColor }}>
        Twoja prywatność jest dla nas bardzo ważna. Poniżej znajdziesz
        informacje dotyczące przetwarzania Twoich danych osobowych w aplikacji
        FitTrack.
      </Typography>

      <Typography variant="h2" style={{ ...sectionStyle, color: textColor }}>
        §1 Jakie dane zbieramy?
      </Typography>
      <ul style={listStyle}>
        <li>
          <b>Adres e-mail</b> – wymagany do rejestracji, logowania oraz
          odzyskiwania hasła.
        </li>
        <li>
          <b>Nazwa użytkownika</b> – wyświetlana w aplikacji.
        </li>
        <li>
          <b>Hasło</b> – przechowywane w formie zaszyfrowanej (hashowane).
        </li>
        <li>
          <b>Dane dotyczące aktywności fizycznej</b> – np. typy treningów, daty,
          statystyki.
        </li>
      </ul>

      <Typography variant="h2" style={{ ...sectionStyle, color: textColor }}>
        §2 W jakim celu przetwarzamy dane?
      </Typography>
      <ul style={listStyle}>
        <li>Założenie i obsługa konta użytkownika.</li>
        <li>Umożliwienie logowania i odzyskiwania hasła.</li>
        <li>Wyświetlanie i analizowanie Twoich postępów treningowych.</li>
        <li>
          Zapewnienie bezpieczeństwa (np. ochrona przed nadużyciami, limity
          logowań).
        </li>
        <li>
          Umożliwienie dostępu do danych na komputerze i urządzeniu mobilnym.
        </li>
      </ul>

      <Typography variant="h2" style={{ ...sectionStyle, color: textColor }}>
        §3 Kto ma dostęp do Twoich danych?
      </Typography>
      <Typography variant="body" style={{ marginBottom: 16, color: textColor }}>
        Dostęp do Twoich danych mają wyłącznie upoważnieni administratorzy
        aplikacji FitTrack. Dane nie są przekazywane podmiotom trzecim.
      </Typography>

      <Typography variant="h2" style={{ ...sectionStyle, color: textColor }}>
        §4 Jak długo przechowujemy dane?
      </Typography>
      <Typography variant="body" style={{ marginBottom: 16, color: textColor }}>
        Dane przechowujemy przez czas korzystania z aplikacji oraz do momentu
        usunięcia konta przez użytkownika.
      </Typography>

      <Typography variant="h2" style={{ ...sectionStyle, color: textColor }}>
        §5 Jakie masz prawa?
      </Typography>
      <ul style={listStyle}>
        <li>Prawo dostępu do swoich danych.</li>
        <li>Prawo do poprawiania danych.</li>
        <li>Prawo do usunięcia konta i danych.</li>
        <li>Prawo do ograniczenia przetwarzania.</li>
      </ul>

      <Typography variant="body" style={{ marginTop: 24, color: textColor }}>
        W razie pytań lub chęci realizacji swoich praw, skontaktuj się z
        administratorem aplikacji.
      </Typography>

      <Typography variant="body" style={{ marginTop: 24, color: textColor }}>
        Powrót do{" "}
        <a
          href="/"
          style={linkStyle}
          onMouseOver={(e) => (e.currentTarget.style.color = "#125099")}
          onMouseOut={(e) => (e.currentTarget.style.color = "#1976d2")}
        >
          strony głównej
        </a>
        .
      </Typography>
    </div>
  );
};

export default PrivacyPolicy;
