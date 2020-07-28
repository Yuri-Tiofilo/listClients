export const cpfMask = (value: string): string => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
};

export const dateBirthMask = (value: string): string => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d{1,2})/, '$1/$2');
};

export const celPhoneMask = (value: string): string => {
  return value
    .replace(/^(\d{2})(\d)/, '($1)$2')
    .replace(/(\d{5})(\d)/, '$1-$2');
};

export const removeSpaceCpf = (value: string): string => {
  const newValue = value.split('.');

  const test = newValue[2].split('-');

  const valueCpfNew = `${newValue[0]}${newValue[1]}${test[0]}${test[1]}`
  return valueCpfNew;
}

export const validationDate = (value: string): boolean => {
  const newValue = value.split('/');

  if (newValue[0] > '31' || newValue[0] <= '00') {
    return false;
  }

  if (newValue[0] > '28' && newValue[1] === '02') {
    return false;
  }

  if (newValue[1] > '12' || newValue[1] <= '00') {
    return false;
  }

  return true;
}
