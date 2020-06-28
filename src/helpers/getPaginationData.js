export default function getPaginationData({ rel, page }) {
  let textPage = '';

  switch (rel) {
    case 'prev':
      textPage = 'Anterior';
      break;
    case 'next':
      textPage = 'Próxima';
      break;
    case 'last':
      textPage = 'Última';
      break;
    case 'first':
      textPage = 'Primeira';
      break;
    default:
      textPage = '';
  }

  return {
    textPage,
    key: rel,
    pageNumber: Number(page),
  };
}
