function getValue(product) {
  return product.installments.map((vl) => vl.value);
}

export default getValue;
