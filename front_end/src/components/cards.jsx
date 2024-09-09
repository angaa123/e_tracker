import React from 'react'
import VisaCard from "@/components/visaCard";
import Income from "./income";
import Expence from "./expence";

function Cards() {
    return (
        <div className="col-span-6 grid grid-cols-3"> {/*Container */}
			<VisaCard />
			<Income />
			<Expence />
		</div>
    );
}

export default Cards