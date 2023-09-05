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

const Main = () => {
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
          <div className={style.col__item}>
            <div className={style.header}>
              <h4 className={style.header__title}>Bitmain</h4>
              <p className={style.header__subtitle}>Asic майнеры</p>
            </div>
            <img className={style.image} src={Asic} alt="Product" />
          </div>
          <div className={classNames(style.col__item, style.dark)}>
            <div className={style.header}>
              <h4 className={style.header__title}>Whatsminer</h4>
              <p className={style.header__subtitle}>Asic майнеры</p>
            </div>
            <img className={style.image} src={M50s} alt="Product" />
          </div>
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
              <div className={style.col__item}>
                <div className={style.header}>
                  <h4 className={style.header__title}>Майнинг</h4>
                  <p className={style.header__subtitle}>пул</p>
                </div>
                <img className={style.image} src={Coin} alt="Product" />
              </div>
              <div className={style.col__item}>
                <div className={style.header}>
                  <h4 className={style.header__title}>Майнинг</h4>
                  <p className={style.header__subtitle}>контейнер</p>
                </div>
                <img className={style.image} src={Container} alt="Product" />
              </div>
            </div>
            <div
              className={classNames(
                "col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6",
                style.col,
                style.colSubSecond
              )}
            >
              <div className={classNames(style.col__item, style.dark)}>
                <div className={style.header}>
                  <h4 className={style.header__title}>Майнинг</h4>
                  <p className={style.header__subtitle}>отель</p>
                </div>
                <img className={style.image} src={Hotel} alt="Product" />
              </div>
              <div className={style.col__item}>
                <div className={style.header}>
                  <h4 className={style.header__title}>Газопоршневая</h4>
                  <p className={style.header__subtitle}>электростанция</p>
                </div>
                <img className={style.image} src={Gas} alt="Product" />
              </div>
            </div>
          </div>
          <div className={classNames("col-12", style.col__item, style.wide)}>
            <div className={style.header}>
              <h4 className={style.header__title}>Блокчейн</h4>
              <p className={style.header__subtitle}>разработка</p>
            </div>
            <img className={style.image} src={Blockchain} alt="Product" />
          </div>
        </div>

        <div
          className={classNames(
            "col-xxl-2 col-xl-3",
            style.col,
            style.colThird
          )}
        >
          <div className={style.col__item}>
            <div className={style.header}>
              <h4 className={style.header__title}>Майнеры</h4>
              <p className={style.header__subtitle}>оптом</p>
            </div>
            <img className={style.image} src={Boxes} alt="Product" />
          </div>
          <div className={classNames(style.col__item, style.dark)}>
            <div className={style.header}>
              <h4 className={style.header__title}>Водоблоки</h4>
              <p className={style.header__subtitle}>для майнинга</p>
            </div>
            <img className={style.image} src={Water} alt="Product" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
