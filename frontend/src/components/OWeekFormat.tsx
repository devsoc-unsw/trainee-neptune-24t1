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
    form = "unavailable";
  }
  if (solution = "") {
    solution = "unavailable";
  }
  return (
    <div className="max-w-96 my-10 mx-5 bg-gray-100 px-3 py-5">
      <div className="flex flex-col items-start">
        <img src={img} className="aspect-video mb-3"></img>
        <h1 className="place-self-center font-raleway rounded my-3 text-2xl"><b> {title}</b></h1>
        <p>Google Forms:</p>
        <a href={form} className="text-blue-500 underline hover:text-blue-900">{formDisplayLink}</a>
        <p>Solutions:</p>
        <a href={solution} className="text-blue-500 underline hover:text-blue-900">{solutionDisplayLink}</a>
      </div>
    </div>
  );
}

export default OWeekFormat