import { Fragment } from 'react'
import ReactPlayer from 'react-player/youtube'

import PlayIcon from '../../assets/play.svg?react'
import { SimpleYouTube } from '../SimpleYouTube'

import cls from './VideoList.module.scss'

type VideoListProps = {
	videos: string[]
}

export const VideoList = ({ videos }: VideoListProps) => {
	return (
		<div className={cls.videos}>
			{videos.map(video => (
				<Fragment key={video}>
					{/* <SimpleYouTube url={video} /> */}
					<ReactPlayer
						light
						url={video}
						playIcon={<PlayIcon width='60' />}
						width='100%'
						height='240px'
						playing
					/>
				</Fragment>
			))}
		</div>
	)
}
