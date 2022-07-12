"use strict";

var firstCard = {
  title: 'React 펀드멘탈',
  description: 'React 애플리케이션 및 라이브러리를 빌드하는 데 필요한 기본 개념을 배웁니다.',
  image: {
    src: 'react-fundamentals.webp',
    alt: 'React Fundamentals'
  },
  link: {
    href: '/react-fundamentals',
    text: 'React fundamentals'
  }
};

var renderCard = function renderCard(card) {
  return "\n    <div class=\"card\">\n      <img src=\"" + card.image.src + "\" class=\"card-img-top\" alt=\"" + card.image.alt + "\" />\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">" + card.title + "</h5>\n        <p class=\"card-text\">" + card.description + "</p>\n        <a href=\"" + card.link.href + "\" class=\"btn btn-primary\">" + card.link.text + "</a>      \n      </div>    \n    </div>\n  ";
};

var removeSpaceString = function removeSpaceString(string) {
  return string.replace(/\s+/g, '');
};

console.log(removeSpaceString(renderCard(firstCard)));