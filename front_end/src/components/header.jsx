import React from "react";
import logo from '../media-src/frame3.png'; // Adjust the path as needed

function Header() {
	return (
		<header>
			<div className="drawer">
				<input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content flex justify-center">
					{/* Navbar */}
					<div className="navbar w-full">
						<div className="flex-none lg:hidden">
							<label
								htmlFor="my-drawer-3"
								aria-label="open sidebar"
								className="btn btn-square btn-ghost"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									className="inline-block h-6 w-6 stroke-current"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16M4 18h16"
									></path>
								</svg>
							</label>
						</div>
						{/* Head Section */}
						<div className="mx-2 flex-1 px-2">
							<div className="avatar">
								<div className="w-12 rounded-full">
									<img src={logo} alt="logo" />
								</div>
							</div>
							<ul className="menu menu-horizontal">
								{/* Navbar menu content here */}
								<li>
									<a>Dashboard</a>
								</li>
								<li>
									<a>Records</a>
								</li>
							</ul>
						</div>
						<div className="hidden flex-none lg:block">
							<ul className="menu menu-horizontal">
								{/* Navbar menu content here */}
								<li>
									<button className="btn bg-blue-700 rounded-full">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-6 w-6"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
											/>
										</svg>
										Button
									</button>
								</li>
								<li>
									<div className="avatar">
										<div className="w-12 rounded-full">
											<img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="User Avatar"/>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
