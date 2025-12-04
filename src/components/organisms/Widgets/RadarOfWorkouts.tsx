import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, Tooltip } from "recharts";
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
	    <Typography variant="h2" className={mainStyles.header}>Radar Treningów</Typography>
	    { data.length === 0 ? (
		<div style={{width: '100%', height: '100%', textAlign: 'center', marginTop: '50px'}}>
		    <Typography variant='body'>Brak danych do wyświetlenia. Dodaj kilka treningów, aby zobaczyć radar treningów.</Typography>
		</div>
	    ) : (
	    <RadarChart style={{ width: '90%', height: '200px',aspectRatio: 1 }} responsive data={data}>
		<PolarGrid />
		<PolarAngleAxis dataKey="name" tick={{fill: 'white'}} />
		<PolarRadiusAxis angle={60} domain={[0, data.sort((a:any,b:any) => b.value - a.value)[0].value]} tick={{fill: 'white'}} />
		<Radar
		    name="Typ"
		    dataKey="value"
		    stroke="#21F"
		    fill="#21F"
		    fillOpacity={0.6}
		    isAnimationActive={true}
		/>

		<Tooltip
		    itemStyle={{backgroundColor:bgColor}}
		    wrapperStyle={{borderRadius:'20px', backgroundColor:bgColor}}
		    labelStyle={{backgroundColor:bgColor}}
		    contentStyle={{backgroundColor:bgColor, borderRadius:'20px'}}
		/>
	    </RadarChart>
	    )}
	</div>
    );
};
