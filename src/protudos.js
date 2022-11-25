module.exports = {
  calcTaxs(complementTax, baseTax) {
    if (complementTax < baseTax) {
      return baseTax;
    }
    return complementTax + baseTax;
  },
};
