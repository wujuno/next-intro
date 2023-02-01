import Seo from "components/Seo";
import { InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";

type IDetailParams = [string, string] | []

export default function Detail({ params }:InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const [title, id] = params || []  as IDetailParams;
  return (
    <div>
      <Seo title={String(title)} />
      <h4>{title}</h4>
    </div>
  );
}

interface ISSProps {
  params:{
    params:IDetailParams
  }
}

export const getServerSideProps = ({params:{params}}:ISSProps) => {
  return {
    props:{
      params
    }
  };
}