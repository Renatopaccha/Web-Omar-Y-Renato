import { Outlet } from 'react-router';
import { DemoBanner } from './components/DemoBanner';
import { DemoHeader } from './components/DemoHeader';
import { DemoFooter } from './components/DemoFooter';
import './styles/demo-odontologia.css';

export default function DemoLayout() {
    return (
        <div className="demo-odontologia min-h-screen flex flex-col bg-background text-foreground">
            <DemoBanner />
            <DemoHeader />
            <main className="flex-1">
                <Outlet />
            </main>
            <DemoFooter />
        </div>
    );
}
