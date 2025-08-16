import React, { useState, useEffect } from 'react';
import { SwatchIcon } from '@heroicons/react/24/outline';
import { Button } from './button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './dropdown-menu';

interface Theme {
  name: string;
  value: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

const themes: Theme[] = [
  {
    name: 'Fire Red',
    value: 'fire',
    colors: {
      primary: '4 94% 67%', // #ff5a5a
      secondary: '210 100% 15%', // #0b2545
      accent: '217 19% 35%', // #6b7280
    }
  },
  {
    name: 'Ocean Blue',
    value: 'ocean',
    colors: {
      primary: '200 95% 55%',
      secondary: '220 25% 25%',
      accent: '200 15% 45%',
    }
  },
  {
    name: 'Forest Green',
    value: 'forest',
    colors: {
      primary: '140 85% 45%',
      secondary: '160 20% 20%',
      accent: '140 15% 40%',
    }
  },
  {
    name: 'Sunset Orange',
    value: 'sunset',
    colors: {
      primary: '25 95% 60%',
      secondary: '260 25% 25%',
      accent: '25 15% 45%',
    }
  },
  {
    name: 'Royal Purple',
    value: 'royal',
    colors: {
      primary: '270 85% 65%',
      secondary: '240 25% 20%',
      accent: '270 15% 40%',
    }
  }
];

const ThemeSwitcher: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState('fire');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'fire';
    setCurrentTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (themeValue: string) => {
    const theme = themes.find(t => t.value === themeValue);
    if (!theme) return;

    const root = document.documentElement;
    root.style.setProperty('--primary', theme.colors.primary);
    root.style.setProperty('--secondary', theme.colors.secondary);
    root.style.setProperty('--accent', theme.colors.accent);

    // Update gradient variables
    root.style.setProperty('--gradient-hero', `linear-gradient(135deg, hsl(${theme.colors.primary}), hsl(${theme.colors.secondary}))`);
    root.style.setProperty('--gradient-subtle', `linear-gradient(180deg, hsl(${theme.colors.primary} / 0.05), transparent)`);
  };

  const handleThemeChange = (themeValue: string) => {
    setCurrentTheme(themeValue);
    applyTheme(themeValue);
    localStorage.setItem('theme', themeValue);
  };

  const currentThemeData = themes.find(t => t.value === currentTheme);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <SwatchIcon className="h-4 w-4" />
          <span className="hidden sm:inline">{currentThemeData?.name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 bg-card/95 backdrop-blur-sm border border-border/50">
        {themes.map((theme) => (
          <DropdownMenuItem
            key={theme.value}
            onClick={() => handleThemeChange(theme.value)}
            className="flex items-center gap-3 cursor-pointer hover:bg-muted/50"
          >
            <div className="flex gap-1">
              <div 
                className="w-3 h-3 rounded-full border border-border/20"
                style={{ backgroundColor: `hsl(${theme.colors.primary})` }}
              />
              <div 
                className="w-3 h-3 rounded-full border border-border/20"
                style={{ backgroundColor: `hsl(${theme.colors.secondary})` }}
              />
              <div 
                className="w-3 h-3 rounded-full border border-border/20"
                style={{ backgroundColor: `hsl(${theme.colors.accent})` }}
              />
            </div>
            <span className={currentTheme === theme.value ? 'font-medium text-primary' : ''}>
              {theme.name}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeSwitcher;