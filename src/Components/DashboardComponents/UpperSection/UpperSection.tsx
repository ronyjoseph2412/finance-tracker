import tempData from "@/tempData";
import staticData from "@/staticData";
import styles from "./UpperSection.module.css";
import Transactions from "@/Components/Transactions/Transactions";
import { AddTransaction } from "./AddTransaction";
import TrackingCalendar from "@/Components/Calendar/TrackingCalendar";
import Image, { StaticImageData } from "next/image";
import { getLabelAmount } from "@/Utils/getLabelAmount";
import { getUserData } from "@/services/getUserData";
import { cookies } from "next/headers";
import { getUserFinancials } from "@/services/getUserFinancials";
import { getTransactionsSummary } from "@/Utils/getTransactionsSummary";
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
      <div>{labelType === "Income" ? "Earnings" : labelType}</div>
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
  const financialSummary = getTransactionsSummary(userFinancials);
  const currentDate = new Date();
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
            <AddTransaction
              token={token}
              fields={[
                {
                  name: "Date",
                  key: "date",
                  type: "calendar",
                },
                {
                  name: "Payee",
                  key: "payee",
                  type: "input",
                },
                {
                  name: "Amount",
                  key: "amount",
                  type: "input",
                },
                {
                  name: "Note",
                  key: "note",
                  type: "input",
                },
                {
                  name: "Category",
                  key: "category",
                  type: "input",
                },
                {
                  name: "Mode of Payment",
                  key: "bankName",
                  type: "select",
                },
              ]}
              content={{
                button: "Add Transaction",
                heading: "Expense Details",
              }}
            />
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
                      getLabelAmount(
                        card.key,
                        userFinancials,
                        currentDate.getMonth(),
                        currentDate.getFullYear()
                      ),
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
