import React from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { ThemeProvider, useTheme } from './components/ThemeContext';
import ClassAndFuncComponent from './components/ClassAndFuncComponent';
import PropsAndState from './components/PropsAndState';
import LifecycleClock from './components/LifecycleClock';
import EventHandling from './components/EventHandling';
import ConditionalAndList from './components/ConditionalAndList';
import ValidatedForm from './components/ValidatedForm';
import ApiFetcher from './components/ApiFetcher';
import './App.css';

function MainApp() {
    const { theme, toggleTheme } = useTheme();
    const location = useLocation();

    React.useEffect(() => {
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [theme]);

    const navItems = [
        { path: '/', label: 'Components' },
        { path: '/props-state', label: 'Props & State' },
        { path: '/lifecycle', label: 'Lifecycle Clock' },
        { path: '/events', label: 'Event Handling' },
        { path: '/conditional-list', label: 'Lists & Conditionals' },
        { path: '/forms', label: 'Form Validation' },
        { path: '/api', label: 'API Consumption' }
    ];

    return (
        <div className="dashboard-container">
            <aside className="sidebar">
                <h1 className="sidebar-title">React Training</h1>
                <nav>
                    <ul className="nav-menu">
                        {navItems.map(item => (
                            <li key={item.path}>
                                <Link 
                                    to={item.path} 
                                    className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
                                    style={{ color: '#fff', textDecoration: 'none', display: 'block' }}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div style={{ marginTop: 'auto', paddingTop: '20px' }}>
                    <button onClick={toggleTheme} style={{ width: '100%' }}>
                        Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
                    </button>
                </div>
            </aside>
            <main className="main-content">
                <div className="card">
                    <Routes>
                        <Route path="/" element={<ClassAndFuncComponent />} />
                        <Route path="/props-state" element={<PropsAndState />} />
                        <Route path="/lifecycle" element={<LifecycleClock />} />
                        <Route path="/events" element={<EventHandling />} />
                        <Route path="/conditional-list" element={<ConditionalAndList />} />
                        <Route path="/forms" element={<ValidatedForm />} />
                        <Route path="/api" element={<ApiFetcher />} />
                    </Routes>
                </div>
            </main>
        </div>
    );
}

export default function App() {
    return (
        <ThemeProvider>
            <HashRouter>
                <MainApp />
            </HashRouter>
        </ThemeProvider>
    );
}
