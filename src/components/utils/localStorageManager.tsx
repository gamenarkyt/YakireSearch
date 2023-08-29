export const onStart = () => {
  if (!localStorage.getItem("firstStart")) {
    console.log("first start");
    onFirstStart();
  }
};

const onFirstStart = () => {
  const baseBookmark = [
    {
      name: "Github",
      iconUrl:
        "https://cdn.icon-icons.com/icons2/936/PNG/512/github-logo_icon-icons.com_73546.png",
      url: "https://github.com/",
    },
  ];

  localStorage.setItem("firstStart", "false");
  localStorage.setItem("bookmarksList", JSON.stringify(baseBookmark));
  localStorage.setItem("instance", "https://searx.tiekoetter.com/");
};
