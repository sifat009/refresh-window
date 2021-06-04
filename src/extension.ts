// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "refresh-window" is now active!');

	// Get the current active editor
	const statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 1000);
	statusBarItem.text = `reload $(refresh)`;
	statusBarItem.command = 'refresh-window.refresh';
	statusBarItem.show();

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('refresh-window.refresh', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.commands.executeCommand('workbench.action.reloadWindow');
	});

	context.subscriptions.push(statusBarItem);
	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
