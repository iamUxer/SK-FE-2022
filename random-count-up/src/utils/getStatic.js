export function getStatic(path) {
  return `${process.env.PUBLIC_URL}/${path.toString()}`;
}

export const getAsset = (filename) => getStatic(`assets/${filename}`);
