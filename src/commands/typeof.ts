import * as vscode from 'vscode';
import { findWordPosition } from '../utils';
import { typeofSjsonc } from 'typeof-sjsonc';

const { showInformationMessage, showErrorMessage } = vscode.window;
const { clipboard } = vscode.env;

const typeofCommand = vscode.commands.registerCommand('extension.typeof-sjsonc', async () => {
    try {
        const pasteText = await clipboard.readText();

        const { activeTextEditor } = vscode.window;
        

        if (activeTextEditor) {
            const typeName = 'Root';
            const result = typeofSjsonc(pasteText, typeName);

            let [ line, start ] = findWordPosition(result, typeName);

            if (result !== '') {
                activeTextEditor.edit((editBuilder) => {
                    const active = activeTextEditor.selection.active;
                    line += active.line;

                    editBuilder.insert(active, result);
                }).then(() => {
                    activeTextEditor.selection = new vscode.Selection(new vscode.Position(line, start), new vscode.Position(line, start + typeName.length));

                    showInformationMessage('生成成功');
                });
            }
        } else {
            showErrorMessage('请打开需要保存的文件');
        }
    } catch (error) {
        showErrorMessage('生成报错');
    }
});

export { typeofCommand };
