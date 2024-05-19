interface Heading {
  heading: string;
}

const SectionHeader: React.FC<Heading> = ({ heading }) => {
  return (
    <h1 className="text-2xl font-raleway mt-8"><b>{heading}</b></h1>
  );
}

export default SectionHeader;
