function removeExclamationMarks(s) {
  // replace one or more exclamation marks (!+) from the end ($) with an empty string ("")
  //use the parameter with .replace to remove exclamtion marks, strings, etc
  return s.replace(/!+$/, "");
}
