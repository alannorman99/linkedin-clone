import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Sidebar.css"

function Sidebar() {
	return (
		<div className="sidebar">

			<div className="sidebar_top">
				<img src="" alt="" />
				<Avatar className="sidebar_avatar" />
				<h2>Alan Norman</h2>
				<h4>alannorman00@gmail.com</h4>
			</div>

			<div className="sidebar_stats">
				<div className="sidebar_stat">
					<p>Who Viewed you</p>
					<p className="sidebar_statNumber">2,345</p>
				</div>
				<div className="sidebar_stat">
					<p>Views on post</p>
					<p className="sidebar_statNumber">4,567</p>
				</div>
			</div>

			<div className='sidebar_button'>
				<p>Recent</p>
			</div>
		</div>
	)
}

export default Sidebar