import { Helmet } from "react-helmet";

type Title = {
  title: string;
};

const HelmetComponent = ({ title }: Title) => {
  return (
    <Helmet>
      <title>Page - {title}</title>
    </Helmet>
  );
};

export default HelmetComponent;
