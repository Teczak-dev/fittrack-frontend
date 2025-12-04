import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, Tooltip } from "recharts";
import mainStyles from './Widgets.module.css';
import { Typography } from "../../atoms/Typography/Typography";
import { useTheme } from "../../../hooks/useTheme";
import { useWorkouts } from "../../../hooks/useWorkouts";
import { getTotalWorkoutsPerCategoty } from "../../../utils/workoutsManipulation";

export const RadarOfWorkouts = () => {

    const { workouts } = useWorkouts();
    const data = getTotalWorkoutsPerCategoty(workouts);

    const {theme} = useTheme();
    const bgColor = theme === 'dark' ? '#222' : '#fff';

    return (
	<div className={mainStyles.container} style={{alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
	    <div className={mainStyles.header}>
		<Typography variant="h2">Radar Treningów</Typography>
	    </div>
	    <RadarChart style={{ width: '300px', minHeight: '300px', maxHeight: '500px' , aspectRatio: 1 }} responsive data={data}>
		<PolarGrid />
		<PolarAngleAxis dataKey="name" tick={{fill: 'white'}} />
		<PolarRadiusAxis angle={30} domain={[0, data.sort((a:any,b:any) => b.value - a.value)[0].value]} tick={{fill: 'white'}} />
		<Radar
		    name="Typ"
		    dataKey="value"
		    stroke="#21F"
		    fill="#21F"
		    fillOpacity={0.6}
		    isAnimationActive={true}
		/>

		<Legend />
		<Tooltip
		    itemStyle={{backgroundColor:bgColor}}
		    wrapperStyle={{borderRadius:'20px', backgroundColor:bgColor}}
		    labelStyle={{backgroundColor:bgColor}}
		    contentStyle={{backgroundColor:bgColor, borderRadius:'20px'}}
		/>
	    </RadarChart>
	</div>
    );
};
