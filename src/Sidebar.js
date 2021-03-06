import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Sidebar.css"

function Sidebar() {

	const recentItem = (topic) => (
		<div className="sidebar_recentItem">
			<span className='sidebar_hash'>
				#</span>
			<p>{topic}</p>
		</div>
	);

	return (
		<div className="sidebar">

			<div className="sidebar_top">
				<img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlip=rp-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JILWZIZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80" alt="" />
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

			<div className='sidebar_bottom'>
				<p>Recent</p>
				{recentItem("reactjs")}
				{recentItem("programming")}
				{recentItem("softwareengineering")}
				{recentItem("design")}
				{recentItem("developer")}
			</div>
		</div>
	)
}

export default Sidebar