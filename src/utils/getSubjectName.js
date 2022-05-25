const getSubjectName = (name) => {
  switch(name){
    case "rus":
      return "Русский язык";
    case "math":
      return "Математика";
    case "social":
      return "Обществознание";
    case "eng":
      return "Иностранный язык";
    case "ikt":
      return "ИКТ";
    case "bio":
      return "Биология";
    case "geo":
      return "География";
    case "chem":
      return "Химия";
    case "phys":
      return "Физика";
    case "litr":
      return "Литература";
    case "hist":
      return "История";
    case "creative":
      return "Испытание";
    default:
      return "Предмет";
  }
};

export default getSubjectName;