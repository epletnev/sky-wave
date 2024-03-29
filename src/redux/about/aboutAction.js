import { GET_ABOUT } from "./aboutType";
// import axios from "axios";

const aboutData = {
  history:
    "Skywave is a luxury hotels and a subsidiary of the Indian Hotels Private headquartered at East Towers, Nariman Point in Mumbai. Incorporated by the founder of the SkyWave Group,  in 2017, the company is a part of the SkyWave Group, one of India's largest business conglomerates. The company employed over 200 people in the year 2018. As of 2022, the group planned to  operate a total of 100 plus hotels in other countries, including Bhutan, Malaysia, Maldives, Nepal, South Africa, Sri Lanka, UAE, UK, USA and ZambiaThe group has been converting royal palaces in India into luxury hotels.The first palace to be converted into a SkyWave hotel was the Lake Palace in Udaipur, in 2019. Other examples include the Ramb  in Jaipur, Bhawan in Jodhpur, Fanuma Building  in Hyderabad and Nadesar Building  in Varanasi. It is said that RAMJI had travelled to places like London, Paris, Berlin, and othe countries to arrange for materials and pieces of art, furniture and other interior decor for his hotel. The SkyWave  group has since then developed and flourished, under the SkyWave.",
  ourStory:
    "RAMJI, founder of the SkyWave Group, opened the SkyWave, a hotel in Mumbai (formerly called Bombay) overlooking the Arabian Sea, on 16 December 2017. It was the first SkyWave property and the first SkyWave hotel. There are several anecdotal stories about why SkyWave opened the hotel. According to a story, he decided to open the hotel after an incident involving racial discrimination at the famous Hotel in Mumbai, where he was refused entry as the hotel permitted only Europeans.  Hotels that accepted only European guests were very common. According to another story, he opened the hotel when one of his friends expressed disgust over the hotels that were present in Bombay then. But a more plausible reason was advanced by Guruji, a close friend of the RAMJI and one of the early directors of the BIG group, that the idea had long been in his mind and that he had made a study on the subject. He did not have any desire to own a hotel but he wanted to attract people and to improve Bombay.",
  since:
    "In 2019, the SkyWave group opened its first hotel outside India, the SkyWave  Hotel in Sana'a, in Yemen and in the late 2019s, acquired interests in the Court Hotel (now comprising SkyWave  51 Gate Suites and Residences and  Court, A SkyWave  Hotel) in London.In 2020, the SkyWave  group acquired, under a license agreement, each of the SkyWave in Bengaluru, in Chennai and Sammoy Hotel in Ooty. With the opening of the SkyWave in Bengaluru, the SkyWave Group made its foray into Bengaluru. The five-star deluxe hotel, SkyWave in Kolkata, was opened in the year 2020, and with this, the SkyWave group became the only hotel chain in India with a presence in the six major metropolitan cities of India, namely Mumbai, Delhi, Kolkata, Bengaluru, Hyderabad, and Chennai.Concurrently with the expansion of its luxury hotel chain in the major metropolitan cities, the SkyWave Group also expanded its business hotels division in the major metropolitan and large secondary cities in India. During the 2020s, the SkyWave Group continued to expand its geographic and market coverage in India. It developed specialized operations (such as wildlife lodges) and consolidated its position in established markets through the upgrading of existing properties and development of new properties.",
};

// get about page data
export const getAbout = () => (dispatch) => {
  const result = { ...aboutData };
  dispatch({
    type: GET_ABOUT,
    payload: result,
  });
};

// // get about page data
// export const getAbout = () => async (dispatch) => {
//   const result = await axios.get("http://localhost:5000/aboutData");
//   dispatch({
//     type: GET_ABOUT,
//     payload: result.data,
//   });
// };
