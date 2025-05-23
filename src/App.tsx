import { ButtonMobile } from "@alfalab/core-components/button/mobile";

import { Typography } from "@alfalab/core-components/typography";

import nabor1 from "./assets/nabor1.png";
import nabor2 from "./assets/nabor2.png";
import nabor3 from "./assets/nabor3.png";
import nabor4 from "./assets/nabor4.png";
import nabor5 from "./assets/nabor5.png";
import nabor7 from "./assets/nabor7.png";
import nabor8 from "./assets/nabor8.png";
import nabor9 from "./assets/nabor9.png";
import nabor10 from "./assets/nabor10.png";
import naborDefault from "./assets/nabor-default.png";
import { LS, LSKeys } from "./ls";
import { appSt } from "./style.css";
import { ThxLayout } from "./thx/ThxLayout";
import { Gap } from "@alfalab/core-components/gap";
import { useState } from "react";

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [naborType, setNaborType] = useState("0");
  const [thx, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));

  const submit = () => {
    setLoading(true);
    Promise.resolve().then(() => {
      setLoading(false);
      setThx(true);
      LS.setItem(LSKeys.ShowThx, true);
    });
  };

  if (thx) {
    return <ThxLayout />;
  }

  return (
    <>
      <div className={appSt.container}>
        <Typography.TitleResponsive
          font="system"
          tag="h3"
          view="medium"
          className={appSt.productsTitle}
        >
          Приложение в вашем стиле
        </Typography.TitleResponsive>
        <Gap size={8} />
        <Typography.Text
          tag="p"
          view="primary-large"
          style={{ marginBottom: 0, padding: "0 1rem" }}
        >
          Оформите приложение под свой характер, вкус и настроение
        </Typography.Text>

        <Gap size={28} />

        <Typography.Text
          tag="p"
          view="primary-large"
          weight="bold"
          style={{ padding: "0 1rem" }}
        >
          Наборы
        </Typography.Text>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            padding: "0 1rem",
            justifyContent: "space-evenly",
          }}
        >
          <div
            onClick={() => setNaborType("0")}
            style={{ width: "calc(50% - 1rem)" }}
          >
            <img
              src={naborDefault}
              width={130}
              height={126}
              className={appSt.imageSlide({
                selected: naborType === "0",
              })}
              alt=""
              style={{ justifySelf: "center", display: "block" }}
            />
          </div>
          <div
            onClick={() => setNaborType("1")}
            style={{ width: "calc(50% - 1rem)" }}
          >
            <img
              src={nabor1}
              width={130}
              height={126}
              className={appSt.imageSlide({
                selected: naborType === "1",
              })}
              alt=""
              style={{ justifySelf: "center", display: "block" }}
            />
          </div>
          <div
            onClick={() => setNaborType("2")}
            style={{ width: "calc(50% - 1rem)" }}
          >
            <img
              src={nabor2}
              width={130}
              height={126}
              className={appSt.imageSlide({
                selected: naborType === "2",
              })}
              alt=""
              style={{ justifySelf: "center", display: "block" }}
            />
          </div>
          <div
            onClick={() => setNaborType("3")}
            style={{ width: "calc(50% - 1rem)" }}
          >
            <img
              src={nabor3}
              width={130}
              height={126}
              className={appSt.imageSlide({
                selected: naborType === "3",
              })}
              alt=""
              style={{ justifySelf: "center", display: "block" }}
            />
          </div>
          <div
            onClick={() => setNaborType("4")}
            style={{ width: "calc(50% - 1rem)" }}
          >
            <img
              src={nabor4}
              width={130}
              height={126}
              className={appSt.imageSlide({
                selected: naborType === "4",
              })}
              alt=""
              style={{ justifySelf: "center", display: "block" }}
            />
          </div>
          <div
            onClick={() => setNaborType("5")}
            style={{ width: "calc(50% - 1rem)" }}
          >
            <img
              src={nabor5}
              width={130}
              height={126}
              className={appSt.imageSlide({
                selected: naborType === "5",
              })}
              alt=""
              style={{ justifySelf: "center", display: "block" }}
            />
          </div>
          <div
            onClick={() => setNaborType("6")}
            style={{ width: "calc(50% - 1rem)" }}
          >
            <img
              src={nabor7}
              width={130}
              height={126}
              className={appSt.imageSlide({
                selected: naborType === "6",
              })}
              alt=""
              style={{ justifySelf: "center", display: "block" }}
            />
          </div>
          <div
            onClick={() => setNaborType("7")}
            style={{ width: "calc(50% - 1rem)" }}
          >
            <img
              src={nabor8}
              width={130}
              height={126}
              className={appSt.imageSlide({
                selected: naborType === "7",
              })}
              alt=""
              style={{ justifySelf: "center", display: "block" }}
            />
          </div>
          <div
            onClick={() => setNaborType("8")}
            style={{ width: "calc(50% - 1rem)" }}
          >
            <img
              src={nabor9}
              width={130}
              height={126}
              className={appSt.imageSlide({
                selected: naborType === "8",
              })}
              alt=""
              style={{ justifySelf: "center", display: "block" }}
            />
            <Typography.Text
              tag="p"
              view="primary-medium"
              weight="bold"
              style={{ textAlign: "center", marginBottom: 0 }}
            >
              49₽
            </Typography.Text>
          </div>
          <div
            onClick={() => setNaborType("9")}
            style={{ width: "calc(50% - 1rem)" }}
          >
            <img
              src={nabor10}
              width={130}
              height={126}
              className={appSt.imageSlide({
                selected: naborType === "9",
              })}
              alt=""
              style={{ justifySelf: "center", display: "block" }}
            />
            <Typography.Text
              tag="p"
              view="primary-medium"
              weight="bold"
              style={{ textAlign: "center", marginBottom: 0 }}
            >
              49₽
            </Typography.Text>
          </div>
        </div>
      </div>

      <Gap size={96} />

      <div className={appSt.bottomBtnThx}>
        <ButtonMobile loading={loading} onClick={submit} block view="primary">
          Сделать красиво
        </ButtonMobile>
      </div>
    </>
  );
};
