import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { VerifyAccountLayout } from "../components/templates/VerifyAccountLayout/VerifyAccountLayout";

export const VerifyAccount = () => {
  const { token } = useParams<{ token: string }>();
  const [message, setMessage] = useState("Weryfikuję konto...");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) return;

    fetch(`/api/users/verify/${token}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          setMessage("Konto zostało zweryfikowane!");
          setTimeout(() => navigate("/me"), 2500);
        } else {
          setMessage("Nieprawidłowy lub wygasły link.");
          setTimeout(() => navigate("/home"), 2500);
        }
      })
      .catch(() => {
        setMessage("Wystąpił błąd przy weryfikacji.");
        setTimeout(() => navigate("/home"), 2500);
      });
  }, [token]);

  return <VerifyAccountLayout message={message} />;
};
