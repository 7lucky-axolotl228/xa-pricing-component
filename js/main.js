const elsPaymentPeriodRadio = document.querySelectorAll('[name="payment-period"]');
const elsPricingtPlanValue = document.querySelectorAll('.pricing-plan-value');

elsPaymentPeriodRadio.forEach(function (elPaymentPeriodRadio) {
  elPaymentPeriodRadio.addEventListener('change', function() {
    const period = elPaymentPeriodRadio.value;

    if (period === 'annual') {
      elsPricingtPlanValue.forEach(function(elPrice) {
        elPrice.textContent = elPrice.closest('.pricing-plan').dataset.paymentAnnual;
      });
    } else {
      elsPricingtPlanValue.forEach(function(elPrice) {
        elPrice.textContent = elPrice.closest('.pricing-plan').dataset.paymentMonthly;
      });
    }
  });
});
