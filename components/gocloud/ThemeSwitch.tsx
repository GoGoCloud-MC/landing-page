'use client';
import React, {useEffect, useState} from 'react';
import {MoonIcon, SunIcon} from 'lucide-react';
import {useTheme} from 'next-themes';

const ThemeSwitch = () => {
	const {theme, setTheme} = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<div className={'bg-gogo-dark-100/20 dark:bg-gogo-white/20 backdrop-blur-md p-4 rounded-full cursor-pointer'}

			 onClick={() => {
				 setTheme(theme === 'dark' ? 'light' : 'dark');
			 }}

		>
			{theme === 'dark' ? (
				<>
					<SunIcon/>
				</>
			) : (
				<>
					<MoonIcon/>
				</>
			)}
		</div>
	);
};

export default ThemeSwitch;
