import Header from "@/layouts/v2/Header";
import { WorksClient } from "./components/WorksClient";
import { worksData } from "./const/worksData";

export default function Works() {
    return (
        <div>
            <Header />
            <WorksClient worksData={worksData} />
        </div>
    );
}
