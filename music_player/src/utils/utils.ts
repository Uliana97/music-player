import { v4 as uuidv4 } from 'uuid';

export const chillHop = () => {
  return [
    {
      name: "Lilo",
      cover: "https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",
      artist: "Middle School, The Field Tapes",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11244",
      color: ['#BBD2D6', '#4C6045'],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Hau Nalu",
      cover: "https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-1024x1024.jpg",
      artist: "FloFilz, Kostral One",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10334",
      color: ['#A792A6', '#3C3355'],
      id: uuidv4(),
      active: false,
    },
    {
      name: "False Hope",
      cover: "https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-1024x1024.jpg",
      artist: "Nymano, Pandrezz",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10148",
      color: ['#171312', '#B08298'],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Mirage",
      cover: "https://chillhop.com/wp-content/uploads/2020/07/e2c1d247228c0f82e459dc340741e0b1a46c8f5f-1024x1024.jpg",
      artist: "Nymano, j'san",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10136",
      color: ['#E9D49E', '#2B59AC'],
      id: uuidv4(),
      active: true,
    },
    // {
    //   name: "",
    //   cover: "",
    //   artist: "",
    //   audio: "",
    //   color: [],
    //   id: uuidv4(),
    //   active: true,
    // },
    // {
    //   name: "",
    //   cover: "",
    //   artist: "",
    //   audio: "",
    //   color: [],
    //   id: uuidv4(),
    //   active: true,
    // },

  ]
}