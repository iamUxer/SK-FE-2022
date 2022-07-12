/* -------------------------------------------------------------------------- */
/* ECMAScript NEXT를 사용해 함수를 작성합니다.                                       */
/* -------------------------------------------------------------------------- */

// 가상 객체(노드)
const node = {
  name: 'figure',
  className: 'tagged-template-literals',
  style: { cssText: '' },
};

const styled = function(styleRules, vNode) {
  vNode.style.cssText = styleRules.reduce(
    function(rules, currentRule) {
      return (rules + currentRule).trim()
    }, 
    ''
  );
};

styled`
  ${node}
  color: #f90;
  background: #310;
`;

const $styled = function(vNode) {
  return function(styleRules) {
    vNode.style.cssText = styleRules.reduce(
      function(rules, currentRule) {
        return (rules + currentRule).trim()
      }, 
      ''
    );
  }
};

// Redux Middleware
const $$styled = (vNode) => (styleRules) => {
  vNode.style.cssText = styleRules.reduce(
    (rules, currentRule) => (rules + currentRule).trim() , 
    ''
  );
};