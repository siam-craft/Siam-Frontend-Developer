const sendStatus = (arr, data) => {
  const filteredArr = arr.filter((item) => item !== 'filterName');
  const s = filteredArr.map((a) => data[a]);
  const l = s.some((a) => a.dropdownItemValue === '');
  return !l;
};
export default sendStatus;
