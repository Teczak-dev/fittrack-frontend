import { Pie, PieChart, Tooltip } from "recharts";
import { Typography } from "../../atoms/Typography/Typography";
import mainStyles from './Widgets.module.css';
import { getTotalWorkoutsPerKind } from "../../../utils/workoutsManipulation";
import { useWorkouts } from "../../../hooks/useWorkouts";
import { useTheme } from "../../../hooks/useTheme";

export const WheelOfWorkouts = () => {
    
    const { theme } = useTheme();
    const { workouts } = useWorkouts();
    const data = getTotalWorkoutsPerKind(workouts);
    
    const bgColor = theme === 'dark' ? '#222' : '#fff';

    return (
	<div className={mainStyles.container} style={{alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
	    <Typography variant="h2" className={mainStyles.header} >Koło Treningów</Typography>
	    {data.length === 0 ? (
		<div style={{width: '100%', height: '100%' , textAlign: 'center', marginTop: '50px'}}>
		    <Typography variant='body' >Brak danych do wyświetlenia. Dodaj kilka treningów, aby zobaczyć analizę.</Typography>
		</div>
	    ) : (
	    <PieChart
		style={{ width: '300px', height: '300px' , maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }}
		responsive
	    >
	    <Pie
		data={data}
		dataKey="value"
		nameKey="name"
		cx="50%"
		cy="50%"
		outerRadius="50%"
		fill="#28f"
		isAnimationActive={true}
	    />
	    <Tooltip 
		itemStyle={{backgroundColor:bgColor}}  
		wrapperStyle={{borderRadius:'20px', backgroundColor:bgColor}} 
		labelStyle={{backgroundColor:bgColor}} 
		contentStyle={{backgroundColor:bgColor, borderRadius:'20px'}} />
	    </PieChart>
	    )}
	</div>
    );
}
