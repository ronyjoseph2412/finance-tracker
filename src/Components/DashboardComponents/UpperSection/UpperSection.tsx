import tempData from "@/tempData";
import staticData from "@/staticData";
import styles from "./UpperSection.module.css";
import Transactions from "@/Components/Transactions/Transactions";
import { AddTransaction } from "./AddTransaction";
import TrackingCalendar from "@/Components/Calendar/TrackingCalendar";
import Image, { StaticImageData } from "next/image";
import { getLabelAmount } from "@/Utils/getLabelAmount";
import { useAppSelector } from "@/lib/hooks";
import { getUserData } from "@/services/getUserData";
import { cookies } from "next/headers";
import { getUserFinancials } from "@/services/getUserFinancials";
const trackerCards = staticData.trackerCards;

export type UpperSectionProps = {};

const CalendarComponent = () => {
  return (
    <div className={styles.ExpenseGraph}>
      <TrackingCalendar />
    </div>
  );
};
const TrackerCard = (
  labelType: string,
  amount: number,
  image: StaticImageData
) => {
  return (
    <div className={styles.TrackerCard}>
      <div>{labelType}</div>
      <div>
        <span
          style={{
            color:
              labelType === "Income"
                ? "green"
                : labelType === "Expenses"
                ? "red"
                : "blue",
          }}
        >
          ₹ {amount}
        </span>
      </div>
      <Image
        src={image}
        alt={`Asset-${labelType}`}
        className={styles.BackgroundImage}
      />
    </div>
  );
};

export const UpperSection: React.FC<UpperSectionProps> = async ({}) => {
  const date = new Date();
  const month = date.toLocaleString("default", { month: "long" });
  const token = cookies().get("authorization")?.value ?? "";
  const userData = await getUserData(token);
  const userFinancials = await getUserFinancials(token);
  console.log(userData, userFinancials);
  return (
    <div className={styles.Wrapper}>
      <div className={styles.RowWrapper}>
        <div className={styles.WelcomeBack}>
          <div>
            {staticData.dashboardPage.message}
            <span className={styles.Name}>{userData?.firstName}!</span>
          </div>
          <div className={styles.OverviewMessage}>{`${
            staticData.dashboardPage.overview
          } ${month} of ${date.getFullYear()}`}</div>
        </div>

        <div className={styles.ColumnWrapper}>
          {/* <div>MonthPicker [This Month]</div> */}
          <div>
            <AddTransaction />
          </div>
        </div>
      </div>
      <div className={styles.GridWrapper}>
        <div className={[styles.ColWrapper, styles.BroadColumn].join(" ")}>
          <div className={styles.RowWrapper}>
            <div className={styles.TrackerWrapper}>
              {trackerCards.map((card) => {
                return (
                  <div key={card.key}>
                    {TrackerCard(
                      card.key,
                      getLabelAmount(card.key),
                      card.assets
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          {CalendarComponent()}
        </div>
        <div className={styles.NarrowColumn}>
          <Transactions page={"Dashboard"} />
        </div>
      </div>
    </div>
  );
};

export default UpperSection;
