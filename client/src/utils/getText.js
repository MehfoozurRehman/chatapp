export function getText(text, limit) {
  if (text.length > 30) {
    return text.substring(0, limit ? limit : 30) + "...";
  } else {
    return text;
  }
}
