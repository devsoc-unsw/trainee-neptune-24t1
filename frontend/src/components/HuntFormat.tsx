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
    <div className="flex flex-col items-start">
      <img src={img} className="aspect-video rounded"></img>
      <h1 className="place-self-center rounded my-5 text-2xl"><b> {title}</b></h1>
      {form &&(
        <>
          <p className="px-2">Google Form:</p>
          <a href={form} className="px-2 pb-4 text-blue-500 underline hover:text-blue-900">{form}</a>
        </>
      )}
      {pdf &&(
        <>
          <p className="px-2">PDF:</p>
          <a href={pdf} className="px-2 pb-4 text-blue-500 underline hover:text-blue-900">{pdf}</a>
        </>
      )}
      {interactive &&(
        <>
          <p className="px-2">Interactive:</p>
          <a href={interactive} className="px-2 pb-4 text-blue-500 underline hover:text-blue-900">{interactive}</a>
        </>
      )}
      {answer &&(
        <>
          <p className="px-2">Answer-Checker:</p>
          <a href={answer} className="px-2 pb-4 text-blue-500 underline hover:text-blue-900">{answer}</a>
        </>
      )}
      {solution &&(
        <>
          <p className="px-2">Solutions:</p>
          <a href={solution} className="px-2 pb-4 text-blue-500 underline hover:text-blue-900">{solution}</a>
        </>
      )}
    </div>
  );
}

export default HuntFormat;