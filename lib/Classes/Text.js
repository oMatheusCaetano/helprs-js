module.exports = class Text {
  constructor(text, options = {}) {
    if (!text?.length) {
      text = '';
    }

    if (!!options?.trim || options?.trim === undefined || options?.trim === null) {
      text = text.trim();
    }

    this.value = text ?? '';
  }

  first() {
    if (!this.value?.length) return '';
    this.value = this.value.charAt(0);
    return this;
  }

  removeFirst() {
    if (!this.value?.length) return '';
    this.value = this.value.slice(1);
    return this;
  }

  capitalizeFirst() {
    if (!this.value?.length) return '';
    this.value = this.value.charAt(0).toUpperCase() + this.value.slice(1);
    return this;
  }
}
