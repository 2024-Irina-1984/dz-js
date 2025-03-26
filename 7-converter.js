function converter(sum, currency, targetCurrency) {
  const USD = 90;
  const EUR = 100;

  currency = currency.toUpperCase();
  targetCurrency = targetCurrency.toUpperCase();

  switch (currency) {
      case 'USD':
          switch (targetCurrency) {
              case 'RUB':
                  return sum * USD;
              case 'EUR':
                  return (sum * USD) / EUR;
              default:
                  return null;
          }
      case 'EUR':
          switch (targetCurrency) {
              case 'RUB':
                  return sum * EUR;
              case 'USD':
                  return (sum * EUR) / USD;
              default:
                  return null;
          }
      case 'RUB':
          switch (targetCurrency) {
              case 'USD':
                  return sum / USD;
              case 'EUR':
                  return sum / EUR;
              default:
                  return null;
          }
      default:
          return null;
  }
}