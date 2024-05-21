export const timeStampedData = (data: any, formatting = false) => {
  if (!formatting) {
    const timeStampedData = data.map((item: any) => {
      return {
        ...item,
        date: new Date(item.date).getTime() / 1000,
      };
    });
    return timeStampedData;
  }
  const timeStampedData = data.map((item: any) => {
    return {
      ...item,
      date: new Date(item.date).toLocaleDateString(),
    };
  });
  return timeStampedData;
};
