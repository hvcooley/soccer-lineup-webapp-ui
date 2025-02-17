import { InGamePlayerData } from "../inGamePlayerData";

export class CustomNotesButtonComponent {
    private eGui!: HTMLDivElement;
    private params: any;

    init(params: any) {
        this.params = params;
        const notesList: string[] = params.value; // Extract player object

        if (!notesList) {
            this.eGui = document.createElement('div');
            this.eGui.textContent = 'No Data';
            return;
        }

        this.eGui = document.createElement('div');
        this.eGui.style.display = 'flex';
        this.eGui.style.alignItems = 'center';

        // Create view button
        const viewButton = document.createElement('span');
        viewButton.textContent = `View`;

        viewButton.addEventListener('click', () => {
            // Handle button click event
            console.log('View Button clicked!');
        });

        Object.assign(viewButton.style, {
            backgroundColor: '#c2fbd7',
            borderRadius: '100px',
            boxShadow: 'rgba(44, 187, 99, .2) 0 -25px 18px -14px inset, rgba(44, 187, 99, .15) 0 1px 2px, rgba(44, 187, 99, .15) 0 2px 4px, rgba(44, 187, 99, .15) 0 4px 8px, rgba(44, 187, 99, .15) 0 8px 16px, rgba(44, 187, 99, .15) 0 16px 32px',
            color: 'green',
            cursor: 'pointer',
            display: 'inline-block',
            fontFamily: 'CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif',
            padding: '0px 20px',
            textAlign: 'center',
            textDecoration: 'none',
            transition: 'all 250ms',
            border: '0',
            fontSize: '15px',
            userSelect: 'none',
            WebkitUserSelect: 'none',
            touchAction: 'manipulation',
            marginRight: params.viewButtonMargin || '10px' // Set margin dynamically
        });

        viewButton.addEventListener('mouseover', () => {
            Object.assign(viewButton.style, {
                boxShadow: 'rgba(44, 187, 99, .35) 0 -25px 18px -14px inset, rgba(44, 187, 99, .25) 0 1px 2px, rgba(44, 187, 99, .25) 0 2px 4px, rgba(44, 187, 99, .25) 0 4px 8px, rgba(44, 187, 99, .25) 0 8px 16px, rgba(44, 187, 99, .25) 0 16px 32px',
                transform: 'scale(1.05) rotate(-1deg)',
            });
        });

        viewButton.addEventListener('mouseout', () => {
            Object.assign(viewButton.style, {
                boxShadow: 'rgba(44, 187, 99, .2) 0 -25px 18px -14px inset, rgba(44, 187, 99, .15) 0 1px 2px, rgba(44, 187, 99, .15) 0 2px 4px, rgba(44, 187, 99, .15) 0 4px 8px, rgba(44, 187, 99, .15) 0 8px 16px, rgba(44, 187, 99, .15) 0 16px 32px',
                transform: 'none',
            });
        });

        // Create the add button
        const addButton = document.createElement('span');
        addButton.textContent = `+`;

        addButton.addEventListener('click', () => {
            // Handle button click event
            console.log('Add Button clicked!');
        });

        Object.assign(addButton.style, {
            backgroundColor: '#c2fbd7',
            borderRadius: '100px',
            boxShadow: 'rgba(44, 187, 99, .2) 0 -25px 18px -14px inset, rgba(44, 187, 99, .15) 0 1px 2px, rgba(44, 187, 99, .15) 0 2px 4px, rgba(44, 187, 99, .15) 0 4px 8px, rgba(44, 187, 99, .15) 0 8px 16px, rgba(44, 187, 99, .15) 0 16px 32px',
            color: 'green',
            cursor: 'pointer',
            display: 'inline-block',
            fontFamily: 'CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif',
            padding: '0px 20px',
            textAlign: 'center',
            textDecoration: 'none',
            transition: 'all 250ms',
            border: '0',
            fontSize: 'px',
            userSelect: 'none',
            WebkitUserSelect: 'none',
            touchAction: 'manipulation',
        });

        addButton.addEventListener('mouseover', () => {
            Object.assign(addButton.style, {
                boxShadow: 'rgba(44, 187, 99, .35) 0 -25px 18px -14px inset, rgba(44, 187, 99, .25) 0 1px 2px, rgba(44, 187, 99, .25) 0 2px 4px, rgba(44, 187, 99, .25) 0 4px 8px, rgba(44, 187, 99, .25) 0 8px 16px, rgba(44, 187, 99, .25) 0 16px 32px',
                transform: 'scale(1.05) rotate(-1deg)',
            });
        });

        addButton.addEventListener('mouseout', () => {
            Object.assign(addButton.style, {
                boxShadow: 'rgba(44, 187, 99, .2) 0 -25px 18px -14px inset, rgba(44, 187, 99, .15) 0 1px 2px, rgba(44, 187, 99, .15) 0 2px 4px, rgba(44, 187, 99, .15) 0 4px 8px, rgba(44, 187, 99, .15) 0 8px 16px, rgba(44, 187, 99, .15) 0 16px 32px',
                transform: 'none',
            });
        });

        // Append elements
        this.eGui.appendChild(viewButton);
        this.eGui.appendChild(addButton);
    }

    getGui() {
        return this.eGui;
    }

    refresh(params: any) {
        this.init(params);
        return true;
    }

    destroy() {
        this.eGui.remove();
    }
}
