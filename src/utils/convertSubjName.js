const convertSubjName = (subject) => {
  switch(subject){
    case "rus":
      return "РЯ";
    case "math":
      return "М";
    case "social":
      return "О";
    case "eng":
      return "ИЯ";
    case "ikt":
      return "ИКТ";
    case "bio":
      return "Б";
    case "geo":
      return "Г";
    case "chem":
      return "Х";
    case "phys":
      return "Ф";
    case "litr":
      return "Л";
    case "hist":
      return "И";
    case "ikt/phys":
      return "ИКТ | Ф"
    case "hist/eng":
      return "И | ИЯ"
    case "hist/litr":
      return "И | Л"
    case "social/eng":
      return "О | ИЯ"
    case "social/hist":
      return "О | И"
    case "math/social":
      return "М | О"
    case "chem/math":
      return "Х | М"
    case "math/bio":
      return "М | Б"
    case "ikt/eng":
      return "ИКТ | ИЯ"
    case "creative":
      return "Испытание"
    default:
      return "П";
  }
};

export default convertSubjName;