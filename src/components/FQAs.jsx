import { useState } from "react";
import Questions from "./questions";

const data = [
    {
    id: 1,
    question: "WHAT TYPE OF BUSINESS DO YOU WORK WITH?",
    answer:
      "We partner with startups, small busniesses, and established enterprises across indeustries-customizing soultions based on your unqiue challenges and goals."
    },
    {
    id: 2,
    question: "How do I sign up for Finovo?",
    answer: "Signing up for Finovo is easy! Simply visit our website and click on the sign up button..."
    },
    {
    id: 3,
    question: "how do you measure success?",
    answer: "We measure success through key performance indicators (KPIs) such as customer satisfaction, transaction volume, and revenue growth. We also gather feedback from our customers to continuously improve our services."
    },
    {
        id: 4,
        question: "What industries do you specialize in?",
        answer: "We specialize in a wide range of industries, including e-commerce, fintech, healthcare, and more. Our team has experience working with businesses of all sizes and across various sectors."
    },
    {
        id: 5,
        question: "How do you ensure the security of customer data?",
        answer: "We take data security very seriously. We implement industry-standard encryption protocols, conduct regular security audits, and comply with all relevant regulations to ensure that our customers' data is protected at all times."
    },
    {
        id: 6,
        question: "How do i get started with Finovo?",
        answer: "Getting started with Finovo is simple. Just visit our website and click on the 'Get Started' button. From there, you can create an account, explore our services, and start managing your finances with ease."
    },
    {
        id: 7,
        question: "how do you work with new client?",
        answer: "We start by understanding your business needs and goals. We then develop a customized plan to help you achieve those goals, providing ongoing support and guidance along the way."
    }
];

function Fqa() {
    const [showSelectedQ, setSelectedQ] = useState(null);

    const showAnswer = (index) => {
    setSelectedQ(showSelectedQ === index ? null : index); 
    // toggle close if same clicked
    };

    return (
        <section className="px-6 bg-gray-100 py-20 md:px-12 lg:px-20">
        <div className="flex justify-center">
            <div className="max-w-2xl text-center">
                <p className="text-sm tracking-widest mb-2">FAQS</p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                    FREQUENTLY ASKED QUESTIONS
                </h1>
            </div>
      </div>

        <div className="mt-10 mb-30">
            {data.map((d, index) => (
            <Questions
                key={d.id}
                data={d}
                onClick={() => showAnswer(index)}
                isOpen={showSelectedQ === index}
            />
        ))}
      </div>

    </section>
  );
}

export default Fqa;
