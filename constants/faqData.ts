const faqData = [
    {
      category: "category-payments",
      questions: [
        { key: "question-payment-failure", answerKey: "answer-payment-failure" },
        { key: "question-refund", answerKey: "answer-refund" },
        { key: "question-coupon", answerKey: "answer-coupon" },
        { key: "question-account-name", answerKey: "answer-account-name" },
      ],
    },
    {
      category: "category-suggestions",
      questions: [
        { key: "question-feature-request", answerKey: "answer-feature-request" },
        { key: "question-vote-suggestions", answerKey: "answer-vote-suggestions" },
        { key: "question-contact-support", answerKey: "answer-contact-support" },
        { key: "question-latest-updates", answerKey: "answer-latest-updates" },
      ],
    },
  ] as const;
  
  export default faqData;
  