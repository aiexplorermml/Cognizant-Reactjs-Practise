import { useState } from "react";

function FAQ() {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library."
    },
    {
      question: "What is useState?",
      answer: "useState is used to manage state."
    },
    {
      question: "What is useEffect?",
      answer: "useEffect is used to handle side effects."
    }
  ];

  return (
    <div>
      {faqs.map((item, index) => (
        <div key={index}>

          <h3 onClick={() => setOpen(open === index ? null : index)}>
            {item.question}
          </h3>

          {open === index ? <p>{item.answer}</p> : null}

        </div>
      ))}
    </div>
  );
}

export default FAQ;