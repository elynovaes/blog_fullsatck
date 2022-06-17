import AccordionWrapper from "../../../components/accordion/AccordionWrapper";
import AccordionItem from "../../../components/accordion/AccordionItem";

const FaqSectionPreview = ({ field }) => {
  const data = [
    {
      "title": field.ask1,
      "description": field.answer1
    },
    {
      "title": field.ask2,
      "description": field.answer2
    },
    {
      "title": field.ask3,
      "description": field.answer3
    },
    {
      "title": field.ask4,
      "description": field.answer4
    }
  ];

  return (
    <section className="px-6 pb-12 -mt-20 md:mt-0">
      <h1 className="font-genty text-primary text-3xl md:text-5xl text-center max-w-4xl mx-auto mb-10">{field.title}</h1>

      <div className="App">
        <div className="content">
            <AccordionWrapper>
              {data.map((item, index) => (
                <AccordionItem key={index} index={index} title={item.title} description={item.description} />
              ))}
            </AccordionWrapper>
        </div>
      </div>
    </section>
  )
}

export default FaqSectionPreview