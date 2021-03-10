export const maskCPF = (e) => {
  e.currentTarget.maxLength = 11;
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, '');
  value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  e.currentTarget.value = value;

  return e;
};

export const maskCurrent = (e) => {
  e.currentTarget.maxLength = 4;
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, '');
  value = value.replace(/^(\d)/, '$1');
  e.currentTarget.value = value;

  return e;
};
