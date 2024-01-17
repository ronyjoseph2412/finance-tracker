import staticData from "@/staticData";
import { useDispatch } from "react-redux";
import { updateEndDate, updateStartDate } from "../transactionsSlice";
const getCurrentTimestamp = () => Math.floor(Date.now() / 1000); // Get current timestamp in seconds

const getStartOfThisWeek = () => {
  const today = new Date();
  const startOfWeek = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - today.getDay()
  );
  return Math.floor(startOfWeek / 1000);
};

const getStartOfThisMonth = () => {
  const today = new Date();
  const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  return Math.floor(startOfMonth / 1000);
};

const getStartOfLastMonth = () => {
  const today = new Date();
  const startOfLastMonth = new Date(
    today.getFullYear(),
    today.getMonth() - 1,
    1
  );
  return Math.floor(startOfLastMonth / 1000);
};

const getStartOfLastSixMonths = () => {
  const today = new Date();
  const startOfLastSixMonths = new Date(
    today.getFullYear(),
    today.getMonth() - 6,
    1
  );
  return Math.floor(startOfLastSixMonths / 1000);
};

const getStartOfLastYear = () => {
  const today = new Date();
  const startOfLastYear = new Date(today.getFullYear() - 1, 0, 1);
  return Math.floor(startOfLastYear / 1000);
};

const updateTimestamps = (timeLabel: string) => {
  switch (timeLabel) {
    case staticData.transactionsFilterOptions[0]:
      return {
        startDate: null,
        endDate: null,
      };
    case staticData.transactionsFilterOptions[1]:
      // Timedifference for this month transactions
      return {
        startDate: getStartOfThisMonth(),
        endDate: null,
      };
    case staticData.transactionsFilterOptions[2]:
      return {
        startDate: getStartOfLastMonth(),
        endDate: getStartOfThisMonth(),
      };
    case staticData.transactionsFilterOptions[3]:
      return {
        startDate: getStartOfLastSixMonths(),
        endDate: null,
      };
    case staticData.transactionsFilterOptions[4]:
      return {
        startDate: getStartOfLastYear(),
        endDate: null,
      };
    default:
      return {
        startDate: null,
        endDate: null,
      };
  }
};

// export const handleTimeStamps = (
//   timeLabel?: string,
//   startDate?: string,
//   endDate?: string
// ) => {
//   const dispatch = useDispatch();
//   if (timeLabel) {
//     const updatedTimestamps = updateTimestamps(timeLabel);
//     dispatch(updateStartDate(updatedTimestamps.startDate));
//     dispatch(updateEndDate(updatedTimestamps.endDate));
//   } else if (startDate && endDate) {
//     dispatch(updateStartDate(new Date(startDate).getTime()));
//     dispatch(updateEndDate(new Date(endDate).getTime()));
//   } else {
//     return {
//       startDate: null,
//       endDate: null,
//     };
//   }
// };

// Write a custom hook for updating timestamps
export const useUpdateTimestamps = () => {
  const dispatch = useDispatch();
  return (timeLabel?: string, startDate?: string, endDate?: string) => {
    if (timeLabel) {
      const updatedTimestamps = updateTimestamps(timeLabel);
      console.log(updatedTimestamps);
      dispatch(updateStartDate(updatedTimestamps.startDate));
      dispatch(updateEndDate(updatedTimestamps.endDate));
    } else if (startDate && endDate) {
      dispatch(updateStartDate(new Date(startDate).getTime()));
      dispatch(updateEndDate(new Date(endDate).getTime()));
    } else {
      return {
        startDate: null,
        endDate: null,
      };
    }
  };
};
