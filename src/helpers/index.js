import htmlToFormattedText from "html-to-formatted-text";
export const decodeHtml = function (html) {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

// Path: src/helpers/index.ts
export const formatDate = function (dateString) {
  let convertedDate = new Date(dateString);
  return convertedDate.toDateString();
};

export const truncateStringToLength = function (string, length) {
  return string.length > length ? `${string.substring(0, length)} ...` : string;
};

export const formatHtml = function (data) {
  return htmlToFormattedText(data);
};
