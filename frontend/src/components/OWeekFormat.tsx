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
    <div className="max-w-96 my-5 mx-5 bg-slate-100 py-3 px-3 rounded-md">
      <div className="flex flex-col items-start">
        <img src={img} className="aspect-video rounded"></img>
        <h1 className="px-2 place-self-center font-raleway rounded my-5 text-2xl"><b> {title}</b></h1>
        <p className="px-2">Google Forms:</p>
        {form !== "Unavailable." ? (<a href={form} className="px-2 text-blue-500 underline hover:text-blue-900">{form}</a>) : <span><i>{form}</i></span>}
        <p className="px-2">Solutions:</p>
        {solution !== "Unavailable." ? (<a href={solution} className="px-2 text-blue-500 underline hover:text-blue-900">{solution}</a>) : <span><i>{solution}</i></span>}
      </div>
    </div>
  );
}

export default OWeekFormat