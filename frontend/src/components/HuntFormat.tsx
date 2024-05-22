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
    <div className="max-w-96 my-5 mx-5 bg-gray-100 px-5 py-8 rounded-lg">
      <div className="flex flex-col items-start">
        <img src={img} className="aspect-video"></img>
        <h1 className="place-self-center font-raleway rounded my-5 text-2xl"><b> {title}</b></h1>
        <p>PDF:</p>
        {pdf !== "Unavailable." ? (<a href={pdf} className="text-blue-500 underline hover:text-blue-900">{pdf}</a>) : <span><i>{pdf}</i></span>}
        <p>Answer Checking Form:</p>
        {answer !== "Unavailable." ? (<a href={answer} className="text-blue-500 underline hover:text-blue-900">{answer}</a>) : <span><i>{answer}</i></span>}
        <p>Solutions:</p>
        {solution !== "Unavailable." ? (<a href={solution} className="text-blue-500 underline hover:text-blue-900">{solution}</a>) : <span><i>{solution}</i></span>}
      </div>
    </div>
  );
}

export default HuntFormat;