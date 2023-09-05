import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

import classNames from "../../lib/classNames";

import Asic from "../../assets/asic.png";
import Blockchain from "../../assets/blockchain.png";
import Boxes from "../../assets/boxes.png";
import Coin from "../../assets/coin.png";
import Container from "../../assets/container.png";
import Gas from "../../assets/gas.png";
import Water from "../../assets/water.png";
import M50s from "../../assets/m50s.png";
import Hotel from "../../assets/hotel.png";

import style from "./index.module.scss";

const animationVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const headerAnimationVariants = {
  hidden: {
    y: -50,
  },
  visible: {
    y: 0,
  },
};

const animationDuration = 0.4;
const animationDelayDelta = 0.08;

const headerAnimationDuration = 0.5;

const Main = () => {
  const animationControls = useAnimation();

  useEffect(() => {
    animationControls.start("visible");
  }, [animationControls]);

  return (
    <div className={style.main}>
      <div className="row">
        <div
          className={classNames(
            "col-xxl-4 col-xl-4",
            style.col,
            style.colFirst
          )}
        >
          <motion.div
            variants={animationVariants}
            initial="hidden"
            animate={animationControls}
            transition={{ duration: animationDuration }}
            className={style.col__item}
          >
            <motion.div
              variants={headerAnimationVariants}
              initial="hidden"
              animate={animationControls}
              transition={{ duration: headerAnimationDuration }}
              className={style.header}
            >
              <h4 className={style.header__title}>Bitmain</h4>
              <p className={style.header__subtitle}>Asic майнеры</p>
            </motion.div>
            <img className={style.image} src={Asic} alt="Product" />
          </motion.div>
          <motion.div
            variants={animationVariants}
            initial="hidden"
            animate={animationControls}
            transition={{
              duration: animationDuration,
              delay: animationDelayDelta,
            }}
            className={classNames(style.col__item, style.dark)}
          >
            <motion.div
              variants={headerAnimationVariants}
              initial="hidden"
              animate={animationControls}
              transition={{
                duration: headerAnimationDuration,
                delay: animationDelayDelta,
              }}
              className={style.header}
            >
              <h4 className={style.header__title}>Whatsminer</h4>
              <p className={style.header__subtitle}>Asic майнеры</p>
            </motion.div>
            <img className={style.image} src={M50s} alt="Product" />
          </motion.div>
        </div>

        <div
          className={classNames(
            "col-xxl-6 col-xl-5",
            style.col,
            style.colSecond
          )}
        >
          <div className={classNames("row", style.row)}>
            <div
              className={classNames(
                "col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6",
                style.col,
                style.colSubFirst
              )}
            >
              <motion.div
                variants={animationVariants}
                initial="hidden"
                animate={animationControls}
                transition={{
                  duration: animationDuration,
                  delay: animationDelayDelta * 2,
                }}
                className={style.col__item}
              >
                <motion.div
                  variants={headerAnimationVariants}
                  initial="hidden"
                  animate={animationControls}
                  transition={{
                    duration: headerAnimationDuration,
                    delay: animationDelayDelta * 2,
                  }}
                  className={style.header}
                >
                  <h4 className={style.header__title}>Майнинг</h4>
                  <p className={style.header__subtitle}>пул</p>
                </motion.div>
                <img className={style.image} src={Coin} alt="Product" />
              </motion.div>
              <motion.div
                variants={animationVariants}
                initial="hidden"
                animate={animationControls}
                transition={{
                  duration: animationDuration,
                  delay: animationDelayDelta * 3,
                }}
                className={style.col__item}
              >
                <motion.div
                  variants={headerAnimationVariants}
                  initial="hidden"
                  animate={animationControls}
                  transition={{
                    duration: headerAnimationDuration,
                    delay: animationDelayDelta * 3,
                  }}
                  className={style.header}
                >
                  <h4 className={style.header__title}>Майнинг</h4>
                  <p className={style.header__subtitle}>контейнер</p>
                </motion.div>
                <img className={style.image} src={Container} alt="Product" />
              </motion.div>
            </div>
            <div
              className={classNames(
                "col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6",
                style.col,
                style.colSubSecond
              )}
            >
              <motion.div
                variants={animationVariants}
                initial="hidden"
                animate={animationControls}
                transition={{
                  duration: animationDuration,
                  delay: animationDelayDelta * 5,
                }}
                className={classNames(style.col__item, style.dark)}
              >
                <motion.div
                  variants={headerAnimationVariants}
                  initial="hidden"
                  animate={animationControls}
                  transition={{
                    duration: headerAnimationDuration,
                    delay: animationDelayDelta * 5,
                  }}
                  className={style.header}
                >
                  <h4 className={style.header__title}>Майнинг</h4>
                  <p className={style.header__subtitle}>отель</p>
                </motion.div>
                <img className={style.image} src={Hotel} alt="Product" />
              </motion.div>
              <motion.div
                variants={animationVariants}
                initial="hidden"
                animate={animationControls}
                transition={{
                  duration: animationDuration,
                  delay: animationDelayDelta * 6,
                }}
                className={style.col__item}
              >
                <motion.div
                  variants={headerAnimationVariants}
                  initial="hidden"
                  animate={animationControls}
                  transition={{
                    duration: headerAnimationDuration,
                    delay: animationDelayDelta * 6,
                  }}
                  className={style.header}
                >
                  <h4 className={style.header__title}>Газопоршневая</h4>
                  <p className={style.header__subtitle}>электростанция</p>
                </motion.div>
                <img className={style.image} src={Gas} alt="Product" />
              </motion.div>
            </div>
          </div>
          <motion.div
            variants={animationVariants}
            initial="hidden"
            animate={animationControls}
            transition={{
              duration: animationDuration,
              delay: animationDelayDelta * 4,
            }}
            className={classNames("col-12", style.col__item, style.wide)}
          >
            <motion.div
              variants={headerAnimationVariants}
              initial="hidden"
              animate={animationControls}
              transition={{
                duration: headerAnimationDuration,
                delay: animationDelayDelta * 4,
              }}
              className={style.header}
            >
              <h4 className={style.header__title}>Блокчейн</h4>
              <p className={style.header__subtitle}>разработка</p>
            </motion.div>
            <img className={style.image} src={Blockchain} alt="Product" />
          </motion.div>
        </div>

        <div
          className={classNames(
            "col-xxl-2 col-xl-3",
            style.col,
            style.colThird
          )}
        >
          <motion.div
            variants={animationVariants}
            initial="hidden"
            animate={animationControls}
            transition={{
              duration: animationDuration,
              delay: animationDelayDelta * 7,
            }}
            className={style.col__item}
          >
            <motion.div
              variants={headerAnimationVariants}
              initial="hidden"
              animate={animationControls}
              transition={{
                duration: headerAnimationDuration,
                delay: animationDelayDelta * 7,
              }}
              className={style.header}
            >
              <h4 className={style.header__title}>Майнеры</h4>
              <p className={style.header__subtitle}>оптом</p>
            </motion.div>
            <img className={style.image} src={Boxes} alt="Product" />
          </motion.div>
          <motion.div
            variants={animationVariants}
            initial="hidden"
            animate={animationControls}
            transition={{
              duration: animationDuration,
              delay: animationDelayDelta * 8,
            }}
            className={classNames(style.col__item, style.dark)}
          >
            <motion.div
              variants={headerAnimationVariants}
              initial="hidden"
              animate={animationControls}
              transition={{
                duration: headerAnimationDuration,
                delay: animationDelayDelta * 8,
              }}
              className={style.header}
            >
              <h4 className={style.header__title}>Водоблоки</h4>
              <p className={style.header__subtitle}>для майнинга</p>
            </motion.div>
            <img className={style.image} src={Water} alt="Product" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Main;
