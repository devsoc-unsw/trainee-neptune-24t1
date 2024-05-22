interface OWeekDetails {
  img: string;
  title: string;
  form: string;
  solution: string;
}

const OWeekFormat: React.FC<OWeekDetails> = ({img, title, form, solution}) => {
  if (form === "") {
    form = "Unavailable.";
  }
  if (solution === "") {
    solution = "Unavailable.";
  }
  return (
    <div className="max-w-96 my-5 mx-5 bg-gray-100 px-5 py-8 rounded-lg">
      <div className="flex flex-col items-start">
        <img src={img} className="aspect-video"></img>
        <h1 className="place-self-center font-raleway rounded my-5 text-2xl"><b> {title}</b></h1>
        <p>Google Forms:</p>
        {form !== "Unavailable." ? (<a href={form} className="text-blue-500 underline hover:text-blue-900">{form}</a>) : <span><i>{form}</i></span>}
        <p>Solutions:</p>
        {solution !== "Unavailable." ? (<a href={solution} className="text-blue-500 underline hover:text-blue-900">{solution}</a>) : <span><i>{solution}</i></span>}
      </div>
    </div>
  );
}

export default OWeekFormat