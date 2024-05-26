interface Heading {
  heading: string;
}

const SectionHeader: React.FC<Heading> = ({ heading }) => {
  return (
    <div className="flex max-h-min place-content-center">
      <h1 className="text-4xl max-w-max font-raleway rounded mt-8 px-2 py-px transition duration-300 hover:bg-puzzleBlue hover:text-white dark:text-slate-200 dark:hover:bg-zinc-800"><b>{heading}</b></h1>
    </div>

  );
}

export default SectionHeader;
