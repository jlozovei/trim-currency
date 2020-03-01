const trimCurrency = value => {
  return Number(value.replace(/\D+/g, ''));
};

export default trimCurrency;
