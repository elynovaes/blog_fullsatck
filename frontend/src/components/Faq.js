import AccordionWrapper from './accordion/AccordionWrapper'; 
import AccordionItem from './accordion/AccordionItem';
import './accordion/Accordion.css';
import './accordion/Faq.css';

const Faq = ({ data3 }) => {
  const data = [
    {
      "title": data3.ask1FaqSection,
      "description": data3.answer1FaqSection
    },
    {
      "title": data3.ask2FaqSection,
      "description": data3.answer2FaqSection
    },
    {
      "title": data3.ask3FaqSection,
      "description": data3.answer3FaqSection
    },
    {
      "title": data3.ask4FaqSection,
      "description": data3.answer4FaqSection
    }
  ];

  return (
    <section className="px-6 pb-12 -mt-20 md:mt-0">
      <h1 className="font-genty text-primary text-3xl md:text-5xl text-center max-w-4xl mx-auto mb-10">{data3.titleFaqSection}</h1>

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

export default Faq