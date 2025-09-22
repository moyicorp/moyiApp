import LoginMoyi from "@/assets/images/loginMoyi.png";
import logoImage from "@/assets/images/moyiLogo.png";
import Moyitemp from "@/assets/images/moyiLogoHome.png";
import SignUpMoyi from "@/assets/images/signUpPic.png";

import arrowUp from "@/assets/icons/arrow-up.png";
import backArrow from "@/assets/icons/back-arrow.png";
import chat from "@/assets/icons/chat.png";
import checkmark from "@/assets/icons/check.png";
import close from "@/assets/icons/close.png";
import dollar from "@/assets/icons/dollar.png";
import email from "@/assets/icons/email.png";
import eyecross from "@/assets/icons/eyecross.png";
import google from "@/assets/icons/google.png";
import home from "@/assets/icons/home.png";
import list from "@/assets/icons/list.png";
import lock from "@/assets/icons/lock.png";
import map from "@/assets/icons/map.png";
import marker from "@/assets/icons/marker.png";
import out from "@/assets/icons/out.png";
import person from "@/assets/icons/person.png";
import phone from "@/assets/icons/phone.png";
import pin from "@/assets/icons/pin.png";
import point from "@/assets/icons/point.png";
import profile from "@/assets/icons/profile.png";
import search from "@/assets/icons/search.png";
import selectedMarker from "@/assets/icons/selected-marker.png";
import star from "@/assets/icons/star.png";
import target from "@/assets/icons/target.png";
import to from "@/assets/icons/to.png";

export const images = {
  logo: logoImage,
  moyi: Moyitemp,
  loginPic: LoginMoyi,
  signUpPic: SignUpMoyi,
};
export const icons = {
  // arrowDown,
  phone,
  arrowUp,
  backArrow,
  chat,
  checkmark,
  close,
  dollar,
  email,
  eyecross,
  google,
  home,
  list,
  lock,
  map,
  marker,
  out,
  person,
  pin,
  point,
  profile,
  search,
  selectedMarker,
  star,
  target,
  to,
};

export const productDescriptions = [
  {
    id: 1,
    title: "Welcome to Moyi",
    price: "Free",
    quantity: 1,
    color: "#FFCC00",
    size: "Large",
    description: "Cliquez, Souriez,Brillez, Moyi!",
    image: images.logo,
  },
  {
    title: "Track Your Spending",
    price: "Free",
    quantity: 1,
    color: "#FFCC00",
    size: "Large",
    description: "Easily track your expenses and stay on budget.",
    // image: require("../../assets/images/slide2.png"),
  },
  {
    title: "Achieve Your Goals",
    color: "#FFCC00",
    quantity: 1,
    size: "Large",
    price: "Free",
    description: "Set financial goals and achieve them with Moyi.",
    //image: require("../../assets/images/slide3.png"),
  },
];
