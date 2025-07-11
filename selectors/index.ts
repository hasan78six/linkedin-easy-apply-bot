export default {
  easyApplyButtonEnabled: "div.jobs-apply-button--top-card button.jobs-apply-button:enabled",

  // Job search form
  keywordInput: 'input[id*="jobs-search-box-keyword-id"]',
  locationInput: 'input[id*="jobs-search-box-location-id"]',

  // Easy apply form
  checkbox: ".jobs-easy-apply-modal input[type='checkbox']",
  fieldset: ".jobs-easy-apply-modal fieldset",
  select: ".jobs-easy-apply-modal select",
  nextButton: ".jobs-easy-apply-modal footer button[aria-label*='next'], footer button[aria-label*='Review']",
  submit: ".jobs-easy-apply-modal footer button[aria-label*='Submit']",
  enabledSubmitOrNextButton: ".jobs-easy-apply-modal footer button[aria-label*='Submit']:enabled, .jobs-easy-apply-modal  footer button[aria-label*='next']:enabled, .jobs-easy-apply-modal  footer button[aria-label*='Review']:enabled",
  textInput: ".jobs-easy-apply-modal input[type='text'], .jobs-easy-apply-modal textarea",
  homeCity: ".jobs-easy-apply-modal input[id*='easyApplyFormElement'][id*='city-HOME-CITY']",
  phone: ".jobs-easy-apply-modal input[id*='easyApplyFormElement'][id*='phoneNumber']",
  documentUpload: ".jobs-easy-apply-modal div[class*='jobs-document-upload']",
  documentUploadLabel: "label[class*='jobs-document-upload']",
  documentUploadInput: "input[type='file'][id*='jobs-document-upload']",
  radioInput: "input[type='radio']",
  option: "option",
  followCompanyCheckbox: 'input[type="checkbox"]#follow-company-checkbox',

  // Login
  captcha: "#captcha-internal",
  emailInput: "#username",
  passwordInput: "#password",
  loginSubmit: "button.btn__primary--large.from__button--floating[type='submit']",
  skipButton: "button[text()='Skip']",

  // fetch user
  searchResultList: ".jobs-search-results-list",
  searchResultListText: "small.jobs-search-results-list__text",
  searchResultListItem: "li.scaffold-layout__list-item[data-occludable-job-id]",
  searchResultListItemLink: "a.job-card-list__title--link",
  searchResultListItemCompanyName: "div.artdeco-entity-lockup__subtitle > span",
  jobDescription: "#job-details span",
  appliedToJobFeedback: ".artdeco-inline-feedback",

  // fetch guest
  jobCount: ".results-context-header__job-count",
  showMoreButton: ".infinite-scroller__show-more-button:enabled",
  searchResultListItemGuest: ".jobs-search__results-list li",
  searchResultListItemTitleGuest: ".base-search-card__title",
  searchResultListItemSubtitleGuest: ".base-search-card__subtitle",
  searchResultListItemLocationGuest: ".job-search-card__location",

  inAppVerificationHeading: ".header__content__heading__inapp",
}
