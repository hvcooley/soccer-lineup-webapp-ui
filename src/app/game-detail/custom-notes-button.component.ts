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
        viewButton.textContent = `View Notes`;

        viewButton.addEventListener('click', () => {
            // Handle button click event
            console.log('View Button clicked!');
        });

        Object.assign(viewButton.style, {
            display: 'inline-block',
            fontSize: 'small',
            color: 'white',
            padding: '0.8em 0.7em 0 0.7em',
            backgroundColor: '#405061',
            lineHeight: '1em',
            position: 'relative',
            left: '-1px',
            top: '-4px',
            height: '1.8em',
            minWidth: '8px',
            width: '2.5em',
            textAlign: 'center',
            marginRight: '.8em',
            borderRadius: '4px 0 0 4px',
        });

        // Create the add button
        const addButton = document.createElement('span');
        addButton.textContent = `+`;

        addButton.addEventListener('click', () => {
            // Handle button click event
            console.log('Add Button clicked!');
        });
        
        // Apply styles inline (since global styles won't apply)
        Object.assign(addButton.style, {
            display: 'inline-block',
            fontSize: 'small',
            color: 'white',
            padding: '0.8em 0.7em 0 0.7em',
            backgroundColor: '#405061',
            lineHeight: '1em',
            position: 'relative',
            left: '-1px',
            top: '-4px',
            height: '1.8em',
            minWidth: '8px',
            width: '2.5em',
            textAlign: 'center',
            marginRight: '.8em',
            borderRadius: '4px 0 0 4px',
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
