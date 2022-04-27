import rusIcon from '@images/subjectIcons/russian_icon.png';
import mathIcon from '@images/subjectIcons/math_icon.png';
import socialIcon from '@images/subjectIcons/social_icon.png';
import engIcon from '@images/subjectIcons/eng_icon.png';
import iktIcon from '@images/subjectIcons/ikt_icon.png';
import bioIcon from '@images/subjectIcons/bio_icon.png';
import geoIcon from '@images/subjectIcons/geo_icon.png';
import chemIcon from '@images/subjectIcons/chem_icon.png';
import physIcon from '@images/subjectIcons/physic_icon.png';
import litrIcon from '@images/subjectIcons/liter_icon.png';
import histIcon from '@images/subjectIcons/history_icon.png';


const pickImage = (title) => {
  switch(title){
    case "Русский язык":
      return rusIcon;
    case "Математика":
      return mathIcon;
    case "Обществознание":
      return socialIcon;
    case "Иностранный язык":
      return engIcon;
    case "ИКТ":
      return iktIcon;
    case "Биология":
      return bioIcon;
    case "География":
      return geoIcon;
    case "Химия":
      return chemIcon;
    case "Физика":
      return physIcon;
    case "Литература":
      return litrIcon;
    case "История":
      return histIcon;
    default:
      return rusIcon;
  }
};

export default pickImage;