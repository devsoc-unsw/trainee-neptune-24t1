interface HuntDetails {
  title: string;
  img: string;
  form?: string;
  pdf?: string;
  interactive?: string;
  answer?: string;
  solution?: string;
}

const HuntFormat: React.FC<HuntDetails> = ({title, img, form, pdf, interactive, answer, solution}) => {
  return (
    <div className="flex flex-col items-start dark:text-slate-200 transition duration-200">
      <img src={img} className="aspect-video rounded"></img>
      <h1 className="place-self-center rounded my-4 text-2xl bg-clip-text hover:text-transparent bg-gradient-to-r from-puzzleBlue-dark via-cyan-200 to-puzzleBlue-light"><b> {title}</b></h1>
      {form &&(
        <>
          <p className="px-2">Google Form</p>
          <a href={form} target="_blank" rel="noopener noreferrer" className="px-2 pb-4 text-puzzleBlue hover:underline hover:text-puzzleBlue-dark">{form}</a>
        </>
      )}
      {pdf &&(
        <>
          <p className="px-2">PDF</p>
          <a href={pdf} target="_blank" rel="noopener noreferrer" className="px-2 pb-4 text-puzzleBlue hover:underline hover:text-puzzleBlue-dark">{pdf}</a>
        </>
      )}
      {interactive &&(
        <>
          <p className="px-2">Interactive</p>
          <a href={interactive} target="_blank" rel="noopener noreferrer" className="px-2 pb-4 text-puzzleBlue hover:underline hover:text-puzzleBlue-dark">{interactive}</a>
        </>
      )}
      {answer &&(
        <>
          <p className="px-2">Answer-Checker</p>
          <a href={answer} className="px-2 pb-4 text-puzzleBlue hover:underline hover:text-puzzleBlue-dark">{answer}</a>
        </>
      )}
      {solution &&(
        <>
          <p className="px-2">Solutions</p>
          <a href={solution} target="_blank" rel="noopener noreferrer" className="px-2 pb-4 text-puzzleBlue hover:underline hover:text-puzzleBlue-dark">{solution}</a>
        </>
      )}
    </div>
  );
}

export default HuntFormat;