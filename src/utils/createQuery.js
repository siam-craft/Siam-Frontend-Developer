function createQuery(data) {
  const type = data?.type?.dropdownItemValue;
  const status = data?.status?.dropdownItemValue;
  const waterLanding = data?.waterlanding?.dropdownItemValue;

  const qObj = { type, status, waterLanding };

  return qObj;
}

export default createQuery;
