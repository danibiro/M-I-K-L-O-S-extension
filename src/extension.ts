import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(
		vscode.commands.registerCommand('miklos.start', () => {
			
			const panel = vscode.window.createWebviewPanel(
				'miklos',
				'M I K L Ó S',
				vscode.ViewColumn.One,
				{
					localResourceRoots: [context.extensionUri]
				}
			);

			let imagePath = panel.webview.asWebviewUri(vscode.Uri.joinPath(context.extensionUri, 'img', 'miklos.jpg'));
			let iconPath = vscode.Uri.joinPath(context.extensionUri, 'img', 'miklos.jpg');

			panel.webview.html = getWebViewContent(imagePath);
			panel.iconPath = {
				light: iconPath,
				dark: iconPath
			};
		})
	);
}

function getWebViewContent(imagePath: vscode.Uri) {
	return `
		<!DOCTYPE html>
		<html lang="en>
			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>M I K L Ó S</title>
			</head>
			<body>
				<img src="${imagePath}" />
			</body>
		</html>
	`;
}

export function deactivate() {}
