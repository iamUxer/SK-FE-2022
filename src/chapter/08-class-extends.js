/* -------------------------------------------------------------------------- */
/* ECMAScript NEXT를 사용해 함수를 작성합니다.                                       */
/* -------------------------------------------------------------------------- */

// Button 클래스
class Button {
  #mode = 'submit';

  constructor(type, label) {
    this.#mode = type;
    this.label = label;
  }

  static version = '1.0.0';

  get type() {
    return this.#mode;
  }

  set type(newType) {
    this.#mode = newType;
  }

  getType() {
    return this.type;
  }
}

// Button 클래스를 확장한 AriaButton 클래스
class AriaButton extends Button {
  constructor(type, label, usingAria = true) {
    super(type, label);
    this.usingAria = usingAria;
  }

  static displayName = 'AriaButton';

  getVersion() {
    return AriaButton.version;
  }
}
