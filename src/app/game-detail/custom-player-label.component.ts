export class CustomPlayerLabelComponent {
    private eGui!: HTMLDivElement;
    private params: any;

    init(params: any) {
        this.params = params;
        const player = params.value; // Extract player object

        if (!player) {
            this.eGui = document.createElement('div');
            this.eGui.textContent = 'No Data';
            return;
        }

        this.eGui = document.createElement('div');
        this.eGui.style.display = 'flex';
        this.eGui.style.alignItems = 'center';

        // Create the badge span
        const badge = document.createElement('span');
        badge.textContent = `#${player.jerseyNum} - ${player.position}`;
        
        // Apply styles inline (since global styles won't apply)
        Object.assign(badge.style, {
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
            minWidth: '16px',
            width: '5.0em',
            textAlign: 'center',
            marginRight: '.8em',
            borderRadius: '4px 0 0 4px',
        });

        // Create player name text
        const playerName = document.createElement('span');
        playerName.textContent = ` ${player.firstName} ${player.lastName}`;

        // Append elements
        this.eGui.appendChild(badge);
        this.eGui.appendChild(playerName);
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
