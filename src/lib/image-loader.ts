const BASE_PATH = "/reforma";

export default function imageLoader({ src }: { src: string }) {
  return `${BASE_PATH}${src}`;
}
