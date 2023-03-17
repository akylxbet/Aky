import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { fadeIn } from "../../variants";
import { motion } from "framer-motion";
import s from "./Footer.module.scss";
const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage =
    location.pathname === "/Auth" ||
    location.pathname === "/Recovery" ||
    location.pathname === "/Register";
  return (
    <>
      {isHomePage ? (
        <motion.footer
          className={s.footer}
          variants={fadeIn("down", 1.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <div className={s.container}>
            <Link to="/Register">
              <motion.span
                variants={fadeIn("left", 2.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.4 }}
              >
                <TypeAnimation
                  sequence={[
                    "Привет!",
                    3000,
                    "Как насчёт того, чтобы зарегистрироваться? ",
                    3000,
                  ]}
                  speed={40}
                  repeat={Infinity}
                />
              </motion.span>
            </Link>
          </div>
        </motion.footer>
      ) : (
        <></>
      )}
    </>
  );
};

export default Footer;
