// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { observable } from 'mobx'

import { PurgeHistoryDialogState } from './dialogs/PurgeHistoryDialogState';
import { CleanEntityStorageDialogState } from './dialogs/CleanEntityStorageDialogState';
import { ConnectionParamsDialogState } from './dialogs/ConnectionParamsDialogState';
import { StartNewInstanceDialogState } from './dialogs/StartNewInstanceDialogState';

// State of Main Menu component
export class MainMenuState {

    @observable
    menuAnchorElement?: Element;

    constructor(private _purgeHistoryDialogState: PurgeHistoryDialogState,
        private _cleanEntityStorageDialogState: CleanEntityStorageDialogState,
        private _connectionParamsDialogState: ConnectionParamsDialogState,
        private _startNewInstanceDialogState: StartNewInstanceDialogState) {
    }
    
    showConnectionParamsDialog() {
        this.menuAnchorElement = undefined;

        this._connectionParamsDialogState.dialogOpen = true;
    }

    showPurgeHistoryDialog() {
        this.menuAnchorElement = undefined;
        
        this._purgeHistoryDialogState.dialogOpen = true;
    }

    showCleanEntityStorageDialog() {
        this.menuAnchorElement = undefined;

        this._cleanEntityStorageDialogState.dialogOpen = true;
    }

    showStartNewInstanceDialog() {
        this.menuAnchorElement = undefined;

        this._startNewInstanceDialogState.dialogOpen = true;
    }
}