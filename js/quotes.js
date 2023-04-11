const quotes = [
  {
    quote: "너에게는 아직 꿈을 이루기 위한 충분한 시간이 있어",
    author: "영화 <피터팬>",
  },
  {
    quote: "매일 행복하진 않지만, 행복한 일은 매일 있어",
    author: "영화 <곰돌이 푸>",
  },
  {
    quote:
      "우리는 삶 속의 매일을 여행하고 있다. 우리가 할 수 있는건 이 훌륭한 여행을 즐기기 위해 최선을 다하는 것이다.",
    author: "영화 <어바웃타임>",
  },
  {
    quote: "가치있는 일을 하는데 있어서 너무 늦거나 너무 이른건 없어",
    author: "영화 <벤자민버튼의 시간은 거꾸로 간다>",
  },
  {
    quote:
      "먼훗날 돌이켜볼 청춘의 한 컷! 젊음의 하이라이트를 듬뿍 담아 찍겠습니다!",
    author: "영화 <허니와 클로버>",
  },
  {
    quote:
      "누구나 뭐든 될 수 있으니까 그 누구도 내 꿈에 대해 이러쿵저러쿵 못해.",
    author: "영화 <주토피아>",
  },
  {
    quote: "카르페 디엠, 오늘 하루를 잡아라. 삶을 특별하게 만들어라",
    author: "로빈 윌리엄스 영화 <죽은 시인의  사회>",
  },
  {
    quote: "다른 사람들이 널 알아? 누가 뭐라든 넌 될놈이야",
    author: "드라마 <쌈마이웨이>",
  },
  {
    quote:
      "누구의 시선으로 보느냐에 따라 달라질 거야 널 중심으로 세상을 봐 그럼 너가 주인공이니까",
    author: "드라마 <어쩌다 발견한 하루>",
  },
  {
    quote: "여러분은 단 한순간도 혼자였던 적이 없습니다",
    author: "드라마 <괜찮아 사랑이야>",
  },
  {
    quote:
      "오늘 하루도 견디느라 수고했어. 내일도 버티고, 모레도 버티고, 계속 계속 살아남으라고.",
    author: "드라마 <미생>",
  },
  {
    quote:
      "넌 코스모스야. 아직 봄이잖아 천천히 기다리면 가을에 가장 이쁘게 필거야 그러니까 너무 초조해 하지마",
    author: "드라마 <스타트업>",
  },
  {
    quote:
      "반복되는 하루에 시작이 되는 이 노래 네 옆에서 불러주겠어 힘내야지 뭐 어쩌겠어 파이팅 해야지 파이팅 해야지 Don’t give it up Never give it up yeah",
    author: "파이팅해야지-부석순",
  },
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; // Math.random():0~1사이의 랜덤 숫자

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
