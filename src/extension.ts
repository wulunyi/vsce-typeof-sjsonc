import * as vscode from 'vscode';
import {typeofCommand} from './commands/typeof';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "typeof-sjsonc" is now active!');

    context.subscriptions.push(typeofCommand);
}

export function deactivate() {}
