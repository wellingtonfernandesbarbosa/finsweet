export default function sanitizeString(str: string): string {
  const map: { [key: string]: string } = {
    'ç': 'c', 'á': 'a', 'à': 'a', 'ã': 'a', 'â': 'a', 'é': 'e', 'è': 'e', 'ê': 'e',
    'í': 'i', 'ì': 'i', 'î': 'i', 'ó': 'o', 'ò': 'o', 'õ': 'o', 'ô': 'o',
    'ú': 'u', 'ù': 'u', 'û': 'u', 'ñ': 'n', 'ü': 'u', ':': '', ',': '', ';': '', '?': '', '!': ''
  };

  return str.toLowerCase()
    .replace(/[çáàãâéèêíìîóòõôúùûñü:;,?!]/g, match => map[match] || '')
    .replace(/\s+/g, '_')
    .replace(":", "");
}
