interface HuntDetails {
  img: string;
  title: string;
  pdf: string;
  answer: string;
  solution: string;
}

const HuntFormat: React.FC<HuntDetails> = ({img, title, pdf, answer, solution}) => {
  if (pdf === "") {
    pdf = "Unavailable.";
  }
  if (answer === "") {
    answer = "Unavailable.";
  }
  if (solution === "") {
    solution = "Unavailable.";
  }
  return (
    <div className="max-w-96 my-5 mx-5 bg-slate-100 py-3 px-3 rounded-md">
      <div className="flex flex-col items-start">
        <img src={img} className="aspect-video rounded"></img>
        <h1 className="place-self-center font-raleway rounded my-5 text-2xl"><b> {title}</b></h1>
        <p className="px-2">PDF:</p>
        {pdf !== "Unavailable." ? (<a href={pdf} className="px-2 text-blue-500 underline hover:text-blue-900">{pdf}</a>) : <span><i>{pdf}</i></span>}
        <p className="px-2">Answer Checking Form:</p>
        {answer !== "Unavailable." ? (<a href={answer} className="px-2 text-blue-500 underline hover:text-blue-900">{answer}</a>) : <span><i>{answer}</i></span>}
        <p className="px-2">Solutions:</p>
        {solution !== "Unavailable." ? (<a href={solution} className="px-2 text-blue-500 underline hover:text-blue-900">{solution}</a>) : <span><i>{solution}</i></span>}
      </div>
    </div>
  );
}

export default HuntFormat;