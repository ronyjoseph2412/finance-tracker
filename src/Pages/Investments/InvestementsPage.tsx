import styles from "./InvestementsPage.module.css";
import staticData from "@/staticData";
import Image, { StaticImageData } from "next/image";
import currencySymbol from "@/Utils/currencySymbol";
import { Button } from "@mui/material";
import BudgetPlannar from "@/Components/BudgetPlannar/BudgetPlannar";
import { getLabelAmount } from "@/Utils/getLabelAmount";
import { getUserFinancials } from "@/services/getUserFinancials";
import { cookies } from "next/headers";
import InvestmentsTable from "@/Components/InvestmentsTable/InvestmentsTable";
import { timeStampedData } from "@/Utils/timeStampedData";
export type InvestmentsPageProps = {};
const investementsPageData = staticData.investmentsPage;
export const InvestmentsPage: React.FC<InvestmentsPageProps> = async ({}) => {
  const token = cookies().get("authorization")?.value ?? "";
  const userFinancials = await getUserFinancials(token);
  const investments = userFinancials?.investmentsData ?? [];
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
            className={styles.Amount}
            style={{
              color:
                labelType === "Income"
                  ? "green"
                  : labelType === "Expenses"
                  ? "red"
                  : "blue",
            }}
          >
            {currencySymbol.INDIA} {amount}
          </span>
        </div>
        {/* <Image
          src={image}
          alt={`Asset-${labelType}`}
          className={styles.BackgroundImage}
        /> */}
      </div>
    );
  };
  return (
    <div className={styles.Wrapper}>
      <div className={styles.HeadingWrapper}>
        <h1>{investementsPageData.message}</h1>
        <div>
          <Button variant="contained" color="success">
            Add Investments
          </Button>
        </div>
      </div>
      <div className={styles.LayoutContainer}>
        <div className={styles.GridLayout}>
          <div className={styles.ColWrapper}>
            <div className={styles.TrackerWrapper}>
              {investementsPageData.trackerCards.map((card) => {
                return (
                  <div key={card.key}>
                    {TrackerCard(
                      card.key,
                      getLabelAmount(card.key, userFinancials, 0, 0),
                      card.assets
                    )}
                  </div>
                );
              })}
            </div>
            <div className={styles.ShadowCard} style={{ height: "50vh" }}>
              <div className={styles.HeadingTexts}>All Investments</div>
              <InvestmentsTable data={timeStampedData(investments, true)} />
            </div>
          </div>
          <div
            className={styles.ColWrapper}
            style={{
              gridColumn: "span 1 / span 1",
              marginTop: "2rem",
            }}
          >
            <div className={styles.ShadowCard}>
              {/* <div className={styles.HeadingTexts}>Budget Plannar</div> */}
              <BudgetPlannar />
            </div>
            <div className={styles.ShadowCard} style={{ height: "45%" }}>
              <div className={styles.HeadingTexts}>Asset Allocation</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentsPage;
