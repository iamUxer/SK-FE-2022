/* -------------------------------------------------------------------------- */
/* ECMAScript NEXT를 사용해 함수를 작성합니다.                                       */
/* -------------------------------------------------------------------------- */

// Button 클래스
class Button {
  constructor(type, label) {
    this._type = type;
    this.label = label;
  }

  static version = '1.0.0';

  get type() {
    return this._type;
  }

  set type(newType) {
    this._type = newType;
  }

  getType() {
    return this.type;
  }
}

// Button 클래스를 확장한 AriaButton 클래스
// var AriaButton = createClass(
//   {
//     constructor(type, label, usingAria) {
//       Button.apply(this, arguments);
//       this.usingAria = createClass.defaultArg(usingAria, true);
//     },
//     static: {
//       displayName: 'AriaButton',
//     },
//     getVersion: function () {
//       return AriaButton.version;
//     },
//   },
//   Button
// );
