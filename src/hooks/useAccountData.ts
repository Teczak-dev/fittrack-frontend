import { useState } from 'react';
import { useWorkouts } from './useWorkouts';
import { resendVerificationEmail } from '../api/auth';
import { sendToFile } from '../utils/sendToFile';
import { useUser } from './useUser';

export const useAccountData = () => {
    const { user } = useUser();
    const { workouts } = useWorkouts();
    const sumOfWorkouts = workouts.length;
    const totalDuration = workouts.reduce((total, workout) => total + workout.duration, 0);
    const totalCalories = workouts.reduce((total, workout) => total + workout.calories, 0);
    const [sendMessage, setSendMessage] = useState<string | null>(null);
    const [displayDeleteConfirm, setDisplayDeleteConfirm] = useState(false);
    const [displayChangePassword, setDisplayChangePassword] = useState(false);

    const handleDownloadData = () => {
	const obj = {
	    userName: user?.name,
	    sumaOfWorkouts: sumOfWorkouts,
	    totalTime: totalDuration,
	    totalCalories: totalCalories,
	    workouts: workouts
	}
	sendToFile(obj, user?.name || 'user_data');
    }

    const handleResendVerEmail = () => {
	resendVerificationEmail();
	setSendMessage('E-mail weryfikacyjny został wysłany ponownie.');
	setTimeout(() => {
	    setSendMessage(null);
	}, 5000);
    }

    const handleChangePassword = () => {
	setDisplayChangePassword(true);
    }

    const closeChangePassword = () => {
	setDisplayChangePassword(false);
    }

    const closeDeleteAccount = () => {
	setDisplayDeleteConfirm(false);
    }

    const handleDeleteAccount = () => {
	setDisplayDeleteConfirm(true);
    }

    return {
	user,
	workouts,
	sumOfWorkouts,
	totalDuration,
	totalCalories,
	handleDownloadData,
	handleResendVerEmail,
	sendMessage,
	handleChangePassword,
	displayChangePassword,
	closeChangePassword,
	displayDeleteConfirm,
	handleDeleteAccount,
	closeDeleteAccount
    };

}
