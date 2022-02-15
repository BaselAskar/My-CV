//HTML Elements
const navList = document.querySelector(".side-bar ul");
const myImg = document.querySelector(".my-img-sidebar");

const sectionsNames = [
  "information",
  "min-profil",
  "kompentens",
  "projekt",
  "utbildningar",
  "språk",
  "social-konto",
];

//fixed navList
const navListInterSection = (entries) => {
  const [entry] = entries;

  if (!entry.isIntersecting && screen.width > 992)
    navList.classList.add("fixed-ul");
  else navList.classList.remove("fixed-ul");
};

//Observer
const navListObserver = new IntersectionObserver(navListInterSection, {
  root: null,
  threshold: 0,
});

navListObserver.observe(myImg);

sectionsNames.forEach((secName) => {
  const section = document.getElementById(`${secName}-sec`);
  const sectionHeader = section.querySelector(".h-section");

  const interSection = (entries) => {
    const [entry] = entries;

    if (entry.isIntersecting) section.classList.remove("invisible-sec");
  };

  const secNameObserver = new IntersectionObserver(interSection, {
    root: null,
    threshold: 0,
  });

  secNameObserver.observe(sectionHeader);
});

//Events
sectionsNames.forEach((secName) => {
  const btn = document.getElementById(`${secName}-btn`);
  const section = document.getElementById(`${secName}-sec`);

  btn.addEventListener("click", () =>
    section.scrollIntoView({ behavior: "smooth" })
  );
});
