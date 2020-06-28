export default function getOder({ rel }) {
  let order = 0;

  switch (rel) {
    case 'prev':
      order = 2;
      break;
    case 'next':
      order = 3;
      break;
    case 'last':
      order = 4;
      break;
    case 'first':
      order = 1;
      break;
    default:
      order = 0;
  }

  return order;
}
