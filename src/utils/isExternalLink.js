const isExternalLink = (link) =>
  /^https?:\/\//.test(link) || link.startsWith('mailto:') || link.startsWith('tel:');

export default isExternalLink;