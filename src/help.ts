import * as vscode from 'vscode';
import path = require('path');

export class HelpProvider implements vscode.TreeDataProvider<vscode.TreeItem> {
  getTreeItem(element: vscode.TreeItem): vscode.TreeItem {
    return element;
  }

  getChildren(_element?: vscode.TreeItem): Thenable<vscode.TreeItem[]> {
    return Promise.resolve([
      {
        label: 'Documentation',
        iconPath: {
          light: path.join(__filename, '..', '..', 'media', 'docs.svg'),
          dark: path.join(__filename, '..', '..', 'media', 'docs.svg'),
        },
        command: {
          title: 'Open Hasura Docs',
          command: 'hasura.openDocs',
        },
      },
      {
        label: 'Reach out to us on Discord',
        iconPath: path.join(__filename, '..', '..', 'media', 'discord2.svg'),
        command: {
          title: 'Reach out to us on Discord',
          command: 'hasura.openDiscordInvite',
        },
      },
      {
        label: 'Report a problem',
        iconPath: {
          light: path.join(__filename, '..', '..', 'media', 'github.svg'),
          dark: path.join(__filename, '..', '..', 'media', 'github.svg'),
        },
        command: {
          title: 'Report an issue',
          command: 'hasura.openGithubIssues',
        },
      },
    ]);
  }
}
