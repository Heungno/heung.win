var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json([
    {
      id: 1,
      title: "어벤저스",
      poster:
        "https://upload.wikimedia.org/wikipedia/ko/thumb/f/f2/%EC%96%B4%EB%B2%A4%EC%A0%B8%EC%8A%A4-_%EC%97%94%EB%93%9C%EA%B2%8C%EC%9E%84_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg/220px-%EC%96%B4%EB%B2%A4%EC%A0%B8%EC%8A%A4-_%EC%97%94%EB%93%9C%EA%B2%8C%EC%9E%84_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg",
      contents:
        "어벤저스어벤저스어벤저스어벤저스어벤저스어벤저스어벤저스어벤저스어벤저스어벤저스어벤저스어벤저스어벤저스어벤저스어벤저스",
    },
    {
      id: 2,
      title: "설국열차",
      poster:
        "https://upload.wikimedia.org/wikipedia/ko/thumb/3/33/%EC%84%A4%EA%B5%AD%EC%97%B4%EC%B0%A8.jpg/220px-%EC%84%A4%EA%B5%AD%EC%97%B4%EC%B0%A8.jpg",
      contents:
        "설국열차설국열차설국열차설국열차설국열차설국열차설국열차설국열차설국열차설국열차설국열차설국열차설국열차설국열차설국열차",
    },
    {
      id: 3,
      title: "스타워즈",
      poster:
        "https://upload.wikimedia.org/wikipedia/ko/thumb/6/6a/%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg/220px-%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg",
      contents:
        "스타워즈스타워즈스타워즈스타워즈스타워즈스타워즈스타워즈스타워즈스타워즈스타워즈스타워즈스타워즈스타워즈스타워즈",
    },
    {
      id: 4,
      title: "올드보이",
      poster:
        "https://upload.wikimedia.org/wikipedia/ko/thumb/4/48/Old_Boy.jpg/220px-Old_Boy.jpg",
      contents:
        "올드보이올드보이올드보이올드보이올드보이올드보이올드보이올드보이올드보이올드보이올드보이올드보이올드보이올드보이올드보이올드보이올드보이올드보이올드보이",
    },
  ]);
});

module.exports = router;
