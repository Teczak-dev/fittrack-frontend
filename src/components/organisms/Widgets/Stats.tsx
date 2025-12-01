import mainStyles from './Widgets.module.css';
import styles from './Stats.module.css';
import { Typography } from '../../atoms/Typography/Typography';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

export const Stats = () => {
    
    const data =[
	{ name: 'Pon', kalorie: 1200, minuty: 150 },
	{ name: 'Wto', kalorie: 1000, minuty: 100},
	{ name: 'Śro', kalorie: 1500, minuty: 200 },
	{ name: 'Czw', kalorie: 200, minuty: 20},
	{ name: 'Piątek', kalorie: 200, minuty: 20},
	{ name: 'Sobota', kalorie: 200, minuty: 20},
	{ name: 'Niedziela', kalorie: 200, minuty: 20 },
    ]

    return (
	<div className={mainStyles.container}>
	    <Typography variant='h2' className={mainStyles.header}>Statystyki</Typography>
	    <div className={styles.statsContainer}>
		<BarChart className={styles.barInfo} responsive data={data}>
		    <CartesianGrid strokeDasharray="3 3" />
		    <XAxis dataKey="name" tick={{fill: 'white'}} />
		    <YAxis width='auto' tick={{fill: 'white'}} />
		    <Tooltip itemStyle={{backgroundColor:'#222'}}  wrapperStyle={{borderRadius:'20px', backgroundColor:'#222'}} labelStyle={{backgroundColor:'#222'}} contentStyle={{backgroundColor:'#222', borderRadius:'20px'}} />
		    <Legend  />
		    <Bar dataKey="kalorie" fill="#f41" isAnimationActive={true}/>
		    <Bar dataKey="minuty" fill="#14F" isAnimationActive={true}/>
		</BarChart>
	    </div>
	</div>
    );
}
