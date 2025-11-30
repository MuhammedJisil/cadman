import { Title, Meta } from "react-head";

export default function SEO({ title, description }) {
  return (
    <>
      <Title>{title}</Title>
      {description && <Meta name="description" content={description} />}
    </>
  );
}
