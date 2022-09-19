export const converletter = {
  query: ["성장과정", "지원동기", "성격의 장단점", "인사 후 포부"],
  ans: [
    "무슨 일을 하든 항상 책임감을 가지고 성실하게 임하라는 가르침을 어릴 때부터 받았습니다. 저는 고등학교 3학년 수능이 끝난 이후 부터 아르바이트를 하였습니다. 대학생때는 낮에는 학교를 가고 저녁과 주말에는 아르바이트를하며 모든 생활비를 제가 해결하였습니다. 이로인해 항상 잠이 부족하였고 다른 친구들이 놀러다니고, 시험기간에는 공부에만 집중하는 것을 보며 서러울 때가 많이 있었습니다. 그럼에도 저는 아르바이트를 불성실하게 임한 적은 한번도 없었습니다. 항상 자발적으로 행동하고 저의 업무에 책임감을 가지고 열심히 일했습니다. 그로써 저는 아르바이트를 하던 곳들에서 항상 인정을 받았으며, 보너스와 우수사원상을 받아왔습니다. 또한 다양한 곳에서 일하며, 여러 역활변화 과정에서 성실히 배우려는 자세를 통해 어떤 일이든 쉽게 적응하는 경험을 하였습니다. 이와 같은 과정들을 통해 얻은 교훈을 회사업무에 적용하여, 적극적이고 성실한 자세로 업무에 임하겠습니다.",
    "대학시절 C언어를 배우며 프로그래밍이 저와 맞지않는다고 느꼈었습니다. 그러나 대학교 2학년 수업으로 자바를 배우면서, 프로그래밍에 큰 흥미를 느꼈으며 해당과목에서 A+를 맞기도 하였습니다. 대학교를 졸업한 이후 진로를 정하지 못하고 여러 가지 일을 하던 도중 자바스크립트를 접하게 되었고, 이것이 재밌어서 낮에는 일을 하고 밤에는 NodeJs, ReactJS, React Native 등을 공부하게 되었습니다. 그렇게 저는 React와 관련된 회사에 입사하고 싶다는 꿈을 가지게 되었으며, 이로 인해 이 회사에 지원하게 되었습니다.",
    "장점 : 저의 장점은 책임감이 강한 것 입니다. 저는 대학생시절 아르바이트부터 대학교조교로 일하면서 저의 업무에 대한 책임감을 가지고 일을 하였고, 성실함과 책임감을 항상 인정받아 왔습니다. 잘못된 일이 생기더라도 다른 사람을 탓하지 않으려 노력했으며, 책임을 갖고 해결 방법을 최우선으로 생각하는 습관을 가지고 있습니다. 단점 : 저의 직관을 깊이 신뢰하는 경향이 있습니다. 제가 옳다고 판단한 것에 대해서는 고집이 강한 편이며, 이로 인해 종종 타인의 입장을 이해하지 못하고 의견 대립이 일어나곤 합니다. 하지만 사회생활을 하며, 제가 틀릴 수가 있다는 것을 깨달았고 상대의 입장과 생각을 받아들이기 위해 노력하고 있습니다.",
    "빠르게 변화하는 IT 시대의 흐름 속에서 무수히 넘쳐나는 아이디어 속에서 새로운 플랫폼과 기술들이 탄생하여 서비스를 구축하고 있습니다. 이러한 흐름 속에서 저는 꾸준한 학습을 통해 흐름에 도태되지 않고, 더 나아가 새로운 기술을 탐구하고 적용하는데 선두가 되겠습니다. 저는 수많은 도전을 할 것이며, 포기하지 않고 회사의 성장에 기여하는 사원이 될 수 있도록 노력하겠습니다.",
  ],
};
export const ProjectData = {
  DiaryApp: {
    title: "다이어리 앱",
    video: "/videos/다이어리앱.mp4",
    description:
      "사람들이 간편하게 사용할 수 있는 다이어리 안드로이드 앱 입니다. 첫 화면에서 테마(dark, light)를 선택할 수 있으며, Animated를 이용하여 시각적인 효과를 추가하였습니다. 사용자가 테마를 선택하면 Realm DB에 저장하여 앱을 종료후에도 그대로 유지가 됩니다. Home화면에서는 내림차순으로 최신 일기순으로 보여줍니다. 다이어리작성 시 날짜는 자동으로 핸드폰 날짜로 저장이 됩니다. 또한 이미 작성한 다이어리의 Update와 Delete가 가능하며, 핸드폰의 GPS로 해당 지역의 날씨를 볼 수 있습니다.",
    function:
      "테마 선택, 당일 날짜로 다이어리 쓰기(emotion, 제목, 일기) 구현, READ, UPDATE, DELETE 구현, 위치에 따른 날씨 보여주기",
    git: "https://github.com/blackeichi/JwDiary",
    tec: ["React Native", "styled-components", "JavaScript", "Realm SDK"],
  },
  WatchaApp: {
    title: "왓챠 앱",
    video: "/videos/왓챠 앱.mp4",
    description:
      "Watcha앱을 조금 각색하여 클론코딩한 앱 입니다. 첫 화면에서는 스크롤 시, Recoil을 이용한 전역변수 사용으로 navigation의 스타일에 영향을 줄 수 있도록 하였습니다. 또 Firebase를 이용하여 로그인과 회원가입을 할 수 있으며, 로그인 후에는 영화와 TV프로그램, 검색 screen을 통해 정보를 확인할 수 있으며, 각 콘텐츠를 터치하면 Detail한 정보를 확인할 수 있습니다.",
    function:
      "Firebase를 이용한 로그인, 회원가입 기능, API를 이용한 영화, TV프로그램 정보 확인",
    git: "https://github.com/blackeichi/Jwatcha",
    tec: [
      "React Native",
      "styled-components",
      "JavaScript",
      "Firebase",
      "Recoil",
    ],
  },
  Instagram: {
    title: "인스타그램",
    video: "/videos/인스타그램.mp4",
    description:
      "NODE JS를 이용한 인스타그램 클론코딩 웹 사이트입니다. 첫 페이지에서 USER의 로그인, 회원가입을 할 수 있으며, 로그인을 하면 Home으로 들어가게 됩니다. Home에서는 다른 유저들의 목록과 게시물들을 볼 수 있으며, 유저간의 팔로우기능, 게시물 업로드 ,게시물 좋아요 및 댓글, 태그 기능 등을 구현하였습니다. 개인적으로 가장 긴 시간을 들인 프로젝트이며, User, 게시물, 댓글, 팔로우, 좋아요 등 다양한 데이터들간의 연동을 위해 고민을 많이 하였었습니다.",
    git: "https://github.com/blackeichi/Jeongwoo-instagram",
    url: "https://jeongwoo-instagram.herokuapp.com/home",
    tec: ["JavaScript", "Scss", "NODE JS", "PUG", "MONGO DB"],
  },
  MarvelHero: {
    title: "마블 히어로즈",
    image: ["/img/marvel/마블히어로-1.png", "/img/marvel/마블히어로-2.png"],
    description:
      "마블 API를 이용하여 마블의 히어로들과 코믹스의 정보를 확인할 수 있는 웹 사이트입니다. 처음으로 API를 이용하여 만든 저만의 REACT 사이트이며, 평소에 히어로를 좋아하는 마음에 개발하게 되었습니다. 수 많은 데이터들이 한번에 마운트되지 않도록, 데이터 배열을 쪼개고 인덱스를 사용하여 페이지 구분을 하였습니다. 애니메이션 구현과 더불어 버튼을 누르면 인덱스에 따라 데이터들이 불러올 수 있도록 구현하였습니다.",
    function: "API를 이용한 히어로 정보, 만화책 정보 확인과 검색 기능",
    git: "https://github.com/blackeichi/react-superhero",
    url: "https://blackeichi.github.io/react-superhero",
    tec: ["JavaScript", "ReactJS", "Styled-Components"],
  },
  TodoList: {
    title: "TO-DO List",
    image: ["/img/todo-1.PNG", "/img/todo-2.PNG"],
    description:
      "React JS로 처음 만든 웹 프로젝트입니다. Recoil로 데이터를 저장하며, 웹 브라우저를 닫아도 데이터가 유지가능합니다. 카테고리별로 선택하여 list를 작성할 수 있으며, 작성한 list의 카테고리 변경 및 삭제도 가능하게 구현하였습니다. 또 카테고리의 추가 또한 가능합니다.",
    git: "https://github.com/blackeichi/react-Todo",
    url: "https://blackeichi.github.io/react-Todo/",
    tec: ["JavaScript", "ReactJS", "Styled-Components", "Recoil"],
  },
};
