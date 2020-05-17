import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "hasura-cli" is now active!');

  let disposable = vscode.commands.registerCommand(
    'hasura-cli.helloWorld',
    () => {
      vscode.window.showInformationMessage('Hello World from hasura-cli!');
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
