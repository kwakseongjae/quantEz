import { Contents } from "../components/Contents";
import { Sheets } from "../components/Sheets";


export const FinanceSheet = () => {
  return (
    <div className="container">
      <ariticle>
        <section>
          <div className="content">
            <Sheets />
            <Contents />
            
          </div>
        </section>
      </ariticle>
    </div>
  );
};
