import React from "react";
import s from "./Preloader.module.css";
import loaderSvg from "../../assets/grid.svg"

export const Preloader = () => <img src={loaderSvg} className={s.preLoader} />