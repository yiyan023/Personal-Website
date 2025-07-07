import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { CalendarCheck } from 'react-bootstrap-icons';
import CodeIcon from '@mui/icons-material/Code';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import School from '@mui/icons-material/School';

const WorkCard = ({ work }) => {
	const getIcon = () => {
		if (work.company === "FIRST Robotics") {
			return <PrecisionManufacturingIcon />;
		} else if (work.company === "CoderSports") {
			return <School />;
		} else {
			return <CodeIcon />;
		}
	};

	return (
		<VerticalTimelineElement
			className="vertical-timeline-element--work"
			contentStyle={{ background: '#fff', color: '#1b0135' }}
			contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}
			date={<><CalendarCheck /> {work.date}</>}
			iconStyle={{ background: '#5339c4', color: '#fff' }}
			icon={getIcon()}
		>
			<a href={work.link} target="blank">
				<h3 className="vertical-timeline-element-title">{work.position} | {work.company}</h3>
			</a>
			<h4 className="vertical-timeline-element-subtitle">{work.location}</h4>
			<p>
				{work.bullets.length === 1 ? (
					<span dangerouslySetInnerHTML={{ __html: work.bullets[0] }} />
				) : (
					<ul>
						{work.bullets.map((bullet, index) => (
							<li key={index} dangerouslySetInnerHTML={{ __html: bullet }} />
						))}
					</ul>
				)}
			</p>
		</VerticalTimelineElement>
	);
};

export default WorkCard; 