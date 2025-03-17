const pricingPlans = [
    {
      id: 'basic',
      title: 'Basic',
      price: 199,
      features: [
        '30 job posting',
        '3 featured job',
        'Job displayed for 15 days',
        'Premium Support 24/7'
      ],
      buttonText: 'Add to cart',
      recommended: false
    },
    {
      id: 'standard',
      title: 'Standard',
      price: 499,
      features: [
        '40 job posting',
        '5 featured job',
        'Job displayed for 30 days',
        'Premium Support 24/7'
      ],
      buttonText: 'Add to cart',
      recommended: true
    },
    {
      id: 'extended',
      title: 'Extended',
      price: 799,
      features: [
        '50 job posting',
        '10 featured job',
        'Job displayed for 60 days',
        'Premium Support 24/7'
      ],
      buttonText: 'Add to cart',
      recommended: false
    }
  ];
  
  export default pricingPlans;
  