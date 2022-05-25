import rusIcon from '@images/subjectIcons/russian_icon.svg';
import mathIcon from '@images/subjectIcons/math_icon.svg';
import socialIcon from '@images/subjectIcons/social_icon.svg';
import engIcon from '@images/subjectIcons/eng_icon.svg';
import iktIcon from '@images/subjectIcons/ikt_icon.svg';
import bioIcon from '@images/subjectIcons/bio_icon.svg';
import geoIcon from '@images/subjectIcons/geo_icon.svg';
import chemIcon from '@images/subjectIcons/chem_icon.svg';
import physIcon from '@images/subjectIcons/physic_icon.svg';
import litrIcon from '@images/subjectIcons/liter_icon.svg';
import histIcon from '@images/subjectIcons/history_icon.svg';
import creativeIcon from '@images/subjectIcons/creative_icon.svg';


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
    case "Испытание":
      return creativeIcon;
    default:
      return rusIcon;
  }
};

export default pickImage;