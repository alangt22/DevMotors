import { getItemBySlug } from "@/utils/actions/get-data";
import styles from "./styles.module.scss";
import { PostProps } from "@/utils/post.type";
import { Content } from "./components/content";
import { Suspense } from "react";
import { Loading } from "./components/loading";

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const { objects }: PostProps = await getItemBySlug(slug);
  return {
    title: `DevMotors | ${objects[0].title}`,
    description: objects[0].metadata.description.text,
    keywords: [
      "oficina",
      "oficina carros",
      "carros",
      "manutenção de carros",
      "troca de oleo",
      "manutencao preventiva",
    ],
    openGraph: {
      title: `DevMotors | ${objects[0].title}`,
      images: [objects[0].metadata.banner.url],
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
      },
    },
  };
}

type Props = { params: Promise<{ slug: string }> };
export default async function Page({ params }: Props) {
  const { slug } = await params;

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Content slug={slug} />
      </Suspense>
    </>
  );
}
