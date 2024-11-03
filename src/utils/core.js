const handleOnChange = (data, setData, value, field) => {
  const d = data;
  d[field].value = value;
  setData(() => ({
    ...d,
  }));
};

export { handleOnChange };
