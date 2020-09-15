/**
 * Format date
 * @param {string}
 * @returns {string}
 */
export function formatDate(dateTime) {
  const date = new Date(dateTime * 1000);
  return date.toLocaleString();
}

export default formatDate;