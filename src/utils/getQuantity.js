function getQuantity(product) {
  return product.installments.map((qtt) => qtt.quantity);
}

export default getQuantity;
