import { FaUserSlash, FaEuroSign, FaBuilding, FaPlaneDeparture } from "react-icons/fa";
 const negativeTrends = [
    {
      icon: FaPlaneDeparture ,
      value: 50000,
      suffix: "+",
      description: "Godišnje napusti BiH",
      detail: "Većinom radno sposobni (BHAS, 2023)"
    },
    {
      icon: FaUserSlash,
      value: 40,
      suffix: "%",
      description: "Nezavršenih projekata",
      detail: "Zbog nedostatka radnika (FIPA)"
    },
    {
      icon: FaEuroSign,
      value: 250,
      suffix: "M€",
      description: "Gubici godišnje",
      detail: "Za privredu BiH (Svjetska Banka)"
    },
    {
      icon: FaBuilding,
      value: 35,
      suffix: "%",
      description: "Praznih radnih mjesta",
      detail: "U građevinarstvu (Komora)"
    }
  ];

  export default negativeTrends