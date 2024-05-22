interface HuntDetails {
  img: string;
  title: string;
  pdf: string;
  answer: string;
  solution: string;
}

const HuntFormat: React.FC<HuntDetails> = ({img, title, pdf, answer, solution}) => {
  let pdfDisplayLink = pdf.slice(8);
  let answerDisplayLink = answer.slice(8);
  let solutionDisplayLink = solution.slice(8);
  if (pdfDisplayLink === "") {
    pdfDisplayLink = "Unavailable.";
  }
  if (answerDisplayLink === "") {
    answerDisplayLink = "Unavailable.";
  }
  if (solutionDisplayLink === "") {
    solutionDisplayLink = "Unavailable.";
  }
  return (
    <div className="max-w-96 my-10 mx-5 bg-gray-100 px-5 py-8">
      <div className="flex flex-col items-start">
        <img src={img} className="aspect-video"></img>
        <h1 className="place-self-center font-raleway rounded my-5 text-2xl"><b> {title}</b></h1>
        <p>PDF:</p>
        {pdfDisplayLink !== "Unavailable." ? (<a href={pdf} className="text-blue-500 underline hover:text-blue-900">{pdfDisplayLink}</a>) : <span><i>{pdfDisplayLink}</i></span>}
        <p>Answer Checking Form:</p>
        {answerDisplayLink !== "Unavailable." ? (<a href={answer} className="text-blue-500 underline hover:text-blue-900">{answerDisplayLink}</a>) : <span><i>{answerDisplayLink}</i></span>}
        <p>Solutions:</p>
        {solutionDisplayLink !== "Unavailable." ? (<a href={solution} className="text-blue-500 underline hover:text-blue-900">{solutionDisplayLink}</a>) : <span><i>{pdfDisplayLink}</i></span>}
      </div>
    </div>
  );
}

export default HuntFormat;