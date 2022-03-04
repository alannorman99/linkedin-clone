import React from 'react'
import "./Feed.css"
import CreateIcon from "@material-ui/icons/Create"
import ImageIcon from "@material-ui/icons/Image"
import SubscriptionsIcon from "@material-ui/icons/Subscriptions"
import EventNoteIcon from "@material-ui/icons/EventNote"
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay"
import InputOption from './InputOption.js'

function Feed() {
	return (
		<div className="feed">
			<div className='feed_inputContainer'>
				<div className='feed_input'>
					<CreateIcon />
					<form>

						<input type="text" />
						<button type='submit'>Send</button>
					</form>
				</div>
				<div className="feed_inputOptions">
					<InputOption title="Photo" Icon={ImageIcon} color="#70B5F9" />
					<InputOption title="Video" Icon={SubscriptionsIcon} color="#E7A33E" />
					<InputOption title="Event" Icon={EventNoteIcon} color="#C0CBCD" />
					<InputOption title="Write Article" Icon={CalendarViewDayIcon} color="#7FC15E" />
				</div>
			</div>
		</div >
	)
}

export default Feed