import React from "react"
import "./Header.css"

import SearchIcon from "@material-ui/icons/Search"

function Header() {
	return (
		<div className="header">


			<div className="header_left">
				<img src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1645571293~hmac=cb450dfc8b116ecb1fd81b0b06e2cd7d" alt="" />
			</div>

			<div className="header_search">
				<SearchIcon />
				<input type="text" />
			</div>


			<div className="header_right">

			</div>

		</div>
	)
}

export default Header