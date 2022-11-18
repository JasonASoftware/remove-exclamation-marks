function removeExclamationMarks(s) {
  // using string .replace while using regex (/\/) and g means global while replacing it with an empty string
  return s.replace(/\!/g,'');

}
