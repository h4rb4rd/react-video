import { VideoList } from '../VideoList'

import cls from './App.module.scss'

const videos: string[] = [
	'https://www.youtube.com/embed/eUAd5f936Yg',
	'https://www.youtube.com/embed/jfKfPfyJRdk',
	'https://www.youtube.com/embed/iicfmXFALM8',
]

export const App = () => {
	return (
		<div className={cls.app}>
			<div>React Video</div>
			<VideoList videos={videos} />
		</div>
	)
}
