// App.tsx (React)
import React, { useEffect } from 'react';
import { Button} from './Button';

export const ReactComponent: React.FC = () => {
    useEffect(() => {
        const handleAngularEvent = (event: CustomEvent) => {
            console.log(event.detail.message); // Logs the message from Angular
            // Add further handling here
        };

        window.addEventListener('angularEvent', handleAngularEvent as EventListener);

        return () => {
            window.removeEventListener('angularEvent', handleAngularEvent as EventListener);
        };
    }, []);

    return (
        <div>
            <h1>My React App</h1>
            <Button label="Click me" />
        </div>
    );
};


