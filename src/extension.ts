import * as vscode from 'vscode';

import { HasuraProvider } from './hasuraCLI';
import { HelpProvider } from './help';
import { initCommandFlags } from './initProject';

export function activate(context: vscode.ExtensionContext) {
  const hasuraProvider = new HasuraProvider(vscode.workspace.rootPath!);
  // vscode.window.registerTreeDataProvider('hasura', hasuraProvider);

  const terminal = vscode.window.createTerminal('hasura');

  vscode.commands.registerCommand('hasura.initProject', async () => {
    let initCommand = 'hasura init';
    const pickedItems: string[] = [];

    const projectName = await vscode.window.showInputBox({
      placeHolder: 'Provide a name of directory for Hasura migrations',
    });
    initCommand += ` ${projectName}`;

    const flags = await vscode.window.showQuickPick(
      initCommandFlags.map((flag) => {
        return vscode.window.showInputBox({
          placeHolder: `Provide a value for: ${item}`,
        });
       // ({
       // ...flag,
       // picked: pickedItems.includes(flag.label),
      }
      ,
      {
        canPickMany: true,
        placeHolder: 'flags',
        onDidSelectItem: async (item) => {
          console.log('select', { item });
          const flagValue = await vscode.window.showInputBox({
            placeHolder: `Provide a value for: ${item}`,
          });
          console.log({ flagValue });
          pickedItems.push((item as vscode.QuickPickItem).label);
        },
      }
    );

    console.log(flags);
    // .then((value) => {
    //   terminal.show();
    //   terminal.sendText(initCommand);
    //   terminal.dispose();
    // });
    console.log(initCommand);
  });

  const helpProvider = new HelpProvider();
  vscode.window.createTreeView('help', {
    treeDataProvider: helpProvider,
    showCollapseAll: true,
    canSelectMany: true,
  });
  vscode.commands.registerCommand('hasura.openDocs', () =>
    vscode.commands.executeCommand(
      'vscode.open',
      vscode.Uri.parse('https://hasura.io/docs/1.0/graphql/manual/index.html')
    )
  );
  vscode.commands.registerCommand('hasura.openDiscordInvite', () =>
    vscode.commands.executeCommand(
      'vscode.open',
      vscode.Uri.parse('https://discord.com/invite/vBPpJkS')
    )
  );
  vscode.commands.registerCommand('hasura.openGithubIssues', () =>
    vscode.commands.executeCommand(
      'vscode.open',
      vscode.Uri.parse('https://github.com/hasura/graphql-engine/issues')
    )
  );
  vscode.commands.registerCommand('hasura.refreshEntry', () =>
    hasuraProvider.refresh()
  );
}
