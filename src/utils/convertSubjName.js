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
    case "creative":
      return "Испытание"
    default:
      return "П";
  }
};

export default convertSubjName;