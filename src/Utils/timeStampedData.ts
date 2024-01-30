export const timeStampedData = (data: any) => {
  const timeStampedData = data.map((item: any) => {
    return {
      ...item,
      date: new Date(item.date).getTime() / 1000,
    };
  });
  return timeStampedData;
};
