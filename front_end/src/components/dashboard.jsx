import React from 'react'
import Cards from "./cards";

function Dashboard() {
    return (
        <div className="flex flex-col md:flex-row justify-center bg-base-200">
			<div className="grid grid-cols-6 overflow-auto gap-8 m-8 w-5/6">
				<Cards/>
			</div>
		</div>
    );
}

export default Dashboard