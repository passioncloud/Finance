import Heading from "../Heading";
import { BarChartHero } from "./bar-chart";
import CardWrapper from "./cards";
import DashboardOpenRequisitions from "./DashboardOpenRequisitions";
import DashboardRequestsToApprove from "./DashboardRequestsToApprove";

export default function Dashboard() {

    return (
        <div>
     
     <h1 className={`mb-4 text-xl md:text-2xl`}>
                Dashboard
            </h1>
            <CardWrapper />
            <div className="mt-6 gap-4 grid grid-cols-2">
                {/* <Suspense fallback={<RevenueChartSkeleton />}>
                    <RevenueChart />
                </Suspense> */}
                <DashboardRequestsToApprove />
                <DashboardOpenRequisitions />
            </div> 
        </div>
    )
}