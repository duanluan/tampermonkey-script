import Bar from "../../common/Bar";

export default class React {

  private static selectors = {
    bar: '.css-lpiycv',
    hideBar: '.css-1loxuh3',
    followUpObserveElement: '#gatsby-focus-wrapper',
  }

  static replace() {
    if (location.host === 'reactjs.org') {
      Bar.replace({barSelector: this.selectors.bar, isObserveBar: true, hideBarSelector: this.selectors.hideBar, isObserveHideBar: false, followUpObserveSelector: this.selectors.followUpObserveElement});
    }
  }
}