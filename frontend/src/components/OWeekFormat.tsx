interface OWeekDetails {
  img: string;
  title: string;
  form: string;
  solution: string;
}

const OWeekFormat: React.FC<OWeekDetails> = ({img, title, form, solution}) => {
  let formDisplayLink = form.slice(8);
  let solutionDisplayLink = solution.slice(8);
  if (form = "") {
    form = "Unavailable.";
  }
  if (solution = "") {
    solution = "Unavailable.";
  }
  return (
    <div className="max-w-96 my-10 mx-5 bg-gray-100 px-5 py-8">
      <div className="flex flex-col items-start">
        <img src={img} className="aspect-video"></img>
        <h1 className="place-self-center font-raleway rounded my-5 text-2xl"><b> {title}</b></h1>
        <p>Google Forms:</p>
        {formDisplayLink !== "Unavailable." ? (<a href={form} className="text-blue-500 underline hover:text-blue-900">{formDisplayLink}</a>) : <span><i>{formDisplayLink}</i></span>}
        <p>Solutions:</p>
        {solutionDisplayLink !== "Unavailable." ? (<a href={solution} className="text-blue-500 underline hover:text-blue-900">{solutionDisplayLink}</a>) : <span><i>{solutionDisplayLink}</i></span>}
      </div>
    </div>
  );
}

export default OWeekFormat