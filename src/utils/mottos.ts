const motta:string[] = [
    "Sukces to suma małych wysiłków powtarzanych dzień po dniu.",
    "Nie czekaj na idealny moment, chwyć chwilę i uczyn ją idealną.",
];

interface Motto {
    id: number;
    date: string;
}

const saveMottoForToday = (mottoId: number): void => {
    const today = new Date().toISOString().split('T')[0];
    const mottoList: Motto[] = JSON.parse(localStorage.getItem('mottoList') || '[]');
    mottoList.push({ id: mottoId, date: today });
    localStorage.setItem('mottoList', JSON.stringify(mottoList));
}

const getMottoForToday = (): string | null => {
    const today = new Date().toISOString().split('T')[0];
    const mottoList: Motto[] = JSON.parse(localStorage.getItem('mottoList') || '[]');
    const todayMotto = mottoList.find(motto => motto.date === today);
    return todayMotto ? motta[todayMotto.id] : null;
}

export const getRandomMotto = (): string => {
    const todayMotto = getMottoForToday();
    if (todayMotto) {
	return todayMotto;
    }
    const randomIndex = Math.floor(Math.random() * motta.length);
    saveMottoForToday(randomIndex);
    return motta[randomIndex];
}
